import { Injectable } from '@nestjs/common';
import { CreateSsedemoDto } from './dto/create-ssedemo.dto';
import { UpdateSsedemoDto } from './dto/update-ssedemo.dto';

@Injectable()
export class SsedemoService {
  create(createSsedemoDto: CreateSsedemoDto) {
    return 'This action adds a new ssedemo';
  }

  findAll() {
    return `This action returns all ssedemo`;
  }

  findOne(id: number) {
    return `This action returns a #${id} ssedemo`;
  }

  update(id: number, updateSsedemoDto: UpdateSsedemoDto) {
    return `This action updates a #${id} ssedemo`;
  }

  remove(id: number) {
    return `This action removes a #${id} ssedemo`;
  }
}
