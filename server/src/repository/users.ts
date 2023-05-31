import { Injectable } from '@nestjs/common';
import { PrismaClient, Prisma } from '@prisma/client';

@Injectable()
export class UserRepository {
  private readonly _client: PrismaClient;
  constructor() {
    const options: Prisma.PrismaClientOptions = process.env.RUNNING_MODE === 'development' ? {
      log: [{
        emit: 'stdout',
        level: 'query',
      }]
    } : {};
    console.log(options);
    
    this._client = new PrismaClient(options);
  }
  get prismaClient() {
    return this._client;
  }
  get user() {
    return this._client.user;
  }
}