import { Entity, PrimaryGeneratedColumn, Column, ManyToOne } from 'typeorm';
import { User } from '../user/user.entity';

@Entity('empresas')
export class Empresa {
  @PrimaryGeneratedColumn()
  id?: number;

  @Column({ type: 'varchar', length: 120 })
  name: string;

  @Column({ type: 'varchar', length: 14, unique: true })
  cnpj: string;

  @Column()
  description: string;

  @ManyToOne(() => User, (user) => user.empresas)
  user: User;
}
