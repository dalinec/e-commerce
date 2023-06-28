import { Box } from '@chakra-ui/react';
import { navbarStyles } from './styles';
import DesktopNav from './DesktopNav';
import MobileNav from './MobileNav';

const Navbar = () => {
  return (
    <Box className='navWrapper' h='80px'>
      <Box {...navbarStyles}>
        <DesktopNav />
        <MobileNav />
      </Box>
    </Box>
  );
};

export default Navbar;
