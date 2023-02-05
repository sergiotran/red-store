import { DataSource, DataSourceOptions } from 'typeorm';
import Env from '@redStore/app/env';
import { createDatabase, setDataSource } from 'typeorm-extension';

const initDatabase = async () => {
  try {
    const options = {
      type: 'mysql',
      host: Env.getEnvironmentVariable('DATABASE_HOST') || 'localhost',
      port: +(Env.getEnvironmentVariable('DATABASE_PORT') || 3306),
      username: Env.getEnvironmentVariable('DATABASE_USERNAME'),
      password: Env.getEnvironmentVariable('DATABASE_PASSWORD'),
      database: Env.getEnvironmentVariable('DATABASE_NAME'),
      entities: ['../**/*.model.{js,ts}'],
      logging: false,
      synchronize: process.env.NODE_ENV !== 'production'
    } as DataSourceOptions;

    await createDatabase({
      ifNotExist: true,
      options
    });

    const myDataSource = new DataSource(options);
    setDataSource(myDataSource, 'source');
    return myDataSource;
  } catch (error) {
    throw error as Error;
  }
};

export default initDatabase;
