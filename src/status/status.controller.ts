import { Controller, Get } from '@nestjs/common';
import { StatusService } from './status.service';

import { Status } from '../models/status.model'

@Controller()
export class StatusController {
  constructor(private readonly appService: StatusService) {}

  @Get('/status')
  getStatus(): Status {
    return this.appService.getStatus();
  }
}
