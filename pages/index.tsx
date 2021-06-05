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
  getCategories, getColors, getTotalProducts, getProducts,
}) => {
  const { queryParams } = useQueryParams();
  const [currentPage, setCurrentPage] = React.useState(1);
  const [pages, setPages] = React.useState(Math.floor((getTotalProducts || 0) / limit));

  const variables = React.useMemo(() => ({
    offset: currentPage === 1 ? 0 : ((currentPage - 1) * limit),
    limit,
    categories: queryParams?.categories,
    colors: queryParams?.colors,
    from: queryParams?.from,
    to: queryParams?.to,
  }), [currentPage, queryParams]);

  const { data, isValidating, error } = useSWR<{
    getProducts: i.Product[];
    getTotalProducts: number;
  }>(
    [
      `query GetProducts(
        $offset: Int!,
        $limit: Int!,
        $categories: String,
        $colors: String,
        $from: String,
        $to: String
      ) {
        getProducts(
          offset: $offset,
          limit: $limit,
          categories: $categories,
          colors: $colors,
          from: $from,
          to: $to
        ) {
          name
          image
          categories
          price
        }
        getTotalProducts(categories: $categories, colors: $colors, from: $from, to: $to)
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

      <ProductsFilter categories={getCategories} colors={getColors} />

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
  getCategories: string[];
  getColors: string[];
  getTotalProducts: number;
  getProducts: i.Product[];
};

export const getServerSideProps = async ({ query }) => {
  const data = await fetcher(
    `query GetProducts(
      $offset: Int!,
      $limit: Int!,
      $categories: String,
      $colors: String,
      $from: String,
      $to: String
    ) {
      getProducts(
        offset: $offset,
        limit: $limit,
        categories: $categories,
        colors: $colors,
        from: $from,
        to: $to
      ) {
        name
        image
        categories
        price
      }
      getTotalProducts(categories: $categories, colors: $colors, from: $from, to: $to)
      getCategories
      getColors
    }`,
    {
      offset: 0,
      limit,
      categories: query?.categories,
      colors: query?.colors,
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
      getCategories: data.getCategories,
      getColors: data.getColors,
      getProducts: data.getProducts,
      getTotalProducts: data.getTotalProducts,
    },
  };
};

export default Home;
