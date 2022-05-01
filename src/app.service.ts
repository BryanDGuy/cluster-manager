import { Injectable } from '@nestjs/common';

import { Status } from './models/status.model'

@Injectable()
export class AppService {
  getStatus(): Status {
    return Status.RUNNING;
  }
}
