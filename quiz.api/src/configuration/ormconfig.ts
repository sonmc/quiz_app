import { DataSource } from 'typeorm';
// eslint-disable-next-line @typescript-eslint/no-var-requires
require('dotenv').config();
console.log({
  host: process.env.DATABASE_HOST,
  type: 'mysql',
  port: Number(process.env.DATABASE_PORT),
  username: process.env.DATABASE_USERNAME,
  password: process.env.DATABASE_PASSWORD,
  database: process.env.DATABASE_NAME,
  entities: ['src/**/**.entity{.ts,.js}'],
  migrations: ['src/database/migrations/*.ts'],
  synchronize: false,
});
export const connectSource = new DataSource({
  host: process.env.DATABASE_HOST,
  type: 'mysql',
  port: Number(process.env.DATABASE_PORT),
  username: process.env.DATABASE_USERNAME,
  password: process.env.DATABASE_PASSWORD,
  database: process.env.DATABASE_NAME,
  entities: ['src/**/**.entity{.ts,.js}'],
  migrations: ['src/migrations/*.ts'],
  synchronize: false,
});

// connectSource.initialize();
