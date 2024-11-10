import {Enemy} from "../model/Enemy.jsx";

export const createEnemy = (level, position, portal) => {
    return new Enemy(level, position, portal);
};