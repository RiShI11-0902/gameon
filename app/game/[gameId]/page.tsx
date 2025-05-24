"use client"
import { useParams } from 'next/navigation';
import dynamic from 'next/dynamic';
import React from 'react';

// Lazy load each game component
const RockPaperGame = dynamic(() => import('@/components/game-components/rock-paper'));
// const TicTacToeGame = dynamic(() => import('@/components/TicTacToeGame'));

// Define a mapping from gameId to component
const gameMap: Record<string, React.ReactNode> = {
    'rock-paper': <RockPaperGame />,
    //   'tic-tac-toe': <TicTacToeGame />,
};

const GamePage: React.FC = () => {
    const params = useParams();
    const gameId = params?.gameId as string;


    if (typeof gameId !== 'string') return <div>Loading...</div>;

    const GameComponent = gameMap[gameId];

    return (
        <div className="p-4">
            {GameComponent ? GameComponent : <p>Game not found: {gameId}</p>}
        </div>
    );
};

export default GamePage;
