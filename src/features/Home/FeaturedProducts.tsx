'use client';

import { CSSProperties } from 'react';
import ProductCard from '@src/components/ProductCard';
import { SwiperOptions, Navigation, Autoplay } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';
import SwiperNavButtons from '@src/components/SwiperNavButtons';
import SectionHeading from '@src/components/SectionHeading';
import { Box } from '@chakra-ui/react';

const slideStyles: CSSProperties = {
  boxSizing: 'border-box',
  maxWidth: '350px',
};

interface FeaturedProductsProps {
  title: string;
}

const FeaturedProducts = ({ title }: FeaturedProductsProps) => {
  const sliderSettings: SwiperOptions = {
    modules: [Navigation, Autoplay],
    spaceBetween: 10,
    slidesPerView: 'auto',
    speed: 1000,
    autoplay: {
      delay: 5000,
      disableOnInteraction: false,
    },
  };

  return (
    <Box w={{ base: '100%', lg: '90%' }} mx='auto' p='2rem'>
      <SectionHeading title={title} />
      <Swiper {...sliderSettings} style={{ width: '100%', height: '100%' }}>
        <SwiperSlide style={slideStyles}>
          <ProductCard />
        </SwiperSlide>
        <SwiperSlide style={slideStyles}>
          <ProductCard />
        </SwiperSlide>
        <SwiperSlide style={slideStyles}>
          <ProductCard />
        </SwiperSlide>
        <SwiperSlide style={slideStyles}>
          <ProductCard />
        </SwiperSlide>
        <SwiperSlide style={slideStyles}>
          <ProductCard />
        </SwiperSlide>
        <SwiperNavButtons />
      </Swiper>
    </Box>
  );
};

export default FeaturedProducts;
