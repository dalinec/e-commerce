'use client';

import { Button } from '@chakra-ui/react';
import { AppContext } from '@src/context/AppContext';
import { IProduct } from '@src/model';
import { useContext } from 'react';

interface IAddToWishListDetailProps {
  product: IProduct;
  count?: number;
}

const AddToWishListDetailPage = ({
  product,
  count,
}: IAddToWishListDetailProps) => {
  const { addItem, removeItem, isAdded } = useContext(AppContext);

  return (
    <>
      {isAdded('wishlist', product.id) ? (
        <Button
          variant='outline'
          borderColor='gray.200'
          color='gray.500'
          borderRadius='50px'
          size='sm'
          minW='150px'
          onClick={() => removeItem('wishlist', product.id)}
        >
          Remove from Wishlist
        </Button>
      ) : (
        <Button
          variant='outline'
          borderColor='brand.primary'
          color='brand.primary'
          borderRadius='50px'
          size='sm'
          minW='150px'
          onClick={() => addItem('wishlist', product, count)}
        >
          Add to Wishlist
        </Button>
      )}
    </>
  );
};

export default AddToWishListDetailPage;
