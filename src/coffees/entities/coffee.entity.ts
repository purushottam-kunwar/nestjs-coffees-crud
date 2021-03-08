import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';
@Entity() // sql table == 'coffee'
export class Coffee {
  @PrimaryGeneratedColumn() // for primary key
  id: number;

  @Column()
  name: string;

  @Column()
  brand: string;

  @Column('json', { nullable: true })
  flavors: string[];
}