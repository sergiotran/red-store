import { Entity, PrimaryGeneratedColumn, Column, OneToOne } from "typeorm";
import { JoinColumn } from "typeorm/decorator/relations/JoinColumn";
import Role from './role.model';

@Entity({
  name: 'user'
})
class User {
  @PrimaryGeneratedColumn()
  user_id: number;

  @Column({
    nullable: false,
    unique: true,
  })
  user_name: string;

  @Column({
    nullable: false,
    unique: true,
  })
  user_email: string;

  @Column({
    nullable: false,
    type: 'datetime'
  })
  user_dob: string;

  @Column({
    nullable: false,
  })
  user_address: string;

  @OneToOne(() => Role)
  @JoinColumn({
    name: 'user_role_id',
  })
  role: Role;
}

export default User;