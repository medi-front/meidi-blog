import { EntityModel } from "@midwayjs/orm";
import {
  PrimaryColumn,
  Column,
  BaseEntity,
} from "typeorm";


@EntityModel()
export class User extends BaseEntity {

    @PrimaryColumn()
    id: number

    @Column()
    userName: string

    @Column()
    password: string
}
