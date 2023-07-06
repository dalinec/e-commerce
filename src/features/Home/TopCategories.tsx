'use client';

import { Box, Button, Grid, GridItem } from '@chakra-ui/react';
import SectionHeading from '@src/components/SectionHeading';
import TopCategoryCard from './TopCategoryCard';
import { ICategory } from '@src/model';
import Link from 'next/link';

interface ITopCategoriesProps {
  categories: ICategory[];
}

const TopCategories = ({ categories }: ITopCategoriesProps) => {
  return (
    <Box w={{ base: '100%', lg: '90%' }} mx='auto' py='3rem' px='2rem'>
      <SectionHeading title='Shop Our Top Categories' />
      <Grid
        templateColumns={{
          base: 'repeat(1,1fr)',
          md: 'repeat(2, 1fr)',
          xl: 'repeat(4,1fr)',
        }}
        gap='4'
      >
        {categories.map((category) => (
          <GridItem key={category.id}>
            <TopCategoryCard category={category} />
          </GridItem>
        ))}
      </Grid>
      <Link href='/categories'>
        <Button
          bgColor='white'
          variant='outline'
          borderColor='brand.primary'
          color='brand.primary'
          rounded='full'
          my='1rem'
        >
          Browse All Categories
        </Button>
      </Link>
    </Box>
  );
};

export default TopCategories;
