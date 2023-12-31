import { Card, CardBody, Heading } from '@chakra-ui/react';
import { Image } from '@chakra-ui/react';
import { ICategory } from '@src/model';
import Link from 'next/link';

interface ITopCategoryCardProps {
  category: ICategory;
}

const TopCategoryCard = ({ category }: ITopCategoryCardProps) => {
  return (
    <Link href={`/categories/${category.id}`}>
      <Card
        direction='row'
        align='center'
        overflow='hidden'
        variant='outline'
        w='100%'
        h='100%'
        p='10px'
        _hover={{ cursor: 'pointer', bgColor: 'gray.100' }}
      >
        <Image
          src={category.image}
          alt={category.slug}
          width={100}
          height={100}
        />
        <CardBody>
          <Heading size={{ base: 'sm', lg: 'md' }}>{category.name}</Heading>
        </CardBody>
      </Card>
    </Link>
  );
};

export default TopCategoryCard;
