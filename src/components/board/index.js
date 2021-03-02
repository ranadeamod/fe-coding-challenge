import React, {useEffect, useState} from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { declareWinner, restartGame } from '../../store/actions/moves';
import { fetchWonPlayer } from '../../helpers/FetchWonPlayer';
import { Game } from '../game';

import './index.css';

const selectBoard = (state) => state.board;
export const selectGame = (state) => state.game;

export const Board = () => {
    const board = useSelector(selectBoard);
    const game = useSelector(selectGame);
    const dispatch = useDispatch();
    const [isDraw, setIsDraw] = useState(false);

    const onRestartGame = () => {
        dispatch(restartGame());
    }

    useEffect(() => {
        if (game.winner === null) {
            const winner = fetchWonPlayer(board);
            if (winner) {
                dispatch(declareWinner(winner));
            } else {
                if (board.flat().filter(val => val === null).length < 1) {
                    setIsDraw(true);
                }
            }
        }
    });

    return (
        <div className="Board">
            <div className="Board-Header">
                <div>Deal:</div>
                <div className="Board-Player-Container">
                    <div className={'Board-Player' + (game.winner === null && game.currentPlayer === 'X' ? ' Dealing' : '')}>X</div>
                    <div className={'Board-Player' + (game.winner === null && game.currentPlayer === 'O' ? ' Dealing' : '')}>O</div>
                </div>
            </div>

            <Game board={board} player={game.currentPlayer} />

            {
                game.winner !== null &&
                <div className="Board-Winner">
                    Player <strong>{game.winner}</strong> wins the game!
                    <button onClick={onRestartGame}>Restart</button>
                </div>
            }

            {
                isDraw &&
                <div className="Board-Draw">
                    Its a draw
                    <button onClick={onRestartGame}>Restart</button>
                </div>
            }
        </div>
    )
}
