import React from 'react';
// import { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import Context from './Context';
// import useFetch from '../hooks/useFetch';

export default function ContextProvider({ children }) {
  return (

    <Context.Provider>
      {children}
    </Context.Provider>
  );
}

ContextProvider.propTypes = {
  children: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.node),
  ]).isRequired,
};
