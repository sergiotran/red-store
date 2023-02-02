import { DataSource } from 'typeorm';
import Env from '@redStore/app/env';


const myDataSource = new DataSource({
  type: 'mysql',
  host: Env.getEnvironmentVariable('DATABASE_HOST') || 'localhost',
  port: +(Env.getEnvironmentVariable('DATABASE_PORT') || 3306),
  username: Env.getEnvironmentVariable('DATABASE_USERNAME'),
  password: Env.getEnvironmentVariable('DATABASE_PASSWORD'),
  database: Env.getEnvironmentVariable('DATABASE_NAME'),
  entities: ['../**/*.entity.{js,ts}'],
  logging: true,
  synchronize: process.env.NODE_ENV !== 'production'
});

export default myDataSource;