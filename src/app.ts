import express, { Application } from 'express';
import cors from 'cors';
import { productRouter } from './app/modules/product/product.route';
import { orderRouters } from './app/modules/order/order.route';
import { notFound } from './app/config/notFound';

const app: Application = express();
// parsers
app.use(express.json());
app.use(cors());

// products router
app.use('/api/products', productRouter);

// orders router
app.use('/api/orders', orderRouters);

app.use('*', notFound)

export default app;
