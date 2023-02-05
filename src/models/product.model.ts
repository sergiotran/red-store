import {
  Entity,
  PrimaryGeneratedColumn,
  Column,
  JoinColumn,
  OneToMany,
  JoinTable,
  ManyToOne,
  ManyToMany
} from 'typeorm';
import Category from './category.model';

@Entity({
  name: 'product'
})
class Product {
  @PrimaryGeneratedColumn()
  product_id: number;

  @Column({
    nullable: false
  })
  product_name: string;

  @Column({
    nullable: false
  })
  product_description: string;

  @Column({
    nullable: false
  })
  product_price: string;

  @ManyToOne(() => Category, (category) => category.category_products)
  @JoinColumn({
    name: 'product_category_id'
  })
  product_category: Category;
}

export default Product;
