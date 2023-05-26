
export interface BufferedFile {
  fieldname: string;
  originalname: string;
  encoding: string;
  mimetype: string;
  size: number;
  buffer: Buffer | string;
}

export enum Buckets {
  avatar = 'AVATARS_BUCKET_NAME',
  chats = 'CHATS_BUCKET_NAME',
}