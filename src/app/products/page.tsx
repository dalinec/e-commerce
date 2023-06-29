'use client';

import { products } from '@mocks/products';
import Hero from '@src/components/Hero/Hero';
import AllProducts from '@src/features/products';

const page = () => {
  return (
    <>
      <Hero
        heading='The best quality Products'
        description='Affordability, Durability, Fast and Convenient Delivery, Free Shipping and more!'
        imageUrl='/bags.jpg'
        btnLabel='VieW All Categories'
        btnLink='/categories'
      />
      <AllProducts products={products} />
    </>
  );
};

export default page;
