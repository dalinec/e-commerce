import { SearchIcon } from '@chakra-ui/icons';
import { Box, Input, InputGroup, InputLeftElement } from '@chakra-ui/react';
import React from 'react';
import { searchBarStyles } from './styles';

const Searchbar = () => {
  return (
    <Box>
      <InputGroup size='sm' w={{ base: '100%', lg: '32rem' }}>
        <InputLeftElement pointerEvents='none'>
          <SearchIcon color='gray.400' />
        </InputLeftElement>
        <Input {...searchBarStyles} />
      </InputGroup>
    </Box>
  );
};

export default Searchbar;
