import { Box, Flex, Stack, Text } from '@chakra-ui/react';
import AppLogo from '../AppLogo';
import { mobileNavContainer, mobileSearchWrapper } from './styles';
import Searchbar from '../Searchbar/Searchbar';

const MobileNav = () => {
  return (
    <>
      <Flex {...mobileNavContainer}>
        <Box>Nav Menu</Box>
        <AppLogo />
        <Stack direction='row' spacing={1}>
          <Text>WishList</Text>
          <Text>Cart</Text>
        </Stack>
      </Flex>
      <Box {...mobileSearchWrapper}>
        <Searchbar />
      </Box>
    </>
  );
};

export default MobileNav;
