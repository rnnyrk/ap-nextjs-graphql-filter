import React from 'react';
import qs from 'qs';
import { useRouter } from 'next/router';

export const useQueryParams = () => {
  const router = useRouter();

  const getQueryParams: qs.ParsedQs = React.useMemo(() => {
    const queryParams = qs.parse(router.query as unknown as string, { ignoreQueryPrefix: true });
    return queryParams;
  }, [router.query]);

  const setQueryParams = (params: UseSetQueryParamsProps) => {
    // remove empty queries
    Object.keys(params).forEach((key) => params[key] === '' && delete params[key]);
    const search = qs.stringify(params);
    router.replace({ search: search || 'none' });
  };

  return {
    queryParams: getQueryParams,
    setQueryParams,
  };
};

type UseSetQueryParamsProps = {
  [key: string]: string | number | undefined;
};
