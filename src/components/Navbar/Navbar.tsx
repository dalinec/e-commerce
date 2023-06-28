import { Box } from '@chakra-ui/react';
import { navbarStyles } from './styles';
import DesktopNav from './DesktopNav';
import MobileNav from './MobileNav';

const Navbar = () => {
  return (
    <Box {...navbarStyles}>
      <DesktopNav />
      <MobileNav />
    </Box>
  );
};

export default Navbar;
