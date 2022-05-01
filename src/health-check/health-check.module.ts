import { Module } from '@nestjs/common';
import { ScheduleModule } from '@nestjs/schedule';
import { HealthCheckService } from './health-check.service.service';

@Module({
  imports: [
    ScheduleModule.forRoot()
  ],
  controllers: [],
  providers: [HealthCheckService],
})
export class HealthCheckModule {}
