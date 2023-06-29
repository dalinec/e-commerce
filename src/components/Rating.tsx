import { Flex, Text } from '@chakra-ui/react';
import { colors } from '@src/app/theme';
import ReactStars from 'react-stars';
import { IRating } from '@src/model';

interface IRatingProps {
  rating: IRating;
}

const Rating = ({ rating }: IRatingProps) => {
  return (
    <Flex>
      <ReactStars
        count={5}
        value={rating.rate}
        half={true}
        size={18}
        color2={colors.brand.primary}
        edit={false}
      />
      <Text>({rating.count})</Text>
    </Flex>
  );
};

export default Rating;
