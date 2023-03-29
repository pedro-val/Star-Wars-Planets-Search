import React, { useContext } from 'react';
import Context from '../context/Context';
import useFilter from '../hooks/useFilter';

function Inputs() {
  const state = useContext(Context);
  const { handleClick,
    rangeInputState,
    setDropDownValue,
    dropDownValue,
    setRangeInputValue,
    rangeInputValue,
    setInputNumberValue,
    inputNumberValue,
    dropDownState } = useFilter();
  const { inputText, handleChangeText } = state;
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
          onClick={ (e) => handleClick(e) }
        >
          Filter

        </button>
      </form>
      {}
    </div>

  );
}

export default Inputs;
