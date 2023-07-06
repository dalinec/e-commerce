import ProductsDetails from '@src/features/products/ProductsDetails';
import { IProduct } from '@src/model';
import { client } from '@utils/sanity.client';
import { groq } from 'next-sanity';

const query: string = groq`
  *[_type == "product" && slug.current == $slug][0]{
    ...,
    "id":_id,
    "slug":slug.current,
    "mainImage":mainImage.asset->url,
    category->{
      name,
      "id":_id,
      "image":image.asset->url
    },
    "gallery":gallery[].asset->url
  }
`;

type Props = {
  params: {
    slug: string;
  };
};

const ProductDetailsPage = async ({ params: { slug } }: Props) => {
  const product: IProduct = await client.fetch(query, { slug });
  return (
    <div>
      <ProductsDetails product={product} />
    </div>
  );
};

export default ProductDetailsPage;
