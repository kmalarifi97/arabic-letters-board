'use client';

import { useState } from 'react';

type CellState = 'default' | 'red' | 'green';

interface LetterCell {
  letter: string;
  state: CellState;
}

export default function LetterBoard() {
  // Define the 5x5 grid of Arabic letters
  const initialLetters: LetterCell[][] = [
    [
      { letter: 'ظ', state: 'default' },
      { letter: 'د', state: 'default' },
      { letter: 'ث', state: 'default' },
      { letter: 'م', state: 'default' },
      { letter: 'ر', state: 'default' },
    ],
    [
      { letter: 'ط', state: 'default' },
      { letter: 'ع', state: 'default' },
      { letter: 'س', state: 'default' },
      { letter: 'ح', state: 'default' },
      { letter: 'ج', state: 'default' },
    ],
    [
      { letter: 'ض', state: 'default' },
      { letter: 'ه', state: 'default' },
      { letter: 'ش', state: 'default' },
      { letter: 'ب', state: 'default' },
      { letter: 'خ', state: 'default' },
    ],
    [
      { letter: 'ي', state: 'default' },
      { letter: 'ك', state: 'default' },
      { letter: 'ل', state: 'default' },
      { letter: 'ز', state: 'default' },
      { letter: 'ق', state: 'default' },
    ],
    [
      { letter: 'ص', state: 'default' },
      { letter: 'و', state: 'default' },
      { letter: 'ت', state: 'default' },
      { letter: 'أ', state: 'default' },
      { letter: 'ن', state: 'default' },
    ],
  ];

  const [letters, setLetters] = useState<LetterCell[][]>(initialLetters);

  const handleLetterClick = (rowIndex: number, colIndex: number) => {
    const letter = letters[rowIndex][colIndex];
    console.log(`Clicked letter: ${letter.letter} at position [${rowIndex}, ${colIndex}]`);
  };

  const getCellColorClass = (state: CellState) => {
    switch (state) {
      case 'red':
        return 'bg-red-500 hover:bg-red-600';
      case 'green':
        return 'bg-green-500 hover:bg-green-600';
      default:
        return 'bg-white hover:bg-gray-100';
    }
  };

  return (
    <div className="flex flex-col gap-2">
      {letters.map((row, rowIndex) => (
        <div key={rowIndex} className="flex gap-2">
          {row.map((cell, colIndex) => (
            <button
              key={`${rowIndex}-${colIndex}`}
              onClick={() => handleLetterClick(rowIndex, colIndex)}
              className={`
                w-16 h-16
                flex items-center justify-center
                text-2xl font-bold
                border-2 border-gray-300
                rounded-lg
                transition-all duration-200
                cursor-pointer
                shadow-md
                ${getCellColorClass(cell.state)}
                ${cell.state === 'default' ? 'text-gray-800' : 'text-white'}
              `}
            >
              {cell.letter}
            </button>
          ))}
        </div>
      ))}
    </div>
  );
}
