import { Flex, Text } from '@chakra-ui/react';
import { colors } from '@src/app/theme';
import ReactStars from 'react-stars';

const Rating = () => {
  return (
    <Flex>
      <ReactStars
        count={5}
        value={4}
        half={true}
        size={18}
        color2={colors.brand.primary}
        edit={false}
      />
      <Text>({200})</Text>
    </Flex>
  );
};

export default Rating;
