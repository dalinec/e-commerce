import { BoxProps, InputProps } from '@chakra-ui/react';

export const searchBarStyles: InputProps = {
  focusBorderColor: 'brand.primaryLight',
  borderWidth: '1px',
  borderColor: 'gray.400',
  type: 'text',
  placeholder: 'Search...',
};

export const wrapperContainerStyles: BoxProps = {
  pos: 'relative',
  w: { base: '100%', lg: '32rem' },
};

export const dropDownStyles: BoxProps = {
  pos: 'absolute',
  bg: 'white',
  shadow: 'md',
  padding: '0.5rem',
  w: '100%',
  maxH: '500px',
  overflowY: 'auto',
  boxSizing: 'border-box',
};
