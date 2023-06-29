'use client';

import { Box } from '@chakra-ui/react';
import { products } from '@mocks/products';
import AllProducts from '@src/features/products';

const page = () => {
  return (
    <>
      <Box>Hero</Box>
      <AllProducts products={products} />
    </>
  );
};

export default page;
