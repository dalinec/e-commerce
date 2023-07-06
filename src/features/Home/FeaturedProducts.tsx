'use client';

import { Box } from '@chakra-ui/react';
import ProductCard from '@src/components/ProductCard';
import SectionHeading from '@src/components/SectionHeading';
import SwiperNavButtons from '@src/components/SwiperNavButtons';
import { IProduct } from '@src/model';
import { CSSProperties } from 'react';
import { Autoplay, Navigation, SwiperOptions } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';

const slideStyles: CSSProperties = {
  boxSizing: 'border-box',
  maxWidth: '350px',
};

interface FeaturedProductsProps {
  title: string;
  products: IProduct[];
}

const FeaturedProducts = ({ title, products }: FeaturedProductsProps) => {
  const sliderSettings: SwiperOptions = {
    modules: [Navigation, Autoplay],
    spaceBetween: 10,
    slidesPerView: 'auto',
    loop: true,
    autoplay: {
      delay: 5000,
    },
  };

  return (
    <Box w={{ base: '100%', lg: '90%' }} mx='auto' p='2rem'>
      <SectionHeading title={title} />
      <Swiper {...sliderSettings} style={{ width: '100%', height: '100%' }}>
        {products.map((product) => (
          <SwiperSlide key={product.id} style={slideStyles}>
            <ProductCard product={product} />
          </SwiperSlide>
        ))}
        <SwiperNavButtons />
      </Swiper>
    </Box>
  );
};

export default FeaturedProducts;
