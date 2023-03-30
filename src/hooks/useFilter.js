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
    setDropDownValue,
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

  const multipleFilters = (isAddFilter, newFilterArray, ordenated) => {
    let filters;
    let worldsToFilter;
    if (isAddFilter) {
      filters = [...arrayWithFilters,
        { id: arrayWithFilters.length,
          dropDownValue,
          rangeInputValue,
          inputNumberValue }];
      worldsToFilter = filteredArray;
    } else if (newFilterArray.length > 0 && ordenated) {
      filters = newFilterArray;
      worldsToFilter = filteredArray;
    } else if (newFilterArray.length > 0 && ordenated === undefined) {
      filters = newFilterArray;
      worldsToFilter = worldsReturn;
    } else {
      filters = [];
      worldsToFilter = worldsReturn;
    }
    filterConditions(filters, worldsToFilter);
  };

  const handleClick = (e, dropDownToRemove) => {
    e.preventDefault();
    const newDropDown = dropDownState.filter((option) => option !== dropDownToRemove);
    setDropDownState(newDropDown);
    setDropDownValue('population');
    multipleFilters(true);
  };

  const removeFilter = (id, dropDownOption) => {
    const newArrayFiltered = arrayWithFilters.filter((filter) => filter.id !== id);
    setArrayWithFilters(newArrayFiltered);
    setDropDownState([...dropDownState, dropDownOption]);
    multipleFilters(false, newArrayFiltered);
  };

  const removeAllFilters = () => {
    setArrayWithFilters([]);
    const tempFilterArray = [];
    setDropDownState(['population',
      'orbital_period',
      'diameter',
      'rotation_period',
      'surface_water']);
    multipleFilters(false, tempFilterArray);
  };

  return {
    handleClick,
    removeFilter,
    removeAllFilters,
    multipleFilters,
  };
}

export default useFilter;
