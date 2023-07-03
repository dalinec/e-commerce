'use client';

import { Button } from '@chakra-ui/react';
import { AppContext } from '@src/context/AppContext';
import { IProduct } from '@src/model';
import { useContext } from 'react';
import { BsHeart, BsHeartFill } from 'react-icons/bs';

interface IAddToWishlistButtonProps {
  product: IProduct;
  count?: number;
}

const AddToWishlistButton = ({ product, count }: IAddToWishlistButtonProps) => {
  const { addItem, removeItem, isAdded } = useContext(AppContext);

  return (
    <>
      {isAdded('wishlist', product.id) ? (
        <Button
          pos='absolute'
          variant='ghost'
          bgColor='transparent'
          color='red.400'
          _hover={{ bgColor: 'transparent' }}
          rounded='full'
          title='Remove from Wishlish'
          onClick={() => removeItem('wishlist', product.id)}
        >
          <BsHeartFill />
        </Button>
      ) : (
        <Button
          pos='absolute'
          variant='ghost'
          bgColor='transparent'
          color='red.400'
          _hover={{ bgColor: 'transparent' }}
          rounded='full'
          title='Add to Wishlish'
          onClick={() => addItem('wishlist', product, count)}
        >
          <BsHeart />
        </Button>
      )}
    </>
  );
};

export default AddToWishlistButton;
