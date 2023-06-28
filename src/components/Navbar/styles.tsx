import { BoxProps, FlexProps, StackProps } from '@chakra-ui/react';

export const navbarStyles: BoxProps = {
  position: 'fixed',
  w: '100%',
  bgColor: 'white',
  mb: '1rem',
  zIndex: 10,
};

export const desktopNavStyles: FlexProps = {
  justify: 'space-between',
  align: 'center',
  px: '2rem',
  py: '1rem',
  borderBottomWidth: '1px',
  borderColor: 'gray.200',
};

export const logoSectionStyles: StackProps = {
  direction: 'row',
  gap: '6',
  flex: '1',
  alignItems: 'center',
};
export const cartSectionStyles: StackProps = {
  direction: 'row',
  spacing: 2,
};
