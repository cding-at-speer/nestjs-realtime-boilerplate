import { Controller, Get, Post, Body, Patch, Param, Delete, MessageEvent, Res, Sse } from '@nestjs/common';
import { SsedemoService } from './ssedemo.service';
import { interval, Observable } from 'rxjs';
import { Response } from 'express';
import { readFileSync } from 'fs';
import { join } from 'path';
import { map } from 'rxjs/operators';
import { CreateSsedemoDto } from './dto/create-ssedemo.dto';
import { UpdateSsedemoDto } from './dto/update-ssedemo.dto';

@Controller('ssedemo')
export class SsedemoController {
  constructor(private readonly ssedemoService: SsedemoService) {}

  @Sse('sse')
  sse(): Observable<MessageEvent> {
    return interval(1000).pipe(
      map((_) => ({ data: { hello: 'world' } } as MessageEvent)),
    );
  }


  @Post()
  create(@Body() createSsedemoDto: CreateSsedemoDto) {
    return this.ssedemoService.create(createSsedemoDto);
  }

  @Get()
  findAll() {
    return this.ssedemoService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.ssedemoService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateSsedemoDto: UpdateSsedemoDto) {
    return this.ssedemoService.update(+id, updateSsedemoDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.ssedemoService.remove(+id);
  }
}
