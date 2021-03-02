import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { selectCell } from '../../store/actions/moves';
import { selectGame } from '../board';

import './index.css';

export const Cell = (props) => {
    const { cell, player, rowIndex, cellIndex } = props;
    const dispatch = useDispatch();
    const game = useSelector(selectGame);
    const makeSelection = () => {
        if (cell || game.winner) return;

        dispatch(selectCell(player, rowIndex, cellIndex));
    }
    return (
        <div className={'Game-Grid-Cell' + (game.winner ? ' no-selection-allowed' : '')} onClick={makeSelection}>
            <span className={cell ? 'selected' : 'unselected'}>{cell ? cell : '?'}</span>
        </div>
    )
}
