import { Box, IconButton } from '@chakra-ui/react';
import { FaChevronLeft, FaChevronRight } from 'react-icons/fa';
import { useSwiper } from 'swiper/react';

const SwiperNavButtons = () => {
  const swiper = useSwiper();

  return (
    <Box m='1.5rem'>
      <IconButton
        rounded='lg'
        icon={<FaChevronLeft />}
        borderColor='brand.primary'
        borderWidth='1px'
        aria-label='Prev'
        color='brand.primaryDark'
        bgColor='white'
        onClick={() => swiper.slidePrev()}
        mx='1'
      />

      <IconButton
        rounded='lg'
        icon={<FaChevronRight />}
        borderColor='brand.primary'
        borderWidth='1px'
        aria-label='Next'
        color='brand.primaryDark'
        bgColor='white'
        onClick={() => swiper.slideNext()}
        mx='1'
      />
    </Box>
  );
};

export default SwiperNavButtons;
