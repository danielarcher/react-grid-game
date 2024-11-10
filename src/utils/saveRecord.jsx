
export const saveRecord = (playerName, level) => {
    if (!playerName) {
        throw new Error('Player name is required');
    }

    try {
        // Get existing records from localStorage
        const existingRecords = JSON.parse(localStorage.getItem('gameRecords') || '[]');

        // Create new record
        const newRecord = {
            playerName: playerName,
            level: level,
            date: new Date().toISOString(),
        };

        // Save updated records
        localStorage.setItem('gameRecords', JSON.stringify([...existingRecords, newRecord]));

        return newRecord;
    } catch (error) {
        console.error('Error saving record:', error);
        throw new Error('Failed to save record');
    }
};

export const getRecords = () => {
    try {
        return JSON.parse(localStorage.getItem('gameRecords') || '[]');
    } catch (error) {
        console.error('Error getting records:', error);
        return [];
    }
};