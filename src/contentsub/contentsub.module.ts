import { Module } from '@nestjs/common';
import { ContentsubService } from './contentsub.service';
import { ContentsubGateway } from './contentsub.gateway';

@Module({
  providers: [ContentsubGateway, ContentsubService],
})
export class ContentsubModule {}
