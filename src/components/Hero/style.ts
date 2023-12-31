import { CardProps, ImageProps } from '@chakra-ui/react';

export const heroCardStyles: CardProps = {
  direction: { base: 'column', lg: 'row' },
  align: 'center',
  justify: 'center',
  overflow: 'hidden',
  variant: 'outline',
  w: { base: '100%', lg: '90%' },
  mx: 'auto',
  shadow: 'sm',
  mt: { base: '3.5rem', lg: '0' },
  p: '2rem',
  mb: '2rem',
};

export const heroImgStyles: ImageProps = {
  objectFit: 'cover',
  maxW: '100%',
  rounded: 'md',
};
