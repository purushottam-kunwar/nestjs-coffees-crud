import {
  Column,
  Entity,
  JoinTable,
  ManyToMany,
  PrimaryGeneratedColumn,
} from 'typeorm';
import { Flavor } from './flavor.entity';

@Entity() // sql table == 'coffee'
export class Coffee {
  @PrimaryGeneratedColumn() // for primary key
  id: number;

  @Column()
  name: string;

  @Column({ default: 0 })
  recommedations: number;

  @Column({ nullable: true })
  description: string;

  @Column()
  brand: string;

  @JoinTable()
  @ManyToMany(() => Flavor, (flavor) => flavor.coffees, {
    cascade: true, // insert into database
  })
  flavors: Flavor[];
}
