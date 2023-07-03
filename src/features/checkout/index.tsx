'use client';

import { Box, Flex, Stack } from '@chakra-ui/react';
import ReviewItems from './ReviewItems';
import PaymentDetails from './PaymentDetails';
import DeliveryInfo from './DeliveryInfo';

const Checkout = () => {
  return (
    <Flex
      w={{ base: '100%', lg: '90%' }}
      mt={{ base: '4rem', lg: '3rem' }}
      mx='auto'
      flexDirection={{ base: 'column', lg: 'row' }}
      gap='2rem'
    >
      <Stack spacing={10} w={{ base: '100%', lg: '60%' }}>
        <ReviewItems />
        <DeliveryInfo />
      </Stack>
      <Box w={{ base: '100%', lg: '40%' }}>
        <PaymentDetails />
      </Box>
    </Flex>
  );
};

export default Checkout;
