import { ConnectionOptions } from 'typeorm';

const environment = process.env.NODE_ENV;

export const config: ConnectionOptions = {
    type: 'postgres',
    host: 'localhost',
    port: 5432,
    username: 'hackathon',
    password: 'hackathon',
    database: environment === 'prod' ? 'kazan' : 'kazan_dev',
    entities: [__dirname + '/entities/*'],
    migrations: [__dirname + '/migrations/*'],
    cli: {
        migrationsDir: 'src/migrations',
    },
}

module.exports = config;