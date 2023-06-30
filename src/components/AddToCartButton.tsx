import { Button } from '@chakra-ui/react';
import { products } from '@mocks/products';
import { AppContext } from '@src/context/AppContext';
import { useContext, useEffect } from 'react';

const AddToCartButton = () => {
  const {
    state,
    addItem,
    removeItem,
    resetItems,
    increaseCount,
    decreaseCount,
  } = useContext(AppContext);

  const handleTest = () => {
    addItem('cart', products[0]);
  };

  useEffect(() => {
    console.log(state), [state];
  });

  return (
    <Button
      variant='outline'
      borderColor='brand.primary'
      color='brand.primary'
      rounded='full'
      size='sm'
      w='150px'
      onClick={handleTest}
    >
      Add to cart
    </Button>
  );
};

export default AddToCartButton;
