import { Test, TestingModule } from '@nestjs/testing';
import { StatusController } from './status.controller';
import { StatusService } from './status.service';

import { Status } from '../models/status.model'

describe('StatusController', () => {
  let appController: StatusController;

  beforeEach(async () => {
    const app: TestingModule = await Test.createTestingModule({
      controllers: [StatusController],
      providers: [StatusService],
    }).compile();

    appController = app.get<StatusController>(StatusController);
  });

  describe('root', () => {
    it('should return "Hello World!"', () => {
      expect(appController.getStatus()).toBe(Status.RUNNING);
    });
  });
});
