import React from 'react';
import { render, screen, waitForElementToBeRemoved } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import App from '../App';
import ContextProvider from '../context/ContextProvider';
import testData from '../../cypress/mocks/testData';
import mockFetch from '../../cypress/mocks/fetch';

describe('teste da aplicação star wars planets', () => {
  beforeEach(() => {
    global.fetch = mockFetch;
  })

  it('testando se todos os componentes são renderizados', async () => {
    render(
    <ContextProvider>
    <App />
    </ContextProvider>);
    const textBox = screen.getByRole('textbox');
      const tatooine = await screen.findByRole('cell', { name: /tatooine/i });
      expect(tatooine).toBeVisible();
      userEvent.type(textBox, 'av');
      const yarvin = screen.getByRole('cell', { name: /yavin iv/i });
      expect(yarvin).toBeVisible();
  });
  it('testando filtros', async () => {
    render(
      <ContextProvider>
      <App />
      </ContextProvider>);
    const textBox = screen.getByRole('textbox');
      const tatooine = await screen.findByRole('cell', { name: /tatooine/i });
      expect(tatooine).toBeVisible();
      userEvent.type(textBox, 'oo');
      const naboo = screen.getByRole('cell', { name: /naboo/i });
      expect(naboo).toBeVisible();
      const selectElement = screen.getAllByRole('combobox');
      userEvent.selectOptions(selectElement[0], 'diameter');
      const numberInput = screen.getByRole('spinbutton');
      userEvent.type(numberInput, '11000');
      const buttonFilter = screen.getAllByRole('button');
      userEvent.click(buttonFilter[0]);
      const dellButton = screen.getByRole('button', { name: /❎/i });
      expect(dellButton).toBeVisible();
      expect(screen.getByRole('cell', { name: /naboo/i })).toBeVisible();
      userEvent.selectOptions(selectElement[0], 'surface_water');
      userEvent.selectOptions(selectElement[1], 'igual a');

      while (numberInput.value !== '') {
        userEvent.type(numberInput, '{backspace}')
      }
      userEvent.type(numberInput, '12')
      const buttonFilter1 = screen.getAllByRole('button');
      userEvent.click(buttonFilter1[0]);
      expect(screen.getByRole('cell', { name: /naboo/i })).toBeVisible();
      const removeFilters = screen.getByRole('button', {  name: /remove all filters/i});
      userEvent.click(removeFilters);
      expect(screen.getByRole('cell', {  name: /yavin iv/i})).toBeVisible();
      while (numberInput.value !== '') {
        userEvent.type(numberInput, '{backspace}')
      }
      while (textBox.value !== '') {
        userEvent.type(textBox, '{backspace}')
      }
      const ascButton = screen.getAllByRole('radio');
      userEvent.click(ascButton[1]);
      const ordernateButton = screen.getByRole('button', {  name: /order/i})
      userEvent.click(ordernateButton);
      const allNames = screen.getAllByTestId('planet-name');
      expect(allNames).toHaveLength(10);
      userEvent.click(ascButton[0]);
      userEvent.click(ordernateButton);
      const sortDiameter = screen.getAllByRole('combobox');
      userEvent.selectOptions(sortDiameter[2], 'diameter');
      userEvent.click(ordernateButton);
      userEvent.selectOptions(sortDiameter[0], 'diameter');
      userEvent.selectOptions(sortDiameter[1], 'menor que');
      userEvent.type(numberInput, '12000')
      userEvent.click(buttonFilter1[0]);
      expect(screen.getByRole('cell', {  name: /yavin iv/i})).toBeVisible();
      while (numberInput.value !== '') {
        userEvent.type(numberInput, '{backspace}')
      }
      userEvent.selectOptions(sortDiameter[0], 'orbital_period');
      userEvent.selectOptions(sortDiameter[1], 'maior que');
      userEvent.type(numberInput, '500')
      userEvent.click(buttonFilter1[0]);
      expect(screen.getByRole('cell', {  name: /yavin iv/i})).toBeVisible();
      userEvent.selectOptions(sortDiameter[0], 'population');
      userEvent.selectOptions(sortDiameter[1], 'menor que');
      while (numberInput.value !== '') {
        userEvent.type(numberInput, '{backspace}')
      }
      userEvent.type(numberInput, '1500')
      userEvent.click(buttonFilter1[0]);
      expect(screen.getByRole('cell', {  name: /yavin iv/i})).toBeVisible();
      userEvent.selectOptions(sortDiameter[0], 'surface_water');
      userEvent.selectOptions(sortDiameter[1], 'igual a');
      while (numberInput.value !== '') {
        userEvent.type(numberInput, '{backspace}')
      }
      userEvent.type(numberInput, '10')
      userEvent.click(buttonFilter1[0]);
      const deletebuttons = screen.getAllByRole('button', { name: /❎/i })
      expect(deletebuttons).toHaveLength(4);
      deletebuttons.forEach((button) => userEvent.click(button));
      const allNames1 = screen.getAllByTestId('planet-name');
      expect(allNames1).toHaveLength(10);
  });
});
