import express, { Application } from 'express';
import logger from 'morgan';

export class App {
    public app: Application;

    public constructor(private port?: number) {
        this.app = express();
        this.settings();
        this.middlewares();
    }

    private settings() {
        this.app.set('port', this.port || process.env.PORT || 3000);
    }

    private middlewares() {
        this.app.use(logger('dev'));
        this.app.use(express.json());
    }

    public async listen(): Promise<void> {
        try {
            const PORT = this.app.get('port');
            await this.app.listen(PORT);
            console.log(`Server is running on port ${PORT}`);
        } catch (error) {
            console.log(`listen(): ${error}`)
        }
    }
}