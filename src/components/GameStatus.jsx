import { useEffect, useState } from 'react';
import { EnemyList } from './EnemyList.jsx';
import * as PropTypes from "prop-types";
import { PreviousRecords } from "@/components/PreviousRecords.jsx";
import { getRecords } from "@/utils/saveRecord.jsx";
import { Rules } from "@/components/Rules.jsx";

export function GameStatus({ level, enemies }) {
    const [records, setRecords] = useState([]);
    const [isLoading, setIsLoading] = useState(true);
    const [error, setError] = useState(null);
    const [refreshTrigger, setRefreshTrigger] = useState(0);

    const refreshRecords = () => {
        setRefreshTrigger(prev => prev + 1);
    };

    useEffect(() => {
        const fetchRecords = async () => {
            try {
                const fetchedRecords = await getRecords();
                setRecords(fetchedRecords);
                setIsLoading(false);
            } catch (error) {
                console.error('Failed to get records:', error);
                setError('Failed to load records');
                setIsLoading(false);
            }
        };

        fetchRecords().then(r => console.log('Records fetched:', r));
    }, [refreshTrigger]);

    useEffect(() => {
        if (window.refreshGameRecords) {
            console.log('Refreshing records...');
        }
        window.refreshGameRecords = refreshRecords;
        return () => {
            delete window.refreshGameRecords;
        }
    }, []);

    return (
        <div className="mt-4 text-gray-400 font-mono space-y-2">
            <div className="flex justify-center gap-4 items-center">
                <div>Level: {level}</div>
                <a className="px-2 shadow shadow-black text-sm flex gap-2 items-center py-1 rounded bg-gray-800 hover:bg-gray-700 duration-200 transition-all" href="https://github.com/danielarcher/react-grid-game" target="_blank" rel="noreferrer">
                    <svg className="w-6" viewBox="0 0 48 48" xmlns="http://www.w3.org/2000/svg" fill="currentColor"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"> <title>github</title> <g id="Layer_2" data-name="Layer 2"> <g id="invisible_box" data-name="invisible box"> <rect width="48" height="48" fill="none"></rect> <rect width="48" height="48" fill="none"></rect> </g> <g id="icons_Q2" data-name="icons Q2"> <path d="M24,1.9a21.6,21.6,0,0,0-6.8,42.2c1,.2,1.8-.9,1.8-1.8V39.4c-6,1.3-7.9-2.9-7.9-2.9a6.5,6.5,0,0,0-2.2-3.2C6.9,31.9,9,32,9,32a4.3,4.3,0,0,1,3.3,2c1.7,2.9,5.5,2.6,6.7,2.1a5.4,5.4,0,0,1,.5-2.9C12.7,32,9,28,9,22.6A10.7,10.7,0,0,1,11.9,15a6.2,6.2,0,0,1,.3-6.4,8.9,8.9,0,0,1,6.4,2.9,15.1,15.1,0,0,1,5.4-.8,17.1,17.1,0,0,1,5.4.7,9,9,0,0,1,6.4-2.8,6.5,6.5,0,0,1,.4,6.4A10.7,10.7,0,0,1,39,22.6C39,28,35.3,32,28.5,33.2a5.4,5.4,0,0,1,.5,2.9v6.2a1.8,1.8,0,0,0,1.9,1.8A21.7,21.7,0,0,0,24,1.9Z"></path> </g> </g> </g></svg>
                    Check on Github
                </a>
            </div>
            <div className="grid lg:grid-cols-3 gap-4">
                <EnemyList enemies={enemies}/>
                <PreviousRecords
                    records={records}
                    isLoading={isLoading}
                    error={error}
                />
                <Rules/>
            </div>
        </div>
    );
}

GameStatus.propTypes = {
    gameOver: PropTypes.any,
    resetGame: PropTypes.any,
    position: PropTypes.any,
    level: PropTypes.number,
    enemies: PropTypes.array
};