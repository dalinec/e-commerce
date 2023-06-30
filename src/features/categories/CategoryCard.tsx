import { Card, CardBody, Heading } from '@chakra-ui/react';
import { ICategory } from '@src/model';
import Image from 'next/image';
import Link from 'next/link';

interface ICategoryCardProps {
  category: ICategory;
}

const CategoryCard = ({ category }: ICategoryCardProps) => {
  return (
    <>
      <Link href={`/categories/${category.id}`}>
        <Card
          direction='column'
          align='center'
          overflow='hidden'
          variant='outline'
          w='100%'
          h='100%'
          p='10px'
          _hover={{ bgColor: 'gray.100', cursor: 'pointer' }}
        >
          <Image
            width={200}
            height={200}
            src={category.image}
            alt={category.name}
          />
          <CardBody>
            <Heading size={{ base: 'sm', lg: 'md' }}>{category.name}</Heading>
          </CardBody>
        </Card>
      </Link>
    </>
  );
};

export default CategoryCard;
