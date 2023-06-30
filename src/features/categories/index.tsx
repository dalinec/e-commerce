'use client';

import { Grid } from '@chakra-ui/react';
import { ICategory } from '@src/model';
import CategoryCard from './CategoryCard';

interface IAllCategoriesProps {
  categories: ICategory[];
}

const AllCategories = ({ categories }: IAllCategoriesProps) => {
  return (
    <Grid
      templateColumns={{ base: 'repeat(1,1fr)', lg: 'repeat(2,1fr)' }}
      gap='20px'
      mx='auto'
      w={{ base: '100%', lg: '90%' }}
      p='2rem'
    >
      {categories.map((category) => (
        <CategoryCard key={category.id} category={category} />
      ))}
    </Grid>
  );
};

export default AllCategories;
