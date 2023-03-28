import React from 'react';
import './App.css';
import ContextProvider from './context/ContextProvider';
import Table from './Components/Table';

function App() {
  return (
    <ContextProvider>
      <Table />
    </ContextProvider>
  );
}

export default App;
