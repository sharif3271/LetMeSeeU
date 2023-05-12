import { Injectable } from '@nestjs/common';
import { AuthGuard as PassportAutGuard } from '@nestjs/passport';

@Injectable()
export class AuthGuard extends PassportAutGuard('jwt') {}
