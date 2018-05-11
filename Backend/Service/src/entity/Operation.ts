import {Entity, PrimaryGeneratedColumn, Column, OneToOne, JoinColumn, OneToMany, ManyToOne, ManyToMany} from "typeorm";
import { Shoe } from "./Shoe"

@Entity()
export class Operation {
    @PrimaryGeneratedColumn()
    id: number;

    @OneToOne(type=> Shoe)
    @JoinColumn()
    productId: string;

    @Column()
    date: string;
    
    @Column()
    type: string;
    
    @Column()
    ammount: string;

    @Column()
    price: number;
}