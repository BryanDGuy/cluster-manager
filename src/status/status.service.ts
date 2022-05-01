import { Injectable } from '@nestjs/common';

import { Status } from '../models/status.model'

@Injectable()
export class StatusService {
  getStatus(): Status {
    return Status.RUNNING;
  }
}
