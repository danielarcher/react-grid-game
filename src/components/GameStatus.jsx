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
            <div className="flex justify-center">
                <div>Level: {level}</div>
            </div>
            <div className="grid lg:grid-cols-3 gap-4">
                <EnemyList enemies={enemies} />
                <PreviousRecords
                    records={records}
                    isLoading={isLoading}
                    error={error}
                />
                <Rules />
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