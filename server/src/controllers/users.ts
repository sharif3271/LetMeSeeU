import { Controller, Body, Request, HttpException, HttpStatus, Post, Get, UseGuards } from '@nestjs/common';
import { IProfileReq } from 'src/interfaces';
import { AuthGuard } from 'src/modules/auth';
import { UsersService } from 'src/services';

@Controller('clients')
export class HandshakeController {
  constructor(private userService: UsersService) {}

  @Post('auth')
  async getUserInfo(@Body() body: IProfileReq): Promise<{chatToken: string}> {
    return this.userService.getUserProfile(body.accessToken, body.userType);
  }
  
  @UseGuards(AuthGuard)
  @Get('whoami')
  async getMyInfo(@Request() req: unknown) {
    return (req as any).user;
  }
}

/** @TODO token contains important data of clients, fix it please */