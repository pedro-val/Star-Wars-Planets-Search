import { useContext } from 'react';
import Context from '../context/Context';
import useFilter from './useFilter';

const useOrdenatedFilters = () => {
  const radix = 10;
  const state = useContext(Context);
  const { filteredArray, setFilteredArray, arrayWithFilters } = state;
  const { multipleFilters } = useFilter();

  const orderList = (inputFilterToOrder, inputOrderToFilter) => {
    console.log(inputFilterToOrder, inputOrderToFilter);
    if (inputOrderToFilter === 'ASC') {
      const ordenatedArray = filteredArray.sort((a, b) => parseInt(
        a[inputFilterToOrder],
        radix,
      ) - parseInt(b[inputFilterToOrder], radix));
      setFilteredArray(ordenatedArray);
      multipleFilters(false, arrayWithFilters, true);
    } else {
      const ordenatedArray = filteredArray.sort((a, b) => parseInt(
        b[inputFilterToOrder],
        radix,
      ) - parseInt(a[inputFilterToOrder], radix));
      setFilteredArray(ordenatedArray);
      multipleFilters(false, arrayWithFilters, true);
    }
  };

  return {
    orderList,
  };
};

export default useOrdenatedFilters;
