import { Flex, Stack, Box } from '@chakra-ui/react';
import {
  desktopNavStyles,
  logoSectionStyles,
  cartSectionStyles,
} from './styles';
import AppLogo from '../AppLogo';
import { navItems } from '@src/heleprs';
import Link from 'next/link';

const DesktopNav = () => {
  return (
    <Flex {...desktopNavStyles}>
      <Stack {...logoSectionStyles}>
        <Box>
          <AppLogo />
        </Box>
        {navItems.map((item, i) => (
          <Box key={i}>
            <Link href={item.href}>{item.label}</Link>
          </Box>
        ))}
        <Box>Search</Box>
      </Stack>
      <Stack {...cartSectionStyles}>
        <Box>Whishlist</Box>
        <Box>Cart</Box>
      </Stack>
    </Flex>
  );
};

export default DesktopNav;
