import {
  Box,
  Card,
  CardBody,
  CardHeader,
  Divider,
  Flex,
  Heading,
  Image,
  Stack,
  Text,
} from '@chakra-ui/react';
import { AppContext } from '@src/context/AppContext';
import { formatPrice, getSubstring } from '@src/helpers';
import { useContext } from 'react';

const ReviewItems = () => {
  const {
    state: { cart },
  } = useContext(AppContext);
  return (
    <Card borderWidth='1px' borderColor='gray.200' shadow='none'>
      <CardHeader>
        <Heading size='md'>Review Items</Heading>
      </CardHeader>
      <CardBody>
        <Stack>
          {cart.map((item, i) => (
            <>
              <Flex
                key={item.id}
                align='center'
                justify='space-between'
                my='0.2rem'
              >
                <Flex align='center'>
                  <Image
                    src={item.mainImage}
                    alt={item.name}
                    boxSize='100px'
                    bgSize='contain'
                  />
                  <Box mx='1rem'>
                    <Text
                      fontWeight='bold'
                      fontSize={{ base: 'sm', lg: 'lg' }}
                      maxW='500px'
                    >
                      {item.name}
                    </Text>
                    <Text color='gray.500'>
                      {getSubstring(item.description, 50)}
                    </Text>
                  </Box>
                </Flex>
                <Box textAlign='center'>
                  <Text fontWeight='bold' fontSize={{ base: 'md', lg: 'lg' }}>
                    ${formatPrice(item.price)}
                  </Text>
                  <Text fontSize={{ base: 'md', lg: 'lg' }}>
                    Quantity: {item.count}
                  </Text>
                </Box>
              </Flex>
              {i !== cart.length - 1 && <Divider />}
            </>
          ))}
        </Stack>
      </CardBody>
    </Card>
  );
};

export default ReviewItems;
