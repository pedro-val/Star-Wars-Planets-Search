import { useContext } from 'react';
import Context from '../context/Context';

function useFilter() {
  const state = useContext(Context);
  const { filteredArray,
    setFilteredArray,
    arrayWithFilters,
    dropDownValue,
    rangeInputValue,
    inputNumberValue,
    setArrayWithFilters,
    dropDownState,
    setDropDownState,
    worldsReturn,
  } = state;

  const filterReducer = (filters, worldsToFilter) => {
    const retorno = filters.reduce((acc, cur) => {
      switch (cur.rangeInputValue) {
      case 'maior que':
        if (acc.length === 0) {
          return worldsToFilter.filter((world) => parseFloat(world[cur.dropDownValue])
            > cur.inputNumberValue);
        }
        return acc.filter((world) => parseFloat(world[cur.dropDownValue])
                > cur.inputNumberValue);
      case 'menor que':
        if (acc.length === 0) {
          return worldsToFilter.filter((world) => parseFloat(world[cur.dropDownValue])
            < cur.inputNumberValue);
        }
        return acc.filter((world) => parseFloat(world[cur.dropDownValue])
              < cur.inputNumberValue);
      case 'igual a':
        if (acc.length === 0) {
          return worldsToFilter.filter((world) => world[cur.dropDownValue]
            === cur.inputNumberValue);
        }
        return acc.filter((world) => world[cur.dropDownValue]
              === (cur.inputNumberValue));
      default:
        break;
      }
      return acc;
    }, []);
    setFilteredArray(retorno);
    setArrayWithFilters(filters);
  };

  const filterConditions = (filters, worldsToFilter) => {
    if (filters.length > 0) {
      filterReducer(filters, worldsToFilter);
    } else {
      setFilteredArray(worldsReturn);
      setArrayWithFilters(filters);
    }
  };

  const multipleFilters = (isAddFilter, newFilterArray) => {
    console.log(isAddFilter);
    console.log(newFilterArray);
    let filters;
    let worldsToFilter;
    if (isAddFilter) {
      filters = [...arrayWithFilters,
        { id: arrayWithFilters.length,
          dropDownValue,
          rangeInputValue,
          inputNumberValue }];
      worldsToFilter = filteredArray;
    } else {
      filters = newFilterArray;
      worldsToFilter = worldsReturn;
    }
    filterConditions(filters, worldsToFilter);
  };

  const handleClick = (e, dropDownToRemove) => {
    e.preventDefault();
    setDropDownState(dropDownState.filter((option) => option !== dropDownToRemove));
    multipleFilters(true);
  };

  const removeFilter = (id, dropDownOption) => {
    const newArrayFiltered = arrayWithFilters.filter((filter) => filter.id !== id);
    setArrayWithFilters(newArrayFiltered);
    setDropDownState([...dropDownState, dropDownOption]);
    multipleFilters(false, newArrayFiltered);
  };

  return {
    handleClick,
    removeFilter,
  };
}

export default useFilter;
