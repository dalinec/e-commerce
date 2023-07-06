import { SearchIcon } from '@chakra-ui/icons';
import {
  Box,
  Input,
  InputGroup,
  InputLeftElement,
  useOutsideClick,
} from '@chakra-ui/react';
import React, { useEffect, useRef, useState } from 'react';
import {
  dropDownStyles,
  searchBarStyles,
  wrapperContainerStyles,
} from './styles';
import { IProduct } from '@src/model';
import { client } from '@utils/sanity.client';
import { groq } from 'next-sanity';
import SearchedProductsList from './SearchedProductsList';

const query: string = groq`
  *[_type == "product" && (name match $searchInput || description match $searchInput)]{
    ...,
    "id":_id,
    "slug":slug.current,
    "mainImage":mainImage.asset->url,
    category->{
      name,
      "id":_id,
      "image":image.asset->url
    },
    "gallery":gallery[].asset->url
  }
`;

const Searchbar = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [searchInput, setSearchInput] = useState('');
  const searchInputRef = useRef(null);
  const [products, setProducts] = useState<IProduct[]>([]);
  const [isLoading, setIsLoading] = useState(false);

  useOutsideClick({
    ref: searchInputRef,
    handler: () => {
      setIsModalOpen(false);
      setProducts([]);
    },
  });

  const fetchProducts = async () => {
    setIsLoading(true);
    const products: IProduct[] = await client.fetch(query, {
      searchInput: `*${searchInput}*`,
    });
    setIsLoading(false);
    setProducts(products);
  };

  useEffect(() => {
    const timeout = setTimeout(() => {
      if (searchInput.trim().length >= 3) {
        fetchProducts();
      }
    }, 1000);

    return () => clearTimeout(timeout);
  }, [searchInput]);

  return (
    <Box {...wrapperContainerStyles} ref={searchInputRef}>
      <InputGroup size='sm' w={{ base: '100%', lg: '32rem' }}>
        <InputLeftElement pointerEvents='none'>
          <SearchIcon color='gray.400' />
        </InputLeftElement>
        <Input
          value={searchInput}
          onClick={() => setIsModalOpen(true)}
          onChange={(e) => setSearchInput(e.target.value)}
          {...searchBarStyles}
        />
      </InputGroup>
      {isModalOpen && (
        <Box {...dropDownStyles}>
          {products.length === 0 ? (
            isLoading ? (
              <>Loading...</>
            ) : (
              <>No Products Found.</>
            )
          ) : (
            <SearchedProductsList products={products} />
          )}
        </Box>
      )}
    </Box>
  );
};

export default Searchbar;
