import { ChevronRightIcon } from '@chakra-ui/icons';
import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  Text,
} from '@chakra-ui/react';
import { IBreadCrumbItem } from '@src/model';

interface ICustomBreadCrumbProps {
  items?: IBreadCrumbItem[];
}

const CustomBreadCrumb = ({ items = [] }: ICustomBreadCrumbProps) => {
  return (
    <>
      {items.length > 0 && (
        <Breadcrumb
          spacing='box'
          separator={<ChevronRightIcon color='gray.500' />}
          w={{ base: '100%', lg: '90%' }}
          py='1rem'
          px='1rem'
          mx='auto'
          fontSize={{ base: 'xs', lg: 'md' }}
        >
          {items.map((item, i) =>
            i !== items.length - 1 ? (
              <BreadcrumbItem key={i}>
                <BreadcrumbLink href={item.link}>{item.name}</BreadcrumbLink>
              </BreadcrumbItem>
            ) : (
              <BreadcrumbItem key={i}>
                <Text color='gray.500'>{item.name}</Text>
              </BreadcrumbItem>
            )
          )}
        </Breadcrumb>
      )}
    </>
  );
};

export default CustomBreadCrumb;
