export const PreviousRecords = (currentRecords) => {
    const records = currentRecords.records || [];

    records.sort((a, b) => b.level - a.level || new Date(a.date) - new Date(b.date));
    records.splice(5);

    return (
        <div className="mt-4 border border-gray-700 rounded-lg p-2">
            <h3 className="text-cyan-400 text-sm font-semibold mb-2">Records:</h3>
            <div className="space-y-2">
                {records.map((record, index) => {
                    return (
                        <div key={index} className="grid grid-cols-3 text-sm bg-gray-800 p-2 rounded">
                            <div className="text-start">
                                {record.playerName}
                                {index === 0 && <span className="text-red-400">🏆</span>}
                            </div>
                            <div>Level: {record.level}</div>
                            <div className="">{new Date(record.date).toLocaleString()}</div>
                        </div>
                    );
                })}
            </div>
        </div>
    );
};