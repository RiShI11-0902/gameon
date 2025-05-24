"use client"
import { rockPaperScissorsDesign } from '@/app/design/rockpaper';
import { useState } from 'react';

type Choice = 'rock' | 'paper' | 'scissors' | null;
type Player = {
    choice: Choice;
    score: number;
};
export default function RockPaper() {

    const [players, setPlayers] = useState<[Player, Player]>([
        { choice: null, score: 0 },
        { choice: null, score: 0 }
    ]);
    const [gameStatus, setGameStatus] = useState<'selecting' | 'result'>('selecting');

    const makeChoice = (playerIndex: number, choice: Choice) => {
        const newPlayers = [...players] as [Player, Player];
        newPlayers[playerIndex].choice = choice;
        setPlayers(newPlayers);

        // Check if both players have made choices
        if (newPlayers[0].choice && newPlayers[1].choice) {
            determineWinner(newPlayers);
            setGameStatus('result');
        }
    };

    const determineWinner = (currentPlayers: [Player, Player]) => {
        const [p1, p2] = currentPlayers;
        const choices = [p1.choice, p2.choice];

        if (choices[0] === choices[1]) return; // Tie

        const winningCombinations = {
            rock: 'scissors',
            paper: 'rock',
            scissors: 'paper'
        };

        if (winningCombinations[p1.choice!] === p2.choice) {
            p1.score += 1;
        } else {
            p2.score += 1;
        }
    };

    const resetGame = () => {
        setPlayers([
            { choice: null, score: players[0].score },
            { choice: null, score: players[1].score }
        ]);
        setGameStatus('selecting');
    };

    const getChoiceEmoji = (choice: Choice) => {
        switch (choice) {
            case 'rock': return '🪨';
            case 'paper': return '📄';
            case 'scissors': return '✂️';
            default: return '❔';
        }
    };

    return (
        <div className={`${rockPaperScissorsDesign.layout.mainContainer} ${rockPaperScissorsDesign.colors.background} ${rockPaperScissorsDesign.colors.text}`}>
            <h1 className="text-4xl font-bold mb-2">Rock Paper Scissors</h1>
            <div className={rockPaperScissorsDesign.layout.scoreboard}>
                Player 1: {players[0].score} | Player 2: {players[1].score}
            </div>

            <div className={rockPaperScissorsDesign.layout.playerSection}>
                {/* Player 1 Section */}
                <div className="flex flex-col items-center">
                    <div className={`${rockPaperScissorsDesign.layout.choiceDisplay} ${players[0].choice ? rockPaperScissorsDesign.elements.choices[players[0].choice].color : 'bg-gray-700'}`}>
                        {getChoiceEmoji(players[0].choice)}
                    </div>
                    <h2 className="text-xl mt-4">Player 1</h2>
                    {gameStatus === 'selecting' && !players[0].choice && (
                        <div className={rockPaperScissorsDesign.layout.controls}>
                            <button
                                onClick={() => makeChoice(0, 'rock')}
                                className={`${rockPaperScissorsDesign.elements.buttons.select} ${rockPaperScissorsDesign.colors.accent}`}
                            >
                                Rock
                            </button>
                            <button
                                onClick={() => makeChoice(0, 'paper')}
                                className={`${rockPaperScissorsDesign.elements.buttons.select} ${rockPaperScissorsDesign.colors.secondary}`}
                            >
                                Paper
                            </button>
                            <button
                                onClick={() => makeChoice(0, 'scissors')}
                                className={`${rockPaperScissorsDesign.elements.buttons.select} ${rockPaperScissorsDesign.colors.primary}`}
                            >
                                Scissors
                            </button>
                        </div>
                    )}
                </div>

                {/* Player 2 Section */}
                <div className="flex flex-col items-center">
                    <div className={`${rockPaperScissorsDesign.layout.choiceDisplay} ${players[1].choice ? rockPaperScissorsDesign.elements.choices[players[1].choice].color : 'bg-gray-700'}`}>
                        {getChoiceEmoji(players[1].choice)}
                    </div>
                    <h2 className="text-xl mt-4">Player 2</h2>
                    {gameStatus === 'selecting' && !players[1].choice && (
                        <div className={rockPaperScissorsDesign.layout.controls}>
                            <button
                                onClick={() => makeChoice(1, 'rock')}
                                className={`${rockPaperScissorsDesign.elements.buttons.select} ${rockPaperScissorsDesign.colors.accent}`}
                            >
                                Rock
                            </button>
                            <button
                                onClick={() => makeChoice(1, 'paper')}
                                className={`${rockPaperScissorsDesign.elements.buttons.select} ${rockPaperScissorsDesign.colors.secondary}`}
                            >
                                Paper
                            </button>
                            <button
                                onClick={() => makeChoice(1, 'scissors')}
                                className={`${rockPaperScissorsDesign.elements.buttons.select} ${rockPaperScissorsDesign.colors.primary}`}
                            >
                                Scissors
                            </button>
                        </div>
                    )}
                </div>
            </div>

            {gameStatus === 'result' && (
                <button
                    onClick={resetGame}
                    className={rockPaperScissorsDesign.elements.buttons.playAgain}
                >
                    Play Again
                </button>
            )}
        </div>
    )
}