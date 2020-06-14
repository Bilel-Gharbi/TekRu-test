export const updateElementFromState = (arr, element) => {
  return arr.map((item) => {
    if (item.id !== element.id) {
      return item;
    }
    return {
      ...item,
      ...element,
    };
  });
};

export const filterElementFromState = (arr, element) => {
  return arr.filter((el) => el.id !== element.id);
};
