import { Module } from '@nestjs/common';
import { AuthModule } from './modules/auth';
import { UserRepository } from './repository';
import * as controllersObject from './controllers';
import * as servicesObject from './services';

@Module({
  imports: [AuthModule],
  controllers: Object.values(controllersObject),
  providers: [UserRepository, ...Object.values(servicesObject)],
})
export class AppModule {}
