import { Entity, PrimaryGeneratedColumn, Column, OneToMany, JoinTable, OneToOne, JoinColumn } from "typeorm";
import Product from '../models/product.model';

@Entity({
  name: 'category'
})
class Discount {
  @PrimaryGeneratedColumn()
  discount_id: number;

  @Column({
    nullable: false
  })
  discount_code: string;

  @Column({
    nullable: false
  })
  discount_min_order_val: number;

  @Column({
    nullable: false
  })
  discount_max_ammount: number;

  @OneToOne(() => Product)
  @JoinColumn({
    name: 'product'
  })
  product: Product;
}

export default Discount;