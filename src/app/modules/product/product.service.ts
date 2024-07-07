import { IProduct } from './product.interface';
import { ProductModel } from './product.model';

const createProductIntoDB = async (product: IProduct) => {
  const result = await ProductModel.create(product);
  return result;
};

const getAllProductsFromDB = async () => {
  const result = await ProductModel.find();
  return result;
};

const getProductByIdFromDB = async (productId: string) => {
  const result = await ProductModel.findById(productId);
  return result;
};

const updateProductIntoDB = async (productId: string, data: IProduct) => {
  const updateProduct = await ProductModel.updateOne({ _id: productId }, data);
  return updateProduct;
};

const deleteProductFromDB = async (productId: string) => {
  const deleteInfo = await ProductModel.deleteOne({ _id: productId });
  return deleteInfo;
};

const searchProductByTextFromDB = async (searchTerm: string) => {
  console.log('from service file: ', searchTerm);
  const result = await ProductModel.find({ $text: { $search: searchTerm } });
  return result;
};
export const productServices = {
  createProductIntoDB,
  getAllProductsFromDB,
  getProductByIdFromDB,
  updateProductIntoDB,
  deleteProductFromDB,
  searchProductByTextFromDB,
};
