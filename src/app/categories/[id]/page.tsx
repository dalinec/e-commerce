import { products } from '@mocks/products';
import CustomBreadCrumb from '@src/components/CustomBreadCrumb';
import Hero from '@src/components/Hero/Hero';
import AllProducts from '@src/features/products';
import { defaultBreadcrumbItems } from '@src/helpers';

const CategoryPage = () => {
  return (
    <>
      <Hero
        heading={products[0].category!.name}
        description={`Best and Affortable ${products[0].category!.name}`}
        imageUrl={products[0].category!.image}
        btnLabel='View All Categories'
        btnLink='/categories'
      />

      <CustomBreadCrumb
        items={[
          ...defaultBreadcrumbItems,
          {
            name: products[0]!.category!.name,
            link: '#',
          },
        ]}
      />
      <AllProducts products={products} />
    </>
  );
};

export default CategoryPage;
