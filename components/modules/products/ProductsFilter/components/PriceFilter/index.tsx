import * as React from 'react';

import { useQueryParams } from 'hooks';
import { Button } from 'common/interaction';

import { PriceFilterContainer, PriceFilterInput } from './styled';

export const PriceFilter: React.FC = () => {
  const { queryParams, setQueryParams } = useQueryParams();
  const [from, setFrom] = React.useState<string | undefined>(undefined);
  const [to, setTo] = React.useState<string | undefined>(undefined);

  const onSubmit = () => {
    setQueryParams({ ...queryParams, from, to });
  };

  return (
    <PriceFilterContainer>
      <PriceFilterInput name="from" type="text" onChange={(event) => setFrom(event.target.value)} />
      <PriceFilterInput name="to" type="text" onChange={(event) => setTo(event.target.value)} />
      <Button onClick={onSubmit}>
        Filter
      </Button>
    </PriceFilterContainer>
  );
};
