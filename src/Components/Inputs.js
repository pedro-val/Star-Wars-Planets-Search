import React, { useContext, useState } from 'react';
import Context from '../context/Context';
import useFilter from '../hooks/useFilter';
import useOrdenatedFilters from '../hooks/useOrdenatedFilters';

function Inputs() {
  const state = useContext(Context);
  const { handleClick, removeFilter, removeAllFilters } = useFilter();
  const { orderList } = useOrdenatedFilters();
  const { inputText,
    handleChangeText,
    rangeInputState,
    setDropDownValue,
    dropDownValue,
    setRangeInputValue,
    rangeInputValue,
    setInputNumberValue,
    inputNumberValue,
    dropDownState,
    arrayWithFilters,
  } = state;
  const [inputFilterToOrder, setInputFilterToOrder] = useState('population');
  const dropDownToRender = ['population',
    'orbital_period',
    'diameter',
    'rotation_period',
    'surface_water'];
  const [inputOrderToFilter, setInputOrderToFilter] = useState('');
  return (
    <div>
      <form>
        <input
          type="text"
          name="inputText"
          data-testid="name-filter"
          value={ inputText }
          onChange={ (e) => handleChangeText(e) }
        />
        <select
          data-testid="column-filter"
          value={ dropDownValue }
          onChange={ ({ target }) => setDropDownValue(target.value) }
        >
          {dropDownState.map((option) => <option key={ option }>{option}</option>)}
        </select>
        <select
          data-testid="comparison-filter"
          value={ rangeInputValue }
          onChange={ ({ target }) => setRangeInputValue(target.value) }
        >
          {rangeInputState.map((range) => <option key={ range }>{range}</option>)}
        </select>
        <input
          type="number"
          data-testid="value-filter"
          value={ inputNumberValue }
          onChange={ ({ target }) => setInputNumberValue(target.value) }
        />
        <button
          data-testid="button-filter"
          // disabled={ !dropDownState.includes(dropDownValue) }
          onClick={ (e) => handleClick(e, dropDownValue) }
        >
          Filter

        </button>
      </form>
      <form>
        <select
          data-testid="column-sort"
          onChange={ ({ target }) => setInputFilterToOrder(target.value) }
          value={ inputFilterToOrder }
        >
          {dropDownToRender.map((dropDown) => (
            <option
              key={ dropDown }
            >
              {dropDown}

            </option>
          ))}
        </select>
        <label htmlFor="ASC">
          ASC
          <input
            data-testid="column-sort-input-asc"
            id="ASC"
            type="radio"
            name="radio"
            value="ASC"
            onChange={ ({ target }) => setInputOrderToFilter(target.value) }
          />
        </label>
        <label htmlFor="DESC">
          DESC
          <input
            data-testid="column-sort-input-desc"
            id="DESC"
            type="radio"
            name="radio"
            value="DESC"
            onChange={ ({ target }) => setInputOrderToFilter(target.value) }
          />
        </label>
        <button
          type="button"
          data-testid="column-sort-button"
          onClick={ () => orderList(inputFilterToOrder, inputOrderToFilter) }
        >
          Order

        </button>
      </form>
      <button
        data-testid="button-remove-filters"
        type="button"
        onClick={ removeAllFilters }
      >
        Remove All Filters

      </button>
      {arrayWithFilters.length === 0 ? <p>Sem filtros no momento</p> : (
        arrayWithFilters.map((filter) => (
          <span
            data-testid="filter"
            key={ filter.id }
          >
            `$
            {filter.dropDownValue}
            {' '}
            $
            {filter.rangeInputValue}
            {' '}
            $
            {filter.inputNumberValue}
            `
            <button
              type="button"
              onClick={ () => removeFilter(filter.id, filter.dropDownValue) }
            >
              ❎
            </button>
          </span>
        ))
      )}
    </div>

  );
}

export default Inputs;
