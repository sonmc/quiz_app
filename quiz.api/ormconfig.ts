import { ConnectionOptions } from 'typeorm';
const config: ConnectionOptions = {
    type: 'mysql',
    host: 'localhost',
    port: 3306,
    username: 'root',
    password: '1234567',
    database: 'quizApp',
    entities: [__dirname + '/**/*.entity{.ts,.js}'],
    synchronize: true,
    migrationsRun: true,
    logging: true,
    logger: 'file',
    migrations: [
        "src/migrations/*.ts",
        "dist/migrations/*{.ts,.js}"
    ],
    cli: {
        migrationsDir: 'src/migrations',
    },
}
export = config;