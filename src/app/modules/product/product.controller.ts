import { Request, Response } from 'express';
import { productServices } from './product.service';

const createProduct = async (req: Request, res: Response) => {
  try {
    const product = req.body;
    const result = await productServices.createProductIntoDB(product);

    res.status(200).json({
      success: true,
      message: 'Product created successfully!',
      data: result,
    });
  } catch (error) {
    console.log(error);
  }
};

const getAllProduct = async (req: Request, res: Response) => {
  try {
    const searchTerm = req.query.searchTerm?.toString();
    if (searchTerm) {
      const searchResult = await productServices.searchProductByTextFromDB(
        searchTerm as string,
      );

      res.status(200).json({
        success: true,
        message: `Products matching search term ${searchTerm} fetched successfully!`,
        data: searchResult,
      });
    }
    const products = await productServices.getAllProductsFromDB();

    res.status(200).json({
      success: true,
      message: 'Products fetched successfully!',
      data: products,
    });
  } catch (error) {
    console.log(error);
  }
};

const getProductById = async (req: Request, res: Response) => {
  try {
    const { productId } = req.params;
    const product = await productServices.getProductByIdFromDB(productId);

    res.status(200).json({
      success: true,
      message: 'Product fetched successfully!',
      data: product,
    });
  } catch (error) {
    console.log(error);
  }
};

const updateProduct = async (req: Request, res: Response) => {
  try {
    const { productId } = req.params;
    const productData = req.body;
    const updateInfo = await productServices.updateProductIntoDB(
      productId,
      productData,
    );
    const newData = await productServices.getProductByIdFromDB(productId);

    res.status(200).json({
      success: true,
      message: 'Product updated successfully!' || updateInfo,
      data: newData,
    });
  } catch (error) {
    console.log(error);
  }
};

const deleteProduct = async (req: Request, res: Response) => {
  try {
    const { productId } = req.params;
    await productServices.deleteProductFromDB(productId);
    const newData = await productServices.getProductByIdFromDB(productId);
    res.status(200).json({
      success: true,
      message: 'Product deleted successfully!',
      data: newData,
    });
  } catch (error) {
    console.log(error);
  }
};

// ### tried this, but it conflicted with the route of getAllProduct. If you want to have a look, so i did not delete this! ###

// const searchProductByText = async (req: Request, res: Response) => {
//   try {
//     const searchTerm = req.query.searchTerm?.toString();
//     if (!searchTerm) {
//       return res.status(400).send({
//         success: false,
//         message: 'Search term is empty! search term is required',
//       });
//     }
//     const searchResult = await productServices.searchProductByTextFromDB(
//       searchTerm as string,
//     );

//     res.status(200).json({
//       success: true,
//       message: `Products matching search term ${searchTerm} fetched successfully!`,
//       data: searchResult,
//     });
//   } catch (error) {
//     console.log(error);
//   }
// };
export const productControllers = {
  createProduct,
  getAllProduct,
  getProductById,
  updateProduct,
  deleteProduct,
  // searchProductByText,
};
