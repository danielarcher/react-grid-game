import { useEffect } from 'react';
import { GRID_SIZE } from '../constants/gameConfig';

export const usePlayerMovement = (gameOver, setPosition) => {
    useEffect(() => {
        const handleKeyDown = (e) => {
            if (gameOver) return;

            e.preventDefault();

            setPosition((prev) => {
                const newPos = { ...prev };

                switch (e.key) {
                    case 'ArrowUp':
                        newPos.y = Math.max(0, prev.y - 1);
                        break;
                    case 'ArrowDown':
                        newPos.y = Math.min(GRID_SIZE - 1, prev.y + 1);
                        break;
                    case 'ArrowLeft':
                        newPos.x = Math.max(0, prev.x - 1);
                        break;
                    case 'ArrowRight':
                        newPos.x = Math.min(GRID_SIZE - 1, prev.x + 1);
                        break;
                    default:
                        return prev;
                }

                return newPos;
            });
        };

        window.addEventListener('keydown', handleKeyDown);
        return () => window.removeEventListener('keydown', handleKeyDown);
    }, [gameOver, setPosition]);
};