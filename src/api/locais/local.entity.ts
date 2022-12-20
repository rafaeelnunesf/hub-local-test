import { Column, Entity, ManyToOne, PrimaryGeneratedColumn } from 'typeorm';
import { Empresa } from '../empresas/empresa.entity';

@Entity('locais')
export class Local {
  @PrimaryGeneratedColumn()
  id?: number;

  @Column({ type: 'varchar', length: 120 })
  name: string;

  @Column({ type: 'varchar', length: 8, unique: true })
  cep: string;

  @Column()
  logradouro?: string;

  @Column()
  complemento?: string;

  @Column()
  bairro?: string;

  @Column()
  localidade: string;

  @Column()
  uf: string;

  @ManyToOne(() => Empresa, (empresa) => empresa.locais)
  empresa: Empresa;

  @Column()
  empresaId: number;
}
