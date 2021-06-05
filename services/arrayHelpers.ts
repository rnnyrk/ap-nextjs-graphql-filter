export const addToArrayOnIndex = <T>(
  array: T[], item: T, index: number,
): T[] => {
  const copyArray = [...array];
  copyArray.splice(index, 0, item);
  return copyArray;
};

export const removeItemFromArray = <T>(
  array: T[], item: T,
): T[] => {
  const index = array.indexOf(item);
  if (index > -1) {
    array.splice(index, 1);
  }
  return array;
};

export const arrayOfObjectsIncludes = <T, K extends keyof T>(
  array: T[], key: K, value: T[K],
): boolean => {
  const copyArray = [...array];
  return copyArray.filter((item) => item[key] === value).length > 0;
};

export const removeFromObjectsArrayOnIndex = <T, K extends keyof T>(
  array: T[], key: K, value: T[K],
): T[] => {
  const copyArray = [...array];
  return copyArray.filter((obj) => {
    return obj[key] !== value;
  });
};

export const moveWithinArray = <T>(
  array: T[], oldIndex: number, newIndex: number,
) => {
  const newArray = Array.from(array);
  const [removed] = newArray.splice(oldIndex, 1);
  newArray.splice(newIndex, 0, removed);
  return newArray;
};
