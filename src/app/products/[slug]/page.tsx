import { products } from '@mocks/products';
import ProductsDetails from '@src/features/products/ProductsDetails';

const ProductDetailsPage = () => {
  return (
    <div>
      <ProductsDetails product={products[0]} />
    </div>
  );
};

export default ProductDetailsPage;
