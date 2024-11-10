import { EnemyList } from './EnemyList.jsx';
import * as PropTypes from "prop-types";
import {Component} from "react";
import {PreviousRecords} from "@/components/PreviousRecords.jsx";
import {getRecords} from "@/utils/saveRecord.jsx";
import {Rules} from "@/components/Rules.jsx";

export class GameStatus extends Component {
    render() {
        let {level, enemies} = this.props;
        return (
            <div className="mt-4 text-gray-400 font-mono space-y-2">
                <div className="flex justify-center">
                    <div>Level: {level}</div>
                </div>
                <div className="grid lg:grid-cols-3 gap-4">
                    <EnemyList enemies={enemies}/>
                    <PreviousRecords records={getRecords()}/>
                    <Rules />
                </div>
            </div>
        );
    }
}

GameStatus.propTypes = {
    gameOver: PropTypes.any,
    resetGame: PropTypes.any,
    position: PropTypes.any,
    level: PropTypes.any,
    enemies: PropTypes.any
}