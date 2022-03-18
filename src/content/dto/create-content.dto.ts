import { IsNotEmpty, IsString } from 'class-validator';
export class CreateContentDto {
  @IsString()
  @IsNotEmpty()
  public content: string;
}
