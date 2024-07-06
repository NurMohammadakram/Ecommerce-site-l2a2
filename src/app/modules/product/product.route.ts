import { Router } from 'express';
import { productControllers } from './product.controller';

const router = Router();

// routers path
router.post('/', productControllers.createProduct);

export const productRouter = router;
