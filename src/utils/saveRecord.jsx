import { collection, addDoc, getDocs, query, orderBy, limit } from 'firebase/firestore';
import { database } from './firebase';

export const saveRecord = async (playerName, level) => {
    if (!playerName) {
        throw new Error('Player name is required');
    }

    try {
        const newRecord = {
            playerName: playerName,
            level: level,
            date: new Date().toISOString()
        };

        await addDoc(collection(database, 'gameRecords'), newRecord);
        return newRecord;
    } catch (error) {
        console.error('Error saving record:', error);
        throw new Error('Failed to save record');
    }
};

export const getRecords = async () => {
    try {
        console.log('Getting records...');
        const recordsRef = collection(database, 'gameRecords');
        const q = query(recordsRef, orderBy('level', 'desc'), limit(5));
        const snapshot = await getDocs(q);

        return snapshot.docs.map(doc => doc.data());
    } catch (error) {
        console.error('Error getting records:', error);
        return [];
    }
};