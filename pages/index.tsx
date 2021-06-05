import * as i from 'types';
import * as React from 'react';
import Head from 'next/head';
import useSWR from 'swr';

import { fetcher } from 'services';
import { ProductsOverview } from 'modules/products';
import { Container, Pagination } from 'common/layout';
import { Button } from 'common/interaction';

const Home: React.FC<HomeProps> = ({ getProducts, total }) => {
  const [page, setPage] = React.useState(1);
  const limit = 20;
  const pages = Math.floor((total || 0) / 20);

  const variables = React.useMemo(() => ({
    offset: page === 1 ? 0 : (page + 1) * limit,
    limit,
  }), [page]);

  const { data } = useSWR<{ getProducts: i.Product[] }>(
    [
      `query GetProducts($offset: Int!, $limit: Int!) {
        getProducts(offset: $offset, limit: $limit) {
          name
          image
          categories
        }
      }`,
      variables,
    ],
    fetcher,
    {
      initialData: {
        getProducts,
      },
    },
  );

  return (
    <Container>
      <Head>
        <title>Create Next App</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Pagination>
        {Array.from(new Array(pages).keys()).map((pageNumber) => {
          const current = pageNumber + 1;
          return (
            <Button
              key={`button_${pageNumber}`}
              onClick={() => setPage(current)}
              active={current === page}
            >
              {current}
            </Button>
          );
        })}
      </Pagination>

      {data?.getProducts && (
        <ProductsOverview products={data.getProducts} />
      )}
    </Container>
  );
};

type HomeProps = {
  getProducts: i.Product[]
  total: number;
};

export const getServerSideProps = async () => {
  const data = await fetcher(
    `query GetProducts($offset: Int!, $limit: Int!) {
        getProducts(offset: $offset, limit: $limit) {
          name
          image
          categories
        }
        getTotalProducts
    }`,
    {
      offset: 0,
      limit: 20,
    },
  );

  if (!data) {
    return {
      notFound: true,
    };
  }

  return {
    props: {
      products: data.getProducts,
      total: data.getTotalProducts,
    },
  };
};

export default Home;
