import { createConnection, useContainer, ConnectionOptions } from 'typeorm';

export class DataBase {
    static async connection(ormconfig: ConnectionOptions) {
        await createConnection(ormconfig);
    }
}