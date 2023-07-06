'use client';

import {
  Box,
  Button,
  Divider,
  Grid,
  GridItem,
  Heading,
  Image,
  Stack,
  Text,
  Link as ChakraLink,
  Flex,
} from '@chakra-ui/react';
import AddToCartButton from '@src/components/AddToCartButton';
import AddToWishListDetailPage from '@src/components/AddToWishListDetailPage';
import AddToWishlistButton from '@src/components/AddToWishlistButton';
import CustomBreadCrumb from '@src/components/CustomBreadCrumb';
import Quantity from '@src/components/Quantity';
import Rating from '@src/components/Rating';
import { AppContext } from '@src/context/AppContext';
import { defaultBreadcrumbItems, getSubstring } from '@src/helpers';
import { IProduct } from '@src/model';
import Link from 'next/link';
import { useState, useContext } from 'react';

interface IProductsDetailsProps {
  product: IProduct;
}

const ProductsDetails = ({ product }: IProductsDetailsProps) => {
  const [quantity, setQuantity] = useState(1);
  const { isAdded, addItem } = useContext(AppContext);
  return (
    <>
      <CustomBreadCrumb
        items={[
          ...defaultBreadcrumbItems,
          {
            name: product.category?.name,
            link: `/categoreis/${product.category?.id}`,
          },
          {
            name: getSubstring(product.name, 20),
            link: `/products/${product.slug}`,
          },
        ]}
      />
      <Grid
        templateColumns={{ base: 'repeat(1,1fr)', lg: 'repeat(2,1fr)' }}
        w={{ base: '100%', lg: '90%' }}
        mx='auto'
        p='2rem'
        gap={20}
      >
        <GridItem p='1rem' pos='relative'>
          <Image src={product.mainImage} alt={product.name} mx='auto' />
        </GridItem>
        <GridItem p='1rem'>
          <Heading>{product.name}</Heading>
          <Text my='1rem'>{product.description}</Text>
          <Rating rating={product.rating} />
          <Text fontWeight='bold' fontSize='2rem'>
            ${product.price}
          </Text>
          <Divider my='1rem' />
          <Quantity
            setQuantity={(_valueAsString, valueAsNumber) =>
              setQuantity(valueAsNumber)
            }
            disabled={isAdded('cart', product.id)}
          />
          <Divider my='1rem' />

          <Flex
            justify='start'
            align='center'
            gap='20px'
            direction={{ base: 'column', lg: 'row' }}
            mt='1.5rem'
          >
            <Link href={'/checkout'}>
              <Button
                variant='outline'
                bgColor='brand.primary'
                color='white'
                borderRadius='50px'
                size='sm'
                w='160px'
                _hover={{ bgColor: 'none' }}
                onClick={() => {
                  addItem('cart', product, quantity);
                }}
              >
                Buy Now
              </Button>
            </Link>
            <AddToCartButton product={product} count={quantity} />
            <AddToWishListDetailPage product={product} />
          </Flex>
          <Stack py='2rem'>
            <Box borderWidth={1} borderColor='gray.100' p='1rem'>
              <Text fontWeight='bold'>Free Deliver</Text>
              <ChakraLink textDecor='underline' color='gray.500'>
                Enter Your postal Code for Delivery Availability
              </ChakraLink>
            </Box>

            <Box borderWidth={1} borderColor='gray.100' p='1rem'>
              <Text fontWeight='bold'>Return Delivery</Text>
              <Text color='gray.500'>
                Free 30 Days Delivery Returns
                <ChakraLink textDecor='underline'> Details</ChakraLink>
              </Text>
            </Box>
          </Stack>
        </GridItem>
      </Grid>
    </>
  );
};

export default ProductsDetails;
