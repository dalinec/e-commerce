import Hero from '@src/components/Hero/Hero';
import AllCategories from '@src/features/categories';
import { ICategory } from '@src/model';
import { client } from '@utils/sanity.client';
import { groq } from 'next-sanity';

const getAllCategoriesQueries = groq`
  *[_type == "category"] {
    "id": _id,
    name,
    "slug": slug.current,
    "image": image.asset->url 
  }
`;

const getAllCategories = () => {
  return client.fetch(getAllCategoriesQueries);
};

const CategoriesPage = async () => {
  const categories: ICategory[] = await getAllCategories();
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
