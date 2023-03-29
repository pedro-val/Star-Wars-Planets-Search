import React, { useState, useCallback } from 'react';
import PropTypes from 'prop-types';
import Context from './Context';

export default function ContextProvider({ children }) {
  const [inputText, setInputText] = useState('');
  const [isLoading, setIsLoading] = useState(true);
  const [fullApiReturn, setFullApiReturn] = useState({});
  const [worldsReturn, setWorldReturn] = useState([]);
  const [filteredArray, setFilteredArray] = useState([]);
  const [numberOfFilters, setNumberOfFilters] = useState(0);

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
    if (numberOfFilters >= 1) {
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
    setNumberOfFilters,
    numberOfFilters,
  };

  return (

    <Context.Provider value={ state }>
      {children}
    </Context.Provider>
  );
}

ContextProvider.propTypes = {
  children: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.node),
  ]).isRequired,
};
