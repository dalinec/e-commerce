import { Button } from '@chakra-ui/react';

const AddToCartButton = () => {
  return (
    <Button
      variant='outline'
      borderColor='brand.primary'
      color='brand.primary'
      rounded='full'
      size='sm'
      w='150px'
    >
      Add to cart
    </Button>
  );
};

export default AddToCartButton;
