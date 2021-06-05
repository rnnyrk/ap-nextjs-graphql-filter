import * as React from 'react';

import { useQueryParams } from 'hooks';
import { Button } from 'common/interaction';

import { PriceFilterForm, PriceFilterInput } from './styled';

export const PriceFilter: React.FC = () => {
  const { queryParams, setQueryParams } = useQueryParams();
  const [from, setFrom] = React.useState<string>(queryParams?.from as string || '');
  const [to, setTo] = React.useState<string>(queryParams?.to as string || '');

  const onSubmit = (event) => {
    event.preventDefault();
    setQueryParams({ ...queryParams, from, to });
  };

  return (
    <PriceFilterForm onSubmit={onSubmit}>
      <PriceFilterInput
        name="from"
        type="text"
        value={from}
        onChange={(event) => setFrom(event.target.value)}
      />
      <PriceFilterInput
        name="to"
        type="text"
        value={to}
        onChange={(event) => setTo(event.target.value)}
      />
      <Button type="submit">
        Filter
      </Button>
    </PriceFilterForm>
  );
};
