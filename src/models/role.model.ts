import { Entity, PrimaryGeneratedColumn, Column, ManyToMany } from "typeorm";

@Entity({
  name: 'role'
})
class Role {
  @PrimaryGeneratedColumn()
  role_id: number;

  @Column({
    nullable: false,
  })
  role_title: string;

  @Column({
    nullable: true,
    default: ''
  })
  role_description: string;
}

export default Role;