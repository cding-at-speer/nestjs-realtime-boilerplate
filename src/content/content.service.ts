import { Injectable } from '@nestjs/common';
import { CreateContentDto } from './dto/create-content.dto';
import { UpdateContentDto } from './dto/update-content.dto';
import { Repository } from 'typeorm';
import { Content } from './entities/content.entity';
import { InjectRepository } from '@nestjs/typeorm';

@Injectable()
export class ContentService {
  constructor(
    @InjectRepository(Content)
    private contentsRepository: Repository<Content>,
  ) {}

  create(createContentDto: CreateContentDto) {
    const content: Content = new Content();
    content.content = createContentDto.content;
    return this.contentsRepository.save(content);
  }

  findAll() {
    return this.contentsRepository.find();
    // return [{
    //   content: 'this is my first message'
    // },
    // {
    //   content: 'this is my second message'
    // }];
  }

  findOne(id: number) {
    return this.contentsRepository.findOne(id);
  }

  update(id: number, updateContentDto: UpdateContentDto) {
    return `This action updates a #${id} content`;
  }
  // return this.usersRepository.save(
  //   this.usersRepository.create({
  //     id,
  //     ...updateProfileDto,
  //   }),
  // );

  remove(id: number) {
    return `This action removes a #${id} content`;
  }
}
