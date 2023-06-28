import { Flex, Stack, Box } from '@chakra-ui/react';
import {
  desktopNavStyles,
  logoSectionStyles,
  cartSectionStyles,
} from './styles';
import AppLogo from '../AppLogo';
import { navItems } from '@src/helpers';
import Link from 'next/link';
import Searchbar from '../Searchbar/Searchbar';

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
        <Box>
          <Searchbar />
        </Box>
      </Stack>
      <Stack {...cartSectionStyles}>
        <Box>Wishlist</Box>
        <Box>Cart</Box>
      </Stack>
    </Flex>
  );
};

export default DesktopNav;
