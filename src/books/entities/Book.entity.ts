import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class BookEntity {

    @PrimaryGeneratedColumn('uuid')
    id!: string;

    @Column()
    titulo!: string;

    @Column()
    autor!: string;

    @Column()
    anio!: number;

    @Column({ default: true })
    disponible!: boolean;
}