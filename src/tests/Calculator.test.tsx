import React from 'react';  // Reactのインポートが必要
import { render, fireEvent } from '@testing-library/react';
import Calculator from '../components/Calculator';

test('足し算のテスト', () => {
  const { getByText, getByRole } = render(<Calculator />);

  fireEvent.click(getByText('1'));
  fireEvent.click(getByText('+'));
  fireEvent.click(getByText('2'));
  fireEvent.click(getByText('='));

  expect(getByRole('textbox')).toHaveValue('3');
});

test('平方根計算のテスト', () => {
  const { getByText, getByRole } = render(<Calculator />);

  fireEvent.click(getByText('√'));
  fireEvent.click(getByText('9'));
  fireEvent.click(getByText('='));

  expect(getByRole('textbox')).toHaveValue('3');
});
