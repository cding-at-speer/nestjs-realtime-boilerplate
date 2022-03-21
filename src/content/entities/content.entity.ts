import { Entity, Column, PrimaryGeneratedColumn, AfterInsert } from 'typeorm';

@Entity()
export class Content {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  content: string;

  @AfterInsert()
  resetCounters() {
    console.log('test---insert');
  }
}
