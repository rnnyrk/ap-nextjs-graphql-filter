import React from 'react';
import qs from 'qs';
import { useRouter } from 'next/router';

export const useQueryParams = () => {
  const router = useRouter();

  const getQueryParams: UseQueryParamsReturnType = React.useMemo(() => {
    console.log({
      query: router.query,
    });

    const queryParams = qs.parse(router.query, { ignoreQueryPrefix: true });

    return queryParams;
  }, [router.query]);

  const setQueryParams = (params: UseSetQueryParamsProps) => {
    // remove empty queries
    Object.keys(params).forEach((key) => params[key] === '' && delete params[key]);

    const search = qs.stringify(params);

    router.replace({ search });
  };

  return {
    queryParams: getQueryParams,
    setQueryParams,
  };
};

type UseQueryParamsReturnType = {
  [key: string]: any;
};

type UseSetQueryParamsProps = {
  [key: string]: string | number;
};
