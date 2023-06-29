'use client';

import { Box, Button, Card, Heading, Image, Text } from '@chakra-ui/react';
import { heroCardStyles, heroImgStyles } from './style';
import Link from 'next/link';

interface IHeroProps {
  heading: string;
  description: string;
  imageUrl: string;
  btnLabel: string;
  btnLink: string;
}

const Hero = ({
  heading,
  description,
  imageUrl,
  btnLabel,
  btnLink,
}: IHeroProps) => {
  return (
    <Card {...heroCardStyles}>
      <Box mx='2rem' w={{ base: '100%', lg: '50%' }}>
        <Heading size={{ base: 'xl', lg: '2xl' }}>{heading}</Heading>
        <Text py='1rem'>{description}</Text>
        <Link href={btnLink}>
          <Button variant='outline'>{btnLabel}</Button>
        </Link>
      </Box>
      <Box
        mx='2rem'
        w={{ base: '100%', lg: '50%' }}
        mt={{ base: '1rem', lg: '0' }}
      >
        <Image src={imageUrl} alt={heading} {...heroImgStyles} />
      </Box>
    </Card>
  );
};

export default Hero;
