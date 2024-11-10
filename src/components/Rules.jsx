import {Component} from "react";

export class Rules extends Component {
    render() {
        return (
            <div className="mt-4 border border-gray-700 rounded-lg p-2">
                <h3 className="text-cyan-400 text-sm font-semibold mb-2">Game Rules:</h3>
                <div className="space-y-2">
                    <div className="text-sm bg-gray-800 p-2 rounded">
                        <div>🏆 Beat the high score!</div>
                    </div>
                    <div className="text-sm bg-gray-800 p-2 rounded">
                        <div>👾 If you collide with an enemy, you lose!</div>
                    </div>
                    <div className="text-sm bg-gray-800 p-2 rounded">
                        <div>🌀 Reach the portal to advance to the next level!</div>
                    </div>
                    <div className="text-sm bg-gray-800 p-2 rounded">
                        <div>🚀 Each level, a new enemy is added! Faster and faster!</div>
                    </div>
                    {/*enemies never touch the start location*/}
                    <div className="text-sm bg-gray-800 p-2 rounded">
                        <div>🚫 Enemies will never spawn/move to your starting location!</div>
                    </div>
                </div>
            </div>
        )
    }
}