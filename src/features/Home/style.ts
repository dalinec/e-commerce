import { FlexProps, HeadingProps, TextProps } from '@chakra-ui/react';

export const bannerStyles: FlexProps = {
  justify: 'center',
  align: 'center',
  gap: '2',
  flexDirection: { base: 'column', lg: 'row' },
  w: { base: '100%', lg: '90%' },
  mx: 'auto',
  p: '2rem',
};

export const bannerHeadingStyles: HeadingProps = {
  size: { base: 'xl', lg: '3xl' },
  lineHeight: '4rem',
  color: 'brand.primary',
};

export const bannerTextStyles: TextProps = {
  fontSize: { base: 'md', lg: 'lg' },
  py: '1rem',
  maxW: '600px',
};

export const bannerButtonStyles = {
  rounded: 'full',
  minW: '10rem',
  bgColor: 'brand.primary',
  color: 'white',
  mb: '1rem',
  _hover: { bgColor: 'brand.primaryDark' },
};

export const bannerImgBoxStyles = {
  w: { base: '300px', lg: '600px' },
  h: { base: '300px', lg: '600px' },
  bg: 'center / cover no-repeat url(mockup.svg)',
};
