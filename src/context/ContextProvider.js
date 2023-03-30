import React, { useState, useCallback } from 'react';
import PropTypes from 'prop-types';
import Context from './Context';

export default function ContextProvider({ children }) {
  const [inputText, setInputText] = useState('');
  const [isLoading, setIsLoading] = useState(true);
  const [fullApiReturn, setFullApiReturn] = useState({});
  const [worldsReturn, setWorldReturn] = useState([]);
  const [filteredArray, setFilteredArray] = useState([]);
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
  const [inputFilterToOrder, setInputFilterToOrder] = useState('');
  const [inputOrderToFilter, setInputOrderToFilter] = useState('');

  const fetchPlanets = useCallback(async (endpoint) => {
    setIsLoading(true);
    try {
      const firstFetch = await fetch(endpoint);
      const json = await firstFetch.json();
      json.results.forEach((world) => {
        delete world.residents;
      });
      setFilteredArray(json.results);
      setWorldReturn(json.results);
      setFullApiReturn(json);
    } catch (error) {
      console.log(error);
    } finally {
      setIsLoading(false);
    }
  }, []);

  const handleChangeText = ({ target }) => {
    setInputText(target.value);
    if (arrayWithFilters.length > 0) {
      setFilteredArray(filteredArray.filter((world) => world.name
        .toLowerCase().includes(target.value)));
    } else {
      setFilteredArray(worldsReturn.filter((world) => world.name
        .toLowerCase().includes(target.value)));
    }
  };

  const state = {
    inputText,
    handleChangeText,
    fetchPlanets,
    isLoading,
    fullApiReturn,
    filteredArray,
    setFilteredArray,
    setIsLoading,
    arrayWithFilters,
    setArrayWithFilters,
    inputNumberValue,
    setInputNumberValue,
    rangeInputValue,
    setRangeInputValue,
    rangeInputState,
    setRangeInputState,
    dropDownValue,
    setDropDownValue,
    dropDownState,
    setDropDownState,
    worldsReturn,
    inputFilterToOrder,
    setInputFilterToOrder,
    inputOrderToFilter,
    setInputOrderToFilter,
  };

  return (

    <Context.Provider value={ state }>
      {children}
    </Context.Provider>
  );
}

ContextProvider.propTypes = {
  children: PropTypes.node.isRequired,
};
