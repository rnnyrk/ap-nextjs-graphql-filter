import * as React from 'react';

import { removeItemFromArray } from 'services';
import { useQueryParams } from 'hooks';

import { ColorsFilterContainer, ColorBlock } from './styled';

export const ColorsFilter: React.FC<ColorsFilterProps> = ({
  colors,
}) => {
  const { queryParams, setQueryParams } = useQueryParams();
  const [activeColors, setActiveColors] = React.useState<string[]>([]);

  const onSetColor = (colorName: string) => {
    let newColors = [...activeColors];
    if (newColors.includes(colorName)) {
      newColors = removeItemFromArray(newColors, colorName);
    } else {
      newColors.push(colorName);
    }

    setActiveColors(newColors);
    setQueryParams({ ...queryParams, colors: newColors.join(',') });
  };

  return (
    <ColorsFilterContainer>
      {colors.map((color) => {
        return (
          <ColorBlock
            onClick={() => onSetColor(color)}
            active={activeColors?.includes(color)}
            color={color.toLowerCase()}
          />
        );
      })}
    </ColorsFilterContainer>
  );
};

type ColorsFilterProps = {
  colors: string[];
};
