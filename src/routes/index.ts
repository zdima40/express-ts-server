import { Router } from 'express';
import { indexMain } from '../controllers/index.controller';

const router = Router();

router.route('/').get(indexMain);

export default router;