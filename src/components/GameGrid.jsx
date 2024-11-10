import { GameCell } from './GameCell';
import { GRID_SIZE, PORTAL_POSITION } from '../constants/gameConfig';
import * as PropTypes from "prop-types";
import {Component} from "react";

export class GameGrid extends Component {
    render() {
        let {position, enemies, gameOver} = this.props;
        return (
            <div className="grid grid-cols-8 gap-1 bg-gray-800 p-2 rounded-lg shadow-lg">
                {[...Array(GRID_SIZE)].map((_, row) => (
                    [...Array(GRID_SIZE)].map((_, col) => (
                        <GameCell
                            key={`${row}-${col}`}
                            col={col}
                            row={row}
                            position={position}
                            portal={PORTAL_POSITION}
                            enemies={enemies}
                            gameOver={gameOver}
                        />
                    ))
                ))}
            </div>
        );
    }
}

GameGrid.propTypes = {
    position: PropTypes.any,
    enemies: PropTypes.any,
    gameOver: PropTypes.any
}