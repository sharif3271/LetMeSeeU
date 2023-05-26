
import { Injectable, HttpException, HttpStatus } from '@nestjs/common';
import { MinioService } from 'nestjs-minio-client';
import { BufferedFile, Buckets } from './file.model';
import { createHash } from 'crypto';

@Injectable()
export class MinioClientService {

  constructor(private minio: MinioService) { }
  private readonly avatarBucketName = process.env[Buckets.avatar];
  private readonly chatsBucketName = process.env[Buckets.chats];

  public get client() {
    return this.minio.client;
  }
  public async uploadAvatar(file: BufferedFile) {
    if (!(
      file.mimetype.includes('jpeg') ||
      file.mimetype.includes('jpg')  ||
      file.mimetype.includes('svg')  ||
      file.mimetype.includes('webp') ||
      file.mimetype.includes('png')
    )) {
      throw new HttpException(
        'File type not supported',
        HttpStatus.BAD_REQUEST,
      );
    }
    return await this.upload(file, this.avatarBucketName);
  }
  public async uploadForChat(file: BufferedFile) {
    return await this.upload(file, this.chatsBucketName);
  }
  private async upload(file: BufferedFile, bucketName: string) {
    const timestamp = Date.now().toString();
    const hashedFileName = createHash('md5').update(timestamp).digest('hex');
    const extension = file.originalname.substring(file.originalname.lastIndexOf('.'), file.originalname.length);
    const fileName = hashedFileName + extension;
    try {
      return {
        fileName,
        objectInfo: await this.client.putObject(bucketName, fileName, file.buffer)
      };
    } catch(err) {
      throw new HttpException(
        err?.message || 'Error uploading file',
        HttpStatus.BAD_REQUEST,
      );
    }
  }
  // a delete method not implemented becuase when a user deletes a file we just unlink it from message
}