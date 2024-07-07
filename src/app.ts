import express, { Application, Request, Response } from 'express';
import cors from 'cors';
import { productRouter } from './app/modules/product/product.route';
import { orderRouters } from './app/modules/order/order.route';

const app: Application = express();
// parsers
app.use(express.json());
app.use(cors());

// products router
app.use('/api/products', productRouter);

// orders router
app.use('/api/orders', orderRouters);

app.get('/', (req: Request, res: Response) => {
  res.send('Hello World!');
});

export default app;
