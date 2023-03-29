import { useState, useContext } from 'react';
import Context from '../context/Context';

function useFilter() {
  const state = useContext(Context);
  const { filteredArray, setFilteredArray, setNumberOfFilters,
    numberOfFilters } = state;
  const [arrayWithFilters, setArrayWithFilters] = useState([]);
  const [inputNumberValue, setInputNumberValue] = useState(0);
  const [rangeInputValue, setRangeInputValue] = useState('maior que');
  const [rangeInputState, setRangeInputState] = useState(['maior que',
    'menor que', 'igual a']);
  const [dropDownValue, setDropDownValue] = useState('population');
  const [dropDownState, setDropDownState] = useState(['population',
    'orbital_period',
    'diameter',
    'rotation_period',
    'surface_water']);

  const multipleFilters = () => {
    const filters = [...arrayWithFilters,
      { id: arrayWithFilters.length, dropDownValue, rangeInputValue, inputNumberValue }];
    console.log(typeof (filters[0].inputNumberValue));
    console.log(typeof (inputNumberValue));
    const retorno = filters.reduce((acc, cur) => {
      switch (cur.rangeInputValue) {
      case 'maior que':
        if (acc.length === 0) {
          return filteredArray.filter((world) => parseFloat(world[cur.dropDownValue])
            > cur.inputNumberValue);
        }
        return acc.filter((world) => parseFloat(world[cur.dropDownValue])
                > cur.inputNumberValue);
      case 'menor que':
        if (acc.length === 0) {
          return filteredArray.filter((world) => parseFloat(world[cur.dropDownValue])
            < cur.inputNumberValue);
        }
        return acc.filter((world) => parseFloat(world[cur.dropDownValue])
              < cur.inputNumberValue);
      case 'igual a':
        if (acc.length === 0) {
          return filteredArray.filter((world) => world[cur.dropDownValue]
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

  const handleClick = (e) => {
    e.preventDefault();
    setNumberOfFilters(numberOfFilters + 1);
    multipleFilters();
  };

  return {
    handleClick,
    rangeInputState,
    setDropDownValue,
    dropDownValue,
    setRangeInputValue,
    rangeInputValue,
    setInputNumberValue,
    inputNumberValue,
    setDropDownState,
    dropDownState,
    setRangeInputState,
  };
}

export default useFilter;
