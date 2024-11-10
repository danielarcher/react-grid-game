import React from 'react';
import {
    Dialog,
    DialogContent,
    DialogDescription,
    DialogFooter,
    DialogHeader,
    DialogTitle,
} from "@/components/ui/dialog";
import {Input} from "@/components/ui/input";
import {Button} from "@/components/ui/button";
import * as PropTypes from "prop-types";
import {saveRecord} from "@/utils/saveRecord.jsx";

function GameOverModal(props) {
    let {isOpen, onClose, onSave, level} = props;
    let [playerName, setPlayerName] = React.useState('');

    const handleSave = () => {
        try {
            const newRecord = saveRecord(playerName, level);
            onSave(newRecord);
            setPlayerName('');
            onClose();
        } catch (error) {
            console.error('Error in handleSave:', error);
            // You might want to show an error message to the user here
        }
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        handleSave();
    }

    return (
        <Dialog open={isOpen} onOpenChange={onClose}>
            <DialogContent className="sm:max-w-md">
                <form onSubmit={handleSubmit}>
                    <DialogHeader>
                        <DialogTitle>Game Over!</DialogTitle>
                        <DialogDescription>
                            You reached level {level}! Enter your name to save your score.
                        </DialogDescription>
                    </DialogHeader>

                    <div className="flex flex-col gap-4 py-4">
                        <Input
                            placeholder="Enter your name"
                            value={playerName}
                            onChange={(e) => setPlayerName(e.target.value)}
                            className="col-span-3"
                        />
                    </div>

                    <DialogFooter>
                        <Button type="button" variant="secondary" onClick={onClose}>
                            Skip
                        </Button>
                        <Button type="submit">
                            Save Score
                        </Button>
                    </DialogFooter>
                </form>
            </DialogContent>
        </Dialog>
);
}

GameOverModal.propTypes = {
    isOpen: PropTypes.any,
    onClose: PropTypes.any,
    onSave: PropTypes.any,
    level: PropTypes.any
}

export default GameOverModal;