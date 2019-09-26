import { Request, Response } from 'express';

import { Get, JsonController } from 'routing-controllers';

@JsonController('/user')
export class UserController {
    
    @Get('/')
    public indexMain(request: Request, response: Response) {
        return "Hello User!";
    }
}
