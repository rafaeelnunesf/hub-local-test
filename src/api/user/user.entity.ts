import { Entity, PrimaryGeneratedColumn, Column, OneToMany } from 'typeorm';
import { Empresa } from '../empresas/empresa.entity';

@Entity('users')
export class User {
  @PrimaryGeneratedColumn()
  id?: number;

  @Column({ type: 'varchar', length: 120 })
  name: string;

  @Column({ type: 'varchar', length: 120, unique: true })
  email: string;

  @Column()
  password: string;

  @OneToMany(() => Empresa, (empresa) => empresa.user)
  empresas?: Empresa[];
}
