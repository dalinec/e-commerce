import {
  Card,
  CardHeader,
  Heading,
  CardBody,
  Stack,
  Box,
  FormLabel,
  Input,
} from '@chakra-ui/react';

const DeliveryInfo = () => {
  return (
    <Card borderWidth='1px' borderColor='gray.200' shadow='none'>
      <CardHeader>
        <Heading size='md'>Delivery Information</Heading>
      </CardHeader>
      <CardBody>
        <Stack>
          <Box>
            <FormLabel>Full Name</FormLabel>
            <Input type='text' placeholder='Full Name' />
          </Box>
          <Box>
            <FormLabel>Address</FormLabel>
            <Input type='text' placeholder='Your Address' />
          </Box>
          <Box>
            <FormLabel>Phone Number</FormLabel>
            <Input type='text' placeholder='Your Phone Number' />
          </Box>
          <Box>
            <FormLabel>Email</FormLabel>
            <Input type='email' placeholder='Your Email' />
          </Box>
        </Stack>
      </CardBody>
    </Card>
  );
};

export default DeliveryInfo;
