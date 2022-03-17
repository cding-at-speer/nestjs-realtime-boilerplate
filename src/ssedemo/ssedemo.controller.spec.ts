import { Test, TestingModule } from '@nestjs/testing';
import { SsedemoController } from './ssedemo.controller';
import { SsedemoService } from './ssedemo.service';

describe('SsedemoController', () => {
  let controller: SsedemoController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [SsedemoController],
      providers: [SsedemoService],
    }).compile();

    controller = module.get<SsedemoController>(SsedemoController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
