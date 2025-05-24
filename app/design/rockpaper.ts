export interface GameDesign {
  layout: {
    mainContainer: string;
    playerSection: string;
    choiceDisplay: string;
    controls: string;
    scoreboard: string;
  };
  colors: {
    primary: string;
    secondary: string;
    accent: string;
    background: string;
    text: string;
  };
  elements: {
    choices: {
      rock: { emoji: string; color: string };
      paper: { emoji: string; color: string };
      scissors: { emoji: string; color: string };
    };
    buttons: {
      select: string;
      playAgain: string;
    };
  };
  animations: string[];
}

export const rockPaperScissorsDesign: GameDesign = {
  layout: {
    mainContainer: "flex flex-col items-center justify-center min-h-screen p-4",
    playerSection: "flex justify-between w-full max-w-4xl gap-8",
    choiceDisplay: "flex flex-col items-center justify-center h-64 w-64 rounded-full text-8xl",
    controls: "flex gap-4 mt-8",
    scoreboard: "text-2xl font-bold mb-8"
  },
  colors: {
    primary: "bg-indigo-600",
    secondary: "bg-pink-500",
    accent: "bg-amber-400",
    background: "bg-gradient-to-br from-gray-900 to-gray-800",
    text: "text-white"
  },
  elements: {
    choices: {
      rock: { emoji: "🪨", color: "bg-amber-700" },
      paper: { emoji: "📄", color: "bg-blue-100 text-gray-800" },
      scissors: { emoji: "✂️", color: "bg-gray-300 text-gray-800" }
    },
    buttons: {
      select: "py-3 px-6 rounded-full text-lg font-semibold transition-all hover:scale-105",
      playAgain: "py-3 px-6 rounded-full bg-green-500 text-white text-lg font-semibold mt-8 hover:bg-green-600"
    }
  },
  animations: [
    "choice-selection: pulse 0.5s ease-in-out",
    "win-highlight: bounce 1s ease-in-out",
    "fade-in: fadeIn 0.5s ease-in"
  ]
};