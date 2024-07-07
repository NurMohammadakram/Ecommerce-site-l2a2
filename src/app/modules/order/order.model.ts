import { model, Schema } from 'mongoose';
import { IOrder } from './order.interface';

export const orderSchema = new Schema<IOrder>({
  email: { type: String, required: true },
  productId: {
    type: Schema.Types.ObjectId,
    ref: 'ProductModel',
    required: true,
  },
  price: { type: Number, required: true },
  quantity: { type: Number, required: true },
});

export const OrderModel = model<IOrder>('Order', orderSchema);
