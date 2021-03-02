import React from 'react';
import { fireEvent, getByText, render } from '@testing-library/react';
import { Provider } from 'react-redux';
import configureStore from '../../store';
import { board, createBoard } from '../../store/reducers';
import { Cell } from '.';
import * as Actions from '../../store/actions/moves';

describe('<Game />', () => {
    it('triggers makeSelection', () => {
        const props = {
            cell: 'X',
            player: 'X',
            rowIndex: 0,
            cellIndex: 0
        };
        const {container, unmount} = render(<Provider store={configureStore()}><Cell {...props} /></Provider>);
        const cell = getByText(container, /X/i);
        fireEvent.click(cell);
        const state = createBoard(3)
        const result = board(state, Actions.selectCell('X', 0, 0))
        state[0][0] = 'X';
        expect(result).toEqual(state);
        unmount();
    });
})
