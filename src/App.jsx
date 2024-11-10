
import React from 'react';
import { useGameState } from './hooks/useGameState';
import { useEnemyMovement } from './hooks/useEnemyMovement';
import { usePlayerMovement } from './hooks/usePlayerMovement';
import { GameGrid } from './components/GameGrid';
import { GameStatus } from './components/GameStatus';
import { PORTAL_POSITION, INITIAL_POSITION } from './constants/gameConfig';
import { createEnemy } from './utils/enemyUtils';
import GameOverModal from "@/components/GameOverModal.jsx";
// import GameOverModal from "./GameOverModal.jsx";

const GridGame = () => {
    const {
        level,
        setLevel,
        position,
        setPosition,
        enemies,
        setEnemies,
        gameOver,
        setGameOver,
        resetGame,
    } = useGameState();
    const [showModal, setShowModal] = React.useState(false);

    useEnemyMovement(enemies, setEnemies, gameOver);

    usePlayerMovement(gameOver, setPosition);

    const addEnemy = React.useCallback(() => {
        const newEnemy = createEnemy(level, position, PORTAL_POSITION);
        setEnemies(prevEnemies => [...prevEnemies, newEnemy]);
    }, [level, position, setEnemies]);

    // Add this new handler
    const handleSaveRecord = (record) => {

        resetGame();
    };
    const nextLevel = React.useCallback(() => {
        setPosition(INITIAL_POSITION);
        addEnemy();
        setLevel(prevLevel => prevLevel + 1);
    }, [setPosition, addEnemy, setLevel]);

    // Check for collisions and portal
    React.useEffect(() => {
        const hasCollision = enemies.some(enemy =>
            enemy.x === position.x && enemy.y === position.y
        );

        if (position.x === PORTAL_POSITION.x && position.y === PORTAL_POSITION.y) {
            nextLevel();
        }
        if (hasCollision) {
            setGameOver(true);
            setShowModal(true);
        }
    }, [position, enemies, setGameOver, nextLevel, setShowModal]);

    return (
        <div className="flex flex-col items-center gap-4 p-4 min-h-screen bg-gray-900 text-gray-100">
            <h1 className="text-2xl font-bold text-cyan-400">Grid Game</h1>
            <p className="text-gray-400">Use arrow keys to move</p>

            <GameGrid
                position={position}
                enemies={enemies}
                gameOver={gameOver}
            />

            <GameStatus
                gameOver={gameOver}
                resetGame={resetGame}
                position={position}
                level={level}
                enemies={enemies}
            />


            <GameOverModal
                isOpen={showModal}
                onClose={() => {
                    setShowModal(false);
                    resetGame();
                }}
                onSave={handleSaveRecord}
                level={level}
            />
        </div>
    );
};

export default GridGame;