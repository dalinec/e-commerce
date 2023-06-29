import { Card, CardBody, Heading } from '@chakra-ui/react';
import { Image } from '@chakra-ui/react';

const TopCategoryCard = () => {
  return (
    <Card
      direction='row'
      align='center'
      overflow='hidden'
      variant='outline'
      w='100%'
      h='100%'
      p='10px'
      _hover={{ cursor: 'pointer', bgColor: 'gray.100' }}
    >
      <Image src='/product1.jpg' alt='product' width={100} height={100} />
      <CardBody>
        <Heading size={{ base: 'sm', lg: 'md' }}>Watches</Heading>
      </CardBody>
    </Card>
  );
};

export default TopCategoryCard;
