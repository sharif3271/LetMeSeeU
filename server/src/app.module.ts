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

/**
 * the main point of this structure is simplicity to scale team.
 * every team can start to developing features. the common files that changed between 
 * teams will be the index files that super easy to handle conflicts while merging.
 */
