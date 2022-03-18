import { Test, TestingModule } from '@nestjs/testing';
import { ContentsubGateway } from './contentsub.gateway';
import { ContentsubService } from './contentsub.service';

describe('ContentsubGateway', () => {
  let gateway: ContentsubGateway;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [ContentsubGateway, ContentsubService],
    }).compile();

    gateway = module.get<ContentsubGateway>(ContentsubGateway);
  });

  it('should be defined', () => {
    expect(gateway).toBeDefined();
  });
});
