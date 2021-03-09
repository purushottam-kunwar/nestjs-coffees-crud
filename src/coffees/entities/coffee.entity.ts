import {
  Column,
  Entity,
  JoinTable,
  ManyToMany,
  PrimaryGeneratedColumn,
} from 'typeorm';
@Entity() // sql table == 'coffee'
export class Coffee {
  @PrimaryGeneratedColumn() // for primary key
  id: number;

  @Column()
  name: string;

  @Column()
  brand: string;

  @JoinTable()
  @ManyToMany(
    type => Flavor,
    flavor => flavor.coffees,
  )
  flavors: string[];
}