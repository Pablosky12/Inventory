import {Entity, PrimaryGeneratedColumn, Column, OneToOne, JoinColumn} from "typeorm";
import { Brand } from "./Brand"

@Entity()
export class Shoe {
    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    codename: string;
    
    @Column()
    price: string;

    @Column()
    imageSrc: string;

    @OneToOne(type => Brand, Brand => Brand.id)
    @JoinColumn()
    brand: number;
}