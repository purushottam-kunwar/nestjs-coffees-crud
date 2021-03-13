import { Column, Entity, In, Index, PrimaryGeneratedColumn } from 'typeorm';
@Index(['name', 'type'])
@Entity()
export class Event {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  type: string;

  @Index()
  @Column()
  name: string;

  @Column()
  payLoad: Record<string, any>;
}
