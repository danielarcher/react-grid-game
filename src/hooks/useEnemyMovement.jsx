import { useEffect } from 'react';

export const useEnemyMovement = (enemies, setEnemies, gameOver) => {
    useEffect(() => {
        if (gameOver) return;
        const interval = setInterval(() => {
            setEnemies(prevEnemies => {
                return prevEnemies.map(e => {
                    e.move();
                    return e;
                });
            });
        }, 16);

        return () => clearInterval(interval);
    }, [enemies, setEnemies, gameOver]);
};