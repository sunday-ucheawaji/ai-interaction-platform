import { productRepository } from '../repositories/product.repository';

export const productService = {
   getProduct(productId: number) {
      return productRepository.getProduct(productId);
   },
};
