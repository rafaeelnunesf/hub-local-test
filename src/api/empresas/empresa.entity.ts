import {
  Entity,
  PrimaryGeneratedColumn,
  Column,
  ManyToOne,
  OneToMany,
} from 'typeorm';
import { Local } from '../locais/local.entity';
import { User } from '../user/user.entity';

@Entity('empresas')
export class Empresa {
  @PrimaryGeneratedColumn()
  id?: number;

  @Column()
  userId: number;

  @Column({ type: 'varchar', length: 120 })
  name: string;

  @Column({ type: 'varchar', length: 14, unique: true })
  cnpj: string;

  @Column()
  description: string;

  @ManyToOne(() => User, (user) => user.empresas)
  user: User;

  @OneToMany(() => Local, (local) => local.empresa)
  locais?: Local[];
}
