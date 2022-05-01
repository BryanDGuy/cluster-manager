import { Injectable } from '@nestjs/common';
import { Cron, CronExpression } from '@nestjs/schedule';

import { Status } from '../models/status.model'

@Injectable()
export class HealthCheckService {
  private readonly serviceList = [
    'service1',
    'service2',
    'service3',
    'service4'
  ]

  @Cron(CronExpression.EVERY_5_SECONDS)
  doHealthCheck(): void {
    const message = this.serviceList
      .map((serviceName) => JSON.stringify({
        serviceName,
        status: Status.RUNNING
      }))
      .join(', ');
    console.log(message)
  }
}