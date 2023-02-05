import {
  Entity,
  PrimaryGeneratedColumn,
  Column,
  OneToMany,
  JoinTable,
  JoinColumn
} from 'typeorm';
import Product from './product.model';

@Entity({
  name: 'category'
})
class Category {
  @PrimaryGeneratedColumn()
  category_id: number;

  @Column({
    nullable: false,
    unique: true
  })
  category_name: string;

  @Column({
    nullable: true,
    default: ''
  })
  category_description: string;

  @OneToMany(() => Product, (product) => product.product_category)
  @JoinTable({
    name: 'category_products'
  })
  category_products: Product[];
}

export default Category;
