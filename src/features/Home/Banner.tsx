'use client';

import { Box, Button, Flex, Heading, Text } from '@chakra-ui/react';
import {
  bannerButtonStyles,
  bannerHeadingStyles,
  bannerImgBoxStyles,
  bannerStyles,
  bannerTextStyles,
} from './style';
import Link from 'next/link';

const Banner = () => {
  return (
    <Flex {...bannerStyles}>
      <Box w={{ base: '100%', lg: '50%' }}>
        <Heading {...bannerHeadingStyles}>
          Online Shopping <br /> Made Easy
        </Heading>
        <Text {...bannerTextStyles}>
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Dolorum sint
          reiciendis dignissimos autem, accusantium eveniet aperiam voluptatum
          sed voluptatibus.
        </Text>
        <Link href={'/products'}>
          <Button {...bannerButtonStyles}>Shop Now</Button>
        </Link>
      </Box>
      <Flex justify='center' align='center' w={{ base: '100%', lg: '50%' }}>
        <Box {...bannerImgBoxStyles} />
      </Flex>
    </Flex>
  );
};

export default Banner;
