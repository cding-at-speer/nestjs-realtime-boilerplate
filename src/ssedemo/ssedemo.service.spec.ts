import { Test, TestingModule } from '@nestjs/testing';
import { SsedemoService } from './ssedemo.service';

describe('SsedemoService', () => {
  let service: SsedemoService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [SsedemoService],
    }).compile();

    service = module.get<SsedemoService>(SsedemoService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
