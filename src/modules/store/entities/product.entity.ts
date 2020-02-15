import { Entity, PrimaryGeneratedColumn, Column } from "typeorm";

@Entity({
    name: 'products'
})
export class Product{
    @PrimaryGeneratedColumn()
    id: number;

    @Column({length: 80})
    title: string;

    @Column('text')
    description: string;

    @Column('decimal')
    price: number;

    @Column('decimal')
    quantityOnHand: number;
}