import { useContext } from 'react';
import Context from '../context/Context';
import useFilter from './useFilter';

const useOrdenatedFilters = () => {
  const radix = 10;
  const state = useContext(Context);
  const { filteredArray,
    setFilteredArray,
    arrayWithFilters,
    inputFilterToOrder,
    inputOrderToFilter } = state;
  const { multipleFilters } = useFilter();

  const orderList = () => {
    const Mnumber = 1000000000001;
    const unknownValue = Mnumber;
    let sortedArray = [];

    if (inputOrderToFilter === 'ASC') {
      sortedArray = filteredArray.sort((a, b) => {
        const aValue = a[inputFilterToOrder] === 'unknown'
          ? unknownValue : parseInt(a[inputFilterToOrder], radix);
        const bValue = b[inputFilterToOrder] === 'unknown'
          ? unknownValue : parseInt(b[inputFilterToOrder], radix);
        return aValue - bValue;
      });
    } else {
      const inifitiMinus = Number.NEGATIVE_INFINITY;
      sortedArray = filteredArray.sort((a, b) => {
        const aValue = a[inputFilterToOrder] === 'unknown'
          ? inifitiMinus : parseInt(a[inputFilterToOrder], radix);
        const bValue = b[inputFilterToOrder] === 'unknown'
          ? inifitiMinus : parseInt(b[inputFilterToOrder], radix);
        return bValue - aValue;
      });
    }

    setFilteredArray(sortedArray);
    multipleFilters(false, arrayWithFilters, true);
  };

  return {
    orderList,
  };
};

export default useOrdenatedFilters;
