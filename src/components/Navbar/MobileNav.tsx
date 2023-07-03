import { Box, Flex, Stack } from '@chakra-ui/react';
import AppLogo from '../AppLogo';
import { mobileNavContainer, mobileSearchWrapper } from './styles';
import Searchbar from '../Searchbar/Searchbar';
import MobileNavMenu from './MobileNavMenu';
import Wishlist from '../Wishlist/Wishlist';
import Cart from '../Cart/Cart';

const MobileNav = () => {
  return (
    <>
      <Flex {...mobileNavContainer}>
        <Box>
          <MobileNavMenu />
        </Box>
        <AppLogo />
        <Stack direction='row' spacing={1}>
          <Wishlist />
          <Cart />
        </Stack>
      </Flex>
      <Box {...mobileSearchWrapper}>
        <Searchbar />
      </Box>
    </>
  );
};

export default MobileNav;
