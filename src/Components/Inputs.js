import React, { useContext } from 'react';
import Context from '../context/Context';
import useFilter from '../hooks/useFilter';

function Inputs() {
  const state = useContext(Context);
  const { handleClick, removeFilter } = useFilter();
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
    arrayWithFilters } = state;
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
      {arrayWithFilters.length === 0 ? <p>Sem filtros no momento</p> : (
        arrayWithFilters.map((filter) => (
          <span key={ filter.id }>
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
