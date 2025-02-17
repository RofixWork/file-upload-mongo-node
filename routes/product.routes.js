import {Router} from 'express';
import ProductController from '../controllers/product.controller.js';
const productRouter = Router();

productRouter.route('/').get(ProductController.all).post(ProductController.create)
productRouter.route('/uploads').post(ProductController.uploadImageToServer)


export default productRouter;