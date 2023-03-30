import React from 'react';
import { render, screen, waitFor } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import App from '../App';

// beforeEach(() => {
//     global.fetch = jest.fn(() => Promise.resolve({
//       json: () => Promise.resolve(planets),
//     }));
//   });

//   afterEach(() => {
//     fetch.mockClear();
//   });

describe('teste da aplicação star wars planets', () => {
  it('testando se todos os componentes são renderizados', async () => {
    render(<App />);
    const textBox = await screen.findByRole('textbox');
    await waitFor(async () => {
      const tatooine = await screen.findByRole('cell', { name: /tatooine/i });
      expect(tatooine).toBeVisible();
      userEvent.type(textBox, 'av');
      const yarvin = screen.getByRole('cell', { name: /yavin iv/i });
      expect(yarvin).toBeVisible();
    }, { timeout: 5000 });
  });
  it('testando filtros', async () => {
    render(<App />);
    const textBox = await screen.findByRole('textbox');
    await waitFor(async () => {
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
      expect(screen.getByRole('button', { name: /❎/i })).toBeVisible();
      expect(screen.getByRole('cell', { name: /naboo/i })).toBeVisible();
    }, { timeout: 5000 });
  });
  it('testando filtros , opções', async () => {
    render(<App />);
    await waitFor(async () => {
      const tatooine = await screen.findByRole('cell', { name: /tatooine/i });
      expect(tatooine).toBeVisible();
      const selectElement = screen.getAllByRole('combobox');
      userEvent.selectOptions(selectElement[0], 'population');
      userEvent.selectOptions(selectElement[1], 'menor que');
      const numberInput = screen.getByRole('spinbutton');
      userEvent.type(numberInput, '30000000');
      const buttonFilter = screen.getAllByRole('button');
      userEvent.click(buttonFilter[0]);
      expect(screen.getByRole('button', { name: /❎/i })).toBeVisible();
      expect(screen.getByRole('cell', { name: /bespin/i })).toBeVisible();
      const radioASC = screen.getByRole('radio', { name: /asc/i });
      const radioDESC = screen.getByRole('radio', { name: /desc/i });
      userEvent.click(radioASC);
      userEvent.click(buttonFilter[1]);
      userEvent.click(radioDESC);
      userEvent.click(buttonFilter[1]);
      userEvent.selectOptions(selectElement[0], 'diameter');
      userEvent.selectOptions(selectElement[1], 'maior que');
      userEvent.click(buttonFilter[0]);
      const allDellButton = screen.getAllByRole('button', { name: /❎/i });
      userEvent.click(allDellButton[0]);
      const removeAllFilters = screen.getByRole('button', { name: /remove all filters/i });
      userEvent.click(removeAllFilters);
      const tatooinee = screen.getByRole('cell', { name: /tatooine/i });
      expect(tatooinee).toBeVisible();
    }, { timeout: 5000 });
  });
});
