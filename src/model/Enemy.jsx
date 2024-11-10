import {
    GRID_SIZE,
    MIN_INTERVAL,
    MAX_INTERVAL,
    INTERVAL_DECREASE_PER_LEVEL,
    SAFE_SPAWN_DISTANCE
} from '../constants/gameConfig';

export class Enemy {
    constructor(level, position, portal) {
        const spawnPosition = this.calculateSpawnPosition(position, portal);
        const interval = this.calculateInterval(level);

        this.id = Date.now();
        this.x = spawnPosition.x;
        this.y = spawnPosition.y;
        this.interval = interval;
        this.currentInterval = 0;
        this.direction = Math.random() < 0.5 ? 'horizontal' : 'vertical';
        this.level = level;
    }

    calculateSpawnPosition(playerPos, portal) {
        let newX, newY;
        let validPosition = false;

        while (!validPosition) {
            newX = Math.floor(Math.random() * GRID_SIZE);
            newY = Math.floor(Math.random() * GRID_SIZE);

            const distanceFromStart = this.calculateDistance(
                newX,
                newY,
                playerPos.x,
                playerPos.y
            );

            validPosition =
                (newX !== portal.x || newY !== portal.y) && // Not on portal
                (newX !== playerPos.x || newY !== playerPos.y) && // Not on player
                (newX !== 0 || newY !== 0) && // Not on initial position
                distanceFromStart >= SAFE_SPAWN_DISTANCE; // Not too close to start
        }

        return { x: newX, y: newY };
    }

    calculateDistance(x1, y1, x2, y2) {
        return Math.sqrt(Math.pow(x2 - x1, 2) + Math.pow(y2 - y1, 2));
    }

    calculateInterval(level) {
        let interval = MAX_INTERVAL - (level * INTERVAL_DECREASE_PER_LEVEL);
        interval = Math.max(MIN_INTERVAL, interval);
        interval = Math.min(MAX_INTERVAL, interval);

        const randomVariation = Math.floor(Math.random() * 200) - 100;
        return Math.max(MIN_INTERVAL, Math.min(MAX_INTERVAL, interval + randomVariation)) / 16;
    }

    move() {
        // Randomly change direction
        this.currentInterval++;
        if (this.currentInterval < this.interval) {
            return;
        }
        this.currentInterval = 0;
        this.direction = Math.random() < 0.5 ? 'horizontal' : 'vertical';

        //get new position
        const newPosition = this.newPosition();
        this.x = newPosition.x;
        this.y = newPosition.y;
    }
    newPosition() {
        let newX = this.x;
        let newY = this.y;

        if (this.direction === 'horizontal') {
            newX = this.x + (Math.random() < 0.5 ? -1 : 1);
            newX = Math.max(0, Math.min(GRID_SIZE - 1, newX));
        } else {
            newY = this.y + (Math.random() < 0.5 ? -1 : 1);
            newY = Math.max(0, Math.min(GRID_SIZE - 1, newY));
        }

        if (newX === 0 && newY === 0) {
            return this.newPosition();
        }

        return { x: newX, y: newY };
    }

    isCollidingWith(position) {
        return this.x === position.x && this.y === position.y;
    }

    getPosition() {
        return { x: this.x, y: this.y };
    }
}