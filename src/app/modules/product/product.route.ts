import { Router } from 'express';
import { productControllers } from './product.controller';

const router = Router();

// product routers path
router.post('/', productControllers.createProduct);
router.get('/', productControllers.getAllProduct);
router.get('/:productId', productControllers.getProductById);
router.put('/:productId', productControllers.updateProduct);
router.delete('/:productId', productControllers.deleteProduct);

export const productRouter = router;
