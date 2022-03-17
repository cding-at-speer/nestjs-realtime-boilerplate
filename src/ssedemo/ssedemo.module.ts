import { Module } from '@nestjs/common';
import { SsedemoService } from './ssedemo.service';
import { SsedemoController } from './ssedemo.controller';

@Module({
  controllers: [SsedemoController],
  providers: [SsedemoService]
})
export class SsedemoModule {}
