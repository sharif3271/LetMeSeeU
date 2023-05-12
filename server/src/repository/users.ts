import { Injectable } from '@nestjs/common';
import { PrismaClient } from '@prisma/client';

@Injectable()
export class UserRepository {
  private readonly _client: PrismaClient;
  constructor() {
    this._client = new PrismaClient();
  }
  get prismaClient() {
    return this._client;
  }
  get users() {
    return this._client.users;
  }
}