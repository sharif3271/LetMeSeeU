import { Controller, Body, Request, Post, Get, UseGuards } from '@nestjs/common';
import { ILoginBody, IRegisterBody } from 'src/interfaces';
import { AuthGuard } from 'src/modules/auth';
import { UsersService } from 'src/services';

@Controller('user')
export class UserController {
  constructor(private userService: UsersService) {}

  @Post('login')
  async userLogin(@Body() body: ILoginBody) {
    return this.userService.login(body);
  }
  @Post('register')
  async userRegister(@Body() body: IRegisterBody) {
    return this.userService.register(body);
  }
  
  @UseGuards(AuthGuard)
  @Get('whoami')
  async getMyInfo(@Request() req: unknown) {
    return (req as any).user;
  }
}