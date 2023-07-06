import { Box, IconButton, IconButtonProps } from '@chakra-ui/react';
import { FaChevronLeft, FaChevronRight } from 'react-icons/fa';
import { useSwiper } from 'swiper/react';

export const btnStyles: IconButtonProps = {
  rounded: 'lg',
  borderColor: 'brand.primary',
  borderWidth: '1px',
  color: 'brand.primaryDark',
  bgColor: 'white',
  mx: '1',
  'aria-label': '',
};

const SwiperNavButtons = () => {
  const swiper = useSwiper();

  return (
    <Box m='1.5rem'>
      <IconButton
        {...btnStyles}
        className='prev'
        icon={<FaChevronLeft />}
        aria-label='Prev'
        onClick={() => swiper.slidePrev()}
      />

      <IconButton
        {...btnStyles}
        className='next'
        icon={<FaChevronRight />}
        aria-label='Next'
        onClick={() => swiper.slideNext()}
      />
    </Box>
  );
};

export default SwiperNavButtons;
