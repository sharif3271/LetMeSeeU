import { Controller, Request, Get, UseGuards, Post, Param } from '@nestjs/common';
import { IProtectedReq } from 'src/interfaces';
import { AuthGuard } from 'src/modules/auth';
import { ConnectionService } from 'src/services';

@Controller('connections')
export class ConnectionsController {
  constructor(
    private connectionService: ConnectionService
  ) {}
  
  @UseGuards(AuthGuard)
  @Get(':type')
  async getAll(@Request() req: IProtectedReq, @Param('type') type) {
  }

  @UseGuards(AuthGuard)
  @Post()
  async createConnection(@Request() req: IProtectedReq) {
  }

}