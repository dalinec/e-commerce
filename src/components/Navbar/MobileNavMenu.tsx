import {
  useDisclosure,
  Button,
  Drawer,
  DrawerOverlay,
  DrawerContent,
  DrawerCloseButton,
  DrawerHeader,
  DrawerBody,
  Input,
  DrawerFooter,
  Box,
} from '@chakra-ui/react';
import { useRef } from 'react';
import { VscListFlat } from 'react-icons/vsc';
import AppLogo from '../AppLogo';
import { navItems } from '@src/helpers';
import Link from 'next/link';

const MobileNavMenu = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const btnRef: any = useRef();

  return (
    <>
      <Button ref={btnRef} onClick={onOpen}>
        <VscListFlat />
      </Button>
      <Drawer
        isOpen={isOpen}
        placement='left'
        onClose={onClose}
        finalFocusRef={btnRef}
      >
        <DrawerOverlay />
        <DrawerContent>
          <DrawerCloseButton />
          <DrawerHeader>
            <AppLogo />
          </DrawerHeader>
          <DrawerBody>
            {navItems.map((item, i) => (
              <Link key={i} href={item.href}>
                <Box
                  p='0.5rem'
                  _hover={{ bgColor: 'brand.primaryLight', color: 'white' }}
                >
                  {item.label}
                </Box>
              </Link>
            ))}
          </DrawerBody>
          <DrawerFooter>
            <Button variant='outline' mr={3} onClick={onClose}>
              Close
            </Button>
          </DrawerFooter>
        </DrawerContent>
      </Drawer>
    </>
  );
};

export default MobileNavMenu;
