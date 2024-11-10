import PropTypes from "prop-types";

export const PreviousRecords = ({ records: currentRecords, isLoading, error }) => {
    if (isLoading) {
        return (
            <div className="mt-4 border border-gray-700 rounded-lg p-2">
                <h3 className="text-cyan-400 text-sm font-semibold mb-2">Records:</h3>
                <div className="text-gray-400 text-sm p-2">Loading records...</div>
            </div>
        );
    }

    if (error) {
        return (
            <div className="mt-4 border border-gray-700 rounded-lg p-2">
                <h3 className="text-cyan-400 text-sm font-semibold mb-2">Records:</h3>
                <div className="text-red-400 text-sm p-2">Failed to load records</div>
            </div>
        );
    }

    const records = currentRecords || [];

    if (!records.length) {
        return (
            <div className="mt-4 border border-gray-700 rounded-lg p-2">
                <h3 className="text-cyan-400 text-sm font-semibold mb-2">Records:</h3>
                <div className="text-gray-400 text-sm p-2">No records yet</div>
            </div>
        );
    }

    // Sort records by level (descending) and date
    const sortedRecords = [...records]
        .sort((a, b) => b.level - a.level || new Date(a.date) - new Date(b.date))
        .slice(0, 5); // Keep top 5 records

    return (
        <div className="mt-4 border border-gray-700 rounded-lg p-2">
            <h3 className="text-cyan-400 text-sm font-semibold mb-2">Records:</h3>
            <div className="space-y-2">
                {sortedRecords.map((record, index) => {
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

PreviousRecords.propTypes = {
    records: PropTypes.array,
    isLoading: PropTypes.bool,
    error: PropTypes.string
};