import * as i from 'types';
import * as React from 'react';
import Head from 'next/head';
import useSWR from 'swr';

import { fetcher } from 'services';
import { useQueryParams } from 'hooks';
import { ProductsFilter, ProductsOverview } from 'modules/products';
import { Container, Pagination } from 'common/layout';
import { Button } from 'common/interaction';

const limit = 21;

const Home: React.FC<HomeProps> = ({
  getProducts, getCategories, getTotalProducts,
}) => {
  const { queryParams } = useQueryParams();
  const [currentPage, setCurrentPage] = React.useState(1);
  const [pages, setPages] = React.useState(Math.floor((getTotalProducts || 0) / limit));

  const variables = React.useMemo(() => ({
    offset: currentPage === 1 ? 0 : ((currentPage - 1) * limit),
    limit,
    categories: queryParams?.categories,
    from: queryParams?.from,
    to: queryParams?.to,
  }), [currentPage, queryParams]);

  const { data, isValidating } = useSWR<{
    getProducts: i.Product[];
    getTotalProducts: number;
  }>(
    [
      `query GetProducts($offset: Int!, $limit: Int!, $categories: String, $from: String, $to: String) {
        getProducts(offset: $offset, limit: $limit, categories: $categories, from: $from, to: $to) {
          name
          image
          categories
          price
        }
        getTotalProducts(categories: $categories, from: $from, to: $to)
      }`,
      variables,
    ],
    fetcher,
    {
      initialData: {
        getProducts,
        getTotalProducts,
      },
    },
  );

  React.useEffect(() => {
    setPages(Math.floor((data?.getTotalProducts || 0) / limit));
  }, [data?.getTotalProducts]);

  React.useEffect(() => {
    setCurrentPage(1);
  }, [queryParams?.categories]);

  return (
    <Container>
      <Head>
        <title>NextJS &amp; GraphQL - filter assignment</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <ProductsFilter categories={getCategories} />

      {data?.getProducts && (
        <ProductsOverview products={data.getProducts} loading={isValidating} />
      )}

      <Pagination>
        {Array.from(new Array(pages).keys()).map((pageNumber) => {
          const current = pageNumber + 1;
          return (
            <Button
              key={`button_${pageNumber}`}
              onClick={() => setCurrentPage(current)}
              active={current === currentPage}
              variant="square"
            >
              {current}
            </Button>
          );
        })}
      </Pagination>
    </Container>
  );
};

type HomeProps = {
  getProducts: i.Product[];
  getCategories: string[];
  getTotalProducts: number;
};

export const getServerSideProps = async ({ query }) => {
  const data = await fetcher(
    `query GetProducts($offset: Int!, $limit: Int!, $categories: String, $from: String, $to: String) {
      getProducts(offset: $offset, limit: $limit, categories: $categories, from: $from, to: $to) {
        name
        image
        categories
        price
      }
      getTotalProducts(categories: $categories, from: $from, to: $to)
      getCategories
    }`,
    {
      offset: 0,
      limit,
      categories: query?.categories,
      from: query?.from,
      to: query?.to,
    },
  );

  if (!data) {
    return {
      notFound: true,
    };
  }

  return {
    props: {
      getProducts: data.getProducts,
      getCategories: data.getCategories,
      getTotalProducts: data.getTotalProducts,
    },
  };
};

export default Home;
