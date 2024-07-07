import { IOrder } from './order.interface';
import { OrderModel } from './order.model';

const createOrderIntoDB = async (orderData: IOrder) => {
  const order = await OrderModel.create(orderData);
  return order;
};

const getAllOrderFromDB = async () => {
  const result = await OrderModel.find();
  return result;
};

const searchByEmailFromDB = async (email: string) => {
  const result = await OrderModel.find({ email: email });
  return result;
};

export const orderServices = {
  createOrderIntoDB,
  getAllOrderFromDB,
  searchByEmailFromDB,
};
