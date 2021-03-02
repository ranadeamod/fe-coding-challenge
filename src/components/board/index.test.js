import React from 'react';
import { fireEvent, getByText, render, screen } from '@testing-library/react';
import { Board } from '.';
import configureStore from '../../store';
import { Provider } from 'react-redux';
import { board, createBoard } from '../../store/reducers';

const initialState = {
  board: [
    ['X', null, null],
    ['X', null, null],
    ['X', null, null]
  ],
  game: {currentPlayer: 'X', winner: 'X'}
};

describe('<Board />', () => {
  it('Renders the Board component', () => {
    const {unmount} = render(<Provider store={configureStore()}><Board /></Provider>);
    const dealText = screen.getByText(/Deal/i);
    expect(dealText).toBeInTheDocument();
    unmount();
  });

  it('Shows the winner', () => {
    const {container, unmount} = render(<Provider store={configureStore(initialState)}><Board /></Provider>);
    const button = getByText(container, "Restart");
    fireEvent.click(button);
    const expectedResult = createBoard(3);
    const result = board(undefined, {});
    expect(result).toEqual(expectedResult);
    unmount();
  });
})
/*
test('renders Board text', () => {
  render(<Provider store={configureStore()}><Board /></Provider>);
  const boardText = screen.getByText(/Board/i);
  expect(boardText).toBeInTheDocument();
});*/
