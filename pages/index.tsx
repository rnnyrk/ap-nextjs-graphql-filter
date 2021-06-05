import * as i from 'types';
import * as React from 'react';
import Head from 'next/head';
import useSWR from 'swr';

import { fetcher } from 'services';
import { useQueryParams } from 'hooks';
import Queries from 'queries/getProducts.gql';
import { ProductsFilter, ProductsOverview } from 'modules/products';
import { Container, Pagination } from 'common/layout';
import { Button } from 'common/interaction';

const limit = 21;

const Home: React.FC<HomeProps> = ({
  getCategories, getColors, getProducts,
}) => {
  const { queryParams } = useQueryParams();
  const [currentPage, setCurrentPage] = React.useState(1);
  const [pages, setPages] = React.useState(Math.floor((getProducts?.count || 0) / limit));

  const variables = React.useMemo(() => ({
    offset: currentPage === 1 ? 0 : ((currentPage - 1) * limit),
    limit,
    categories: queryParams?.categories,
    colors: queryParams?.colors,
    from: queryParams?.from,
    to: queryParams?.to,
  }), [currentPage, queryParams]);

  const { data, isValidating } = useSWR<{ getProducts: i.ProductsResponse; }>(
    [Queries.ProductsQuery, variables],
    fetcher,
    {
      initialData: {
        getProducts,
      },
    },
  );

  React.useEffect(() => {
    setPages(Math.floor((data?.getProducts?.count || 0) / limit));
  }, [data?.getProducts?.count]);

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

      {data?.getProducts?.products && (
        <ProductsOverview products={data.getProducts.products} loading={isValidating} />
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
  getProducts: i.ProductsResponse;
};

export const getServerSideProps = async ({ query }) => {
  const data = await fetcher(Queries.InitialProductsQuery, {
    offset: 0,
    limit,
    categories: query?.categories,
    colors: query?.colors,
    from: query?.from,
    to: query?.to,
  });

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
    },
  };
};

export default Home;
