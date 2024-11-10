import * as PropTypes from "prop-types";
import {Component} from "react";

export class GameCell extends Component {
    render() {
        let {col, row, position, portal, enemies, gameOver} = this.props;
        return (
            <div
                className={`w-12 h-12 rounded-md flex items-center justify-center transition-colors duration-200
        ${position.x === col && position.y === row && !gameOver
                    ? 'bg-cyan-600'
                    : 'bg-gray-700 hover:bg-gray-600'}`}
            >
                {position.x === col && position.y === row && !gameOver && (
                    <div className="w-8 h-8 bg-cyan-500 rounded-full flex items-center justify-center">
                        😎
                    </div>
                )}
                {portal.x === col && portal.y === row && (
                    <div className="w-8 h-8 bg-yellow-500 rounded-full flex items-center justify-center">
                        🌀
                    </div>
                )}
                {enemies.map(enemy => (
                    enemy.x === col && enemy.y === row && (
                        <div key={enemy.id}
                             className="w-8 h-8 bg-red-600 rounded-full flex items-center justify-center animate-pulse">
                            👾
                        </div>
                    )
                ))}
            </div>
        );
    }
}

GameCell.propTypes = {
    col: PropTypes.any,
    row: PropTypes.any,
    position: PropTypes.any,
    portal: PropTypes.any,
    enemies: PropTypes.any,
    gameOver: PropTypes.any
}
