import { Text } from '@chakra-ui/react';
import Link from 'next/link';

const AppLogo = () => {
  return (
    <>
      <Link href={'/'}>
        <Text color='gray.800' fontWeight='bold'>
          RW{' '}
          <Text as='span' color='brand.primary'>
            BUY
          </Text>
        </Text>
      </Link>
    </>
  );
};

export default AppLogo;
