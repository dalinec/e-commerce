'use client';

import { Flex } from '@chakra-ui/react';
import ProductCard from '@src/components/ProductCard';
import { IProduct } from '@src/model';

interface IAllProductsProps {
  products: IProduct[];
}

const AllProducts = ({ products }: IAllProductsProps) => {
  return (
    <>
      <Flex
        flexWrap='wrap'
        w={{ base: '100%', lg: '90%' }}
        mx='auto'
        justify={{ base: 'center', lg: 'start' }}
        align='center'
      >
        {products.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </Flex>
    </>
  );
};

export default AllProducts;
