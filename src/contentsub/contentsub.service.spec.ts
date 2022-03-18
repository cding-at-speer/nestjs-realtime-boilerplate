import { Test, TestingModule } from '@nestjs/testing';
import { ContentsubService } from './contentsub.service';

describe('ContentsubService', () => {
  let service: ContentsubService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [ContentsubService],
    }).compile();

    service = module.get<ContentsubService>(ContentsubService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
