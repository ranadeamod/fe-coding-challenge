import React from 'react';
import renderer from 'react-test-renderer';
import { Provider } from 'react-redux';
import configureStore from '../../store';
import { createBoard } from '../../store/reducers';
import { Game } from '.';

describe('<Game />', () => {
    it('matches the snapshot', () => {
        const props = {
            board: createBoard(3),
            player: null
        }
        const tree = renderer.create(<Provider store={configureStore()}><Game {...props} /></Provider>);
        expect(tree).toMatchSnapshot();
    });
})
