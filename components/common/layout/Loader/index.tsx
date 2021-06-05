import * as React from 'react';

import LoadingSvg from 'vectors/loading.svg';

import { LoaderContainer } from './styled';

export const Loader: React.FC = () => {
  return (
    <LoaderContainer>
      <LoadingSvg />
    </LoaderContainer>
  );
};
