import { Entity, PrimaryGeneratedColumn, Column, OneToMany, JoinTable } from "typeorm";
import Product from "./product.model";

@Entity({
  name: 'category'
})
class Category {
  @PrimaryGeneratedColumn()
  category_id: number;

  @Column({
    nullable: false
  })
  category_name: string;

  @Column({
    nullable: true,
    default: ''
  })
  category_description: string;

  @OneToMany(() => Product, (product) => product.product_category)
  @JoinTable()
  category_products: Product[]
}

export default Category;