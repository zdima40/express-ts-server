import "reflect-metadata";
import { App } from './app';
import { DataBase } from './db'
import { config } from './ormconfig';

import { useExpressServer } from 'routing-controllers';

async function main() {

    //await DataBase.connection(config);
    const app = new App(); //new App(<PORT>);
    console.log(__dirname + '/controllers/*.*')
    useExpressServer(app.app, {
        routePrefix: '/api',
        controllers: [__dirname + '/controllers/*'],
    });
    await app.listen();
}

main();