import { Module } from '@nestjs/common';
import { AuthModule } from './modules/auth';
import * as repositories from './repository';
import { MinioClientModule } from './modules/minio-client';
import * as controllers from './controllers';
import * as services from './services';

@Module({
  imports: [
    AuthModule,
    MinioClientModule,
  ],
  controllers: Object.values(controllers),
  providers: [...Object.values(repositories), ...Object.values(services)],
})
export class AppModule {}
