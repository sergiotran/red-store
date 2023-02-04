import { Entity, PrimaryGeneratedColumn, Column } from 'typeorm';

@Entity({
  name: 'media'
})
class Media {
  @PrimaryGeneratedColumn()
  media_id: number;

  @Column({
    nullable: false
  })
  media_source: string;

  @Column({
    nullable: true,
    default: 'image'
  })
  media_alt: string;
}

export default Media;