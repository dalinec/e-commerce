'use client';

import { Box, Grid, GridItem } from '@chakra-ui/react';
import SectionHeading from '@src/components/SectionHeading';
import TopCategoryCard from './TopCategoryCard';

const TopCategories = () => {
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
        <GridItem>
          <TopCategoryCard />
        </GridItem>
        <GridItem>
          <TopCategoryCard />
        </GridItem>
        <GridItem>
          <TopCategoryCard />
        </GridItem>
        <GridItem>
          <TopCategoryCard />
        </GridItem>
      </Grid>
    </Box>
  );
};

export default TopCategories;
