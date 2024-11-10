import {useState} from "react";
import { INITIAL_POSITION} from "../constants/gameConfig.jsx";

export const useGameState = () => {
    const [level, setLevel] = useState(1);
    const [position, setPosition] = useState(INITIAL_POSITION);
    const [enemies, setEnemies] = useState([]);
    const [gameOver, setGameOver] = useState(false);

    const resetGame = () => {
        setPosition(INITIAL_POSITION);
        setEnemies([]);
        setGameOver(false);
        setLevel(1);
    };

    return {
        level,
        setLevel,
        position,
        setPosition,
        enemies,
        setEnemies,
        gameOver,
        setGameOver,
        resetGame,
    };
};
