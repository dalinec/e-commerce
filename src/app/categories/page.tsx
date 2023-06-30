import { categories } from '@mocks/categories';
import Hero from '@src/components/Hero/Hero';
import AllCategories from '@src/features/categories';

const CategoriesPage = () => {
  return (
    <>
      <Hero
        heading='Product Categories'
        description="We've got all your favourite Categories!"
        imageUrl='/store.png'
        btnLabel='VieW All Products'
        btnLink='/products'
      />
      <AllCategories categories={categories} />
    </>
  );
};

export default CategoriesPage;
