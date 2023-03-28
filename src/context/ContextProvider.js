import React, { useState, useCallback } from 'react';
import PropTypes from 'prop-types';
import Context from './Context';

export default function ContextProvider({ children }) {
  const [input, setInput] = useState('');
  const [isLoading, setIsLoading] = useState(true);
  const [fullApiReturn, setFullApiReturn] = useState({});
  const [worldsReturn, setWorldReturn] = useState([]);
  const [filteredArray, setFilteredArray] = useState([]);

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

  const handleChange = ({ target }) => {
    setInput(target.value);
    setFilteredArray(worldsReturn.filter((world) => world.name.includes(target.value)));
  };

  const state = {
    input,
    handleChange,
    fetchPlanets,
    isLoading,
    fullApiReturn,
    filteredArray,
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
