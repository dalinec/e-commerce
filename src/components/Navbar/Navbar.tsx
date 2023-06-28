import { Box } from '@chakra-ui/react';
import { navbarStyles } from './styles';
import DesktopNav from './DesktopNav';

const Navbar = () => {
  return (
    <Box {...navbarStyles}>
      <DesktopNav />
    </Box>
  );
};

export default Navbar;
