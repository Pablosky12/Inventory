import {Entity, PrimaryGeneratedColumn, Column, OneToOne, JoinColumn} from "typeorm";
import { Shoe } from "./Shoe"

@Entity()
export class Operation {
    @PrimaryGeneratedColumn()
    id: number;

    @OneToOne(type => Shoe, Shoe => Shoe.id)
    @JoinColumn()   
    productId: string;
    
    @Column()
    date: string;
    
    @Column()
    type: string;
}