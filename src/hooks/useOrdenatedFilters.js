import { useContext } from 'react';
import Context from '../context/Context';
import useFilter from './useFilter';

const useOrdenatedFilters = () => {
  const radix = 10;
  const magicNan = 999999999;
  const state = useContext(Context);
  const { filteredArray,
    setFilteredArray,
    arrayWithFilters,
    inputFilterToOrder,
    inputOrderToFilter } = state;
  const { multipleFilters } = useFilter();

  const orderList = () => {
    if (inputOrderToFilter === 'ASC') {
      const ordenatedArray = filteredArray.sort((a, b) => {
        let valueA = parseInt(a[inputFilterToOrder], radix);
        let valueB = parseInt(b[inputFilterToOrder], radix);

        if (Number.isNaN(valueA)) {
          valueA = magicNan;
        }
        if (Number.isNaN(valueB)) {
          valueB = magicNan;
        }

        return valueA - valueB;
      });

      setFilteredArray(ordenatedArray);
      multipleFilters(false, arrayWithFilters, true);
    } else {
      const ordenatedArray = filteredArray.sort((a, b) => {
        let valueA = parseInt(b[inputFilterToOrder], radix);
        let valueB = parseInt(a[inputFilterToOrder], radix);

        if (Number.isNaN(valueA)) {
          valueA = magicNan;
        }
        if (Number.isNaN(valueB)) {
          valueB = magicNan;
        }

        return valueA - valueB;
      });

      setFilteredArray(ordenatedArray);
      multipleFilters(false, arrayWithFilters, true);
    }
  };

  // const orderList = () => {
  //   if (inputOrderToFilter === 'ASC') {
  //     const ordenatedArray = filteredArray.sort((a, b) => parseFloat(
  //       a[inputFilterToOrder],
  //       radix,
  //     ) - parseFloat(b[inputFilterToOrder], radix));
  //     setFilteredArray(ordenatedArray);
  //     multipleFilters(false, arrayWithFilters, true);
  //   } else {
  //     const ordenatedArray = filteredArray.sort((a, b) => parseFloat(
  //       b[inputFilterToOrder],
  //       radix,
  //     ) - parseFloat(a[inputFilterToOrder], radix));
  //     setFilteredArray(ordenatedArray);
  //     multipleFilters(false, arrayWithFilters, true);
  //   }
  // };

  return {
    orderList,
  };
};

export default useOrdenatedFilters;
