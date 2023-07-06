import { Flex, Tag, Box, Image, Text } from '@chakra-ui/react';
import { IProduct } from '@src/model';
import Link from 'next/link';

interface SearchedProductsListProps {
  products: IProduct[];
}

const SearchedProductsList = ({ products }: SearchedProductsListProps) => {
  return (
    <>
      {products.map((product) => (
        <Link key={product.id} href={`/products/${product.slug}`}>
          <Box
            borderBottomWidth='1px'
            borderBottomColor='gray.200'
            p='2'
            _hover={{ bgColor: 'gray.100' }}
          >
            <Flex align='center'>
              <Image
                alt={product.name}
                src={product.mainImage}
                boxSize='24px'
                mr='10px'
              />
              <Text>{product.name}</Text>
            </Flex>
            <Flex justify='flex-end'>
              <Tag size='sm'>{product.category.name}</Tag>
            </Flex>
          </Box>
        </Link>
      ))}
    </>
  );
};

export default SearchedProductsList;
