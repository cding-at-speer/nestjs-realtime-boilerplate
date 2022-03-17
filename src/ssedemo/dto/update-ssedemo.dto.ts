import { PartialType } from '@nestjs/swagger';
import { CreateSsedemoDto } from './create-ssedemo.dto';

export class UpdateSsedemoDto extends PartialType(CreateSsedemoDto) {}
