import { Controller, Body, Request, Post, Get, UseGuards, UseInterceptors, UploadedFile, Query } from '@nestjs/common';
import { FileInterceptor } from '@nestjs/platform-express';
import { ILoginBody, IProtectedReq, IRegisterBody } from 'src/interfaces';
import { AuthGuard } from 'src/modules/auth';
import { BufferedFile } from 'src/modules/minio-client';
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
  @Get('list?')
  async usersList(@Request() req: IProtectedReq, @Query('query') query: string) {
    return this.userService.searchInUsers(query, req.user.id);
  }
  
  @UseGuards(AuthGuard)
  @Get('profile')
  async getMyInfo(@Request() req: IProtectedReq) {
    return this.userService.profile(req.user.id);
  }

  @UseGuards(AuthGuard)
  @Post('avatar-upload')
  @UseInterceptors(FileInterceptor('image'))
  async uploadAvatar(
    @Request() req: IProtectedReq,
    @UploadedFile() image: BufferedFile
  ) {
    return this.userService.uploadAvatar(image, req.user.id);
  }
}