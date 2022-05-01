import { Module } from '@nestjs/common';
import { HealthCheckModule } from './health-check/health-check.module';
import { StatusModule } from './status/status.module'

@Module({
  imports: [
    HealthCheckModule,
    StatusModule
  ],
  controllers: [],
  providers: [],
})
export class AppModule {}
