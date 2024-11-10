export const EnemyList = ({ enemies }) => {
    return (
        <div className="mt-4 border border-gray-700 rounded-lg p-2">
            <h3 className="text-cyan-400 text-sm font-semibold mb-2">Active Enemies:</h3>
            <div className="space-y-2">
                {enemies.map(enemy => (
                    <div
                        key={enemy.id}
                        className="flex items-center justify-between text-sm bg-gray-800 p-2 rounded"
                    >
                        <div className="grid grid-cols-5 gap-2">
                            <span className="text-red-400">👾</span>
                            <span>ID: {String(enemy.id).slice(-4)}</span>
                            <span className="text-gray-500 ml-2">pos: ({enemy.x}, {enemy.y})</span>
                            <span className={`${enemy.interval <= 300 ? 'text-red-400' : 'text-green-400'}`}>{(enemy.interval * 16 / 1000).toFixed(1)}s</span>
                            <span className={`${enemy.currentInterval <= 300 ? 'text-red-400' : 'text-green-400'}`}>{(enemy.currentInterval * 16 / 1000).toFixed(1)}s</span>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};
