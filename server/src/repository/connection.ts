import { Injectable } from '@nestjs/common';
import { PrismaClient } from '@prisma/client';

@Injectable()
export class ConnectionRepository {
  private readonly _client: PrismaClient;
  constructor() {
    this._client = new PrismaClient();
  }
  get prismaClient() {
    return this._client;
  }
  get connection() {
    return this._client.user;
  }
}