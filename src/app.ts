import express, { Application, Request, Response } from 'express';
import cors from 'cors';
import { productRouter } from './app/modules/product/product.route';

const app: Application = express();
// parsers
app.use(express.json());
app.use(cors());

// product routers
app.use('/api/products', productRouter);

app.get('/', (req: Request, res: Response) => {
  res.send('Hello World!');
});

export default app;
