import { Module } from '@nestjs/common';
import { AuthModule } from './modules/auth';
import { UserRepository } from './repository';
import { MinioClientModule } from './modules/minio-client';
import * as controllersObject from './controllers';
import * as servicesObject from './services';

@Module({
  imports: [
    AuthModule,
    MinioClientModule,
  ],
  controllers: Object.values(controllersObject),
  providers: [UserRepository, ...Object.values(servicesObject)],
})
export class AppModule {}
