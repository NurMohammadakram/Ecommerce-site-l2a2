import { Request, Response } from 'express';
import { orderServices } from './order.service';
import { productServices } from '../product/product.service';

const createOrder = async (req: Request, res: Response) => {
  try {
    const orderData = req.body;
    const product = await productServices.getProductByIdFromDB(
      orderData.productId,
    );
    if (!product) {
      return res
        .status(404)
        .send({ success: false, message: 'Product not found' });
    }
    if (product.inventory.quantity < orderData.quantity) {
      return res.status(400).send({
        success: false,
        message: 'Insufficient quantity available in inventory',
      });
    }

    product.inventory.quantity -= orderData.quantity;
    product.inventory.inStock = product.inventory.quantity > 0;
    await productServices.updateProductIntoDB(orderData.productId, product);

    const order = await orderServices.createOrderIntoDB(orderData);

    res.status(200).json({
      success: true,
      message: 'Order created successfully',
      data: order,
    });
  } catch (error) {
    console.log(error);
  }
};

const getAllOrder = async (req: Request, res: Response) => {
  try {
    const email = req.query.email?.toString();
    if (email) {
      const data = await orderServices.searchByEmailFromDB(email);
      if (data.length) {
        res.status(200).json({
          success: true,
          message: 'Orders fetched successfully for user email',
          data: data,
        });
      }
      res.status(404).json({
        success: false,
        message: 'can not find orders for this email',
        data: null,
      });
    }
    const orderData = await orderServices.getAllOrderFromDB();
    res.status(200).json({
      success: true,
      message: 'Orders fetched successfully!',
      data: orderData,
    });
  } catch (error) {
    console.log(error);
  }
};

export const orderControllers = {
  createOrder,
  getAllOrder,
};
