import { Injectable } from '@nestjs/common';
import { PrismaClient } from '@prisma/client';

@Injectable()
export class MessageRepository {
  private readonly _client: PrismaClient;
  constructor() {
    this._client = new PrismaClient();
  }
  get prismaClient() {
    return this._client;
  }
  get message() {
    return this._client.message;
  }
}