import * as React from 'react';

import { useQueryParams } from 'hooks';
import { Button } from 'common/interaction';
import { Label } from 'common/typography';

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
      <Label htmlFor="from">Price</Label>
      <PriceFilterInput
        name="from"
        type="text"
        placeholder="From €"
        value={from}
        onChange={(event) => setFrom(event.target.value)}
      />
      <PriceFilterInput
        name="to"
        type="text"
        placeholder="To €"
        value={to}
        onChange={(event) => setTo(event.target.value)}
      />
      <Button type="submit">
        Filter
      </Button>
    </PriceFilterForm>
  );
};
