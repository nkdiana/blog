import {Column, Entity, PrimaryGeneratedColumn} from 'typeorm';


@Entity()
export class Post {
    @PrimaryGeneratedColumn() //auto increamenting integer
    id: number;

    @Column()
    title: string;
}
