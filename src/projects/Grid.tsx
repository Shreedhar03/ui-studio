import { useEffect, useState } from "react";

const grid: number[][] = [
  [1, 1, 1],
  [0, 0, 1],
  [0, 1, 1],
];
const gridEmpty: number[][] = [
  [0, 0, 0],
  [0, 0, 0],
  [0, 0, 0],
];

const Grid = () => {
  //   maintain a stack of selected cells
  const [selectedCells, setSelectedCells] = useState<number[][]>(gridEmpty);
  const [ones, setOnes] = useState<number>(0);
  const [selectedOnes, setSelectedOnes] = useState<number>(0);

  const handleClick = (i: number, j: number) => {
    setSelectedOnes((prev) => prev + 1);
    console.log(i, j);
    const newGrid = selectedCells.map((row, rowIndex) =>
      row.map((cell, colIndex) => (rowIndex === i && colIndex === j ? 1 : cell))
    );

    setSelectedCells(newGrid);
  };

  useEffect(() => {
    // reset the selected cells when ones are equal to selected ones
    if (ones === selectedOnes) {
      setTimeout(() => {
        setSelectedCells(gridEmpty);
      }, 300);
      setSelectedOnes(0);
    }
  }, [selectedOnes]);

  // const handleReset = () => {
  //   const newGrid = [...gridEmpty];
  //   setSelectedCells(newGrid);
  //   setSelectedOnes(0);
  // };

  useEffect(() => {
    // calculate no. of 1s in the grid
    let count = 0;
    grid.forEach((row) => {
      row.forEach((cell) => {
        if (cell === 1) count++;
      });
    });
    setOnes(count);
    console.log(count);
  }, []);

  return (
    <>
      {/* <button
        onClick={handleReset}
        className="text-red-700 underline mb-5 text-lg bg-red-700/20 px-3 py-1 rounded-md hover:bg-red-700/30 transition-all"
      >
        Reset
      </button> */}
      <div className="flex flex-col gap-3">
        {selectedCells.map((row, i) => (
          <div className="flex gap-3" key={i}>
            {row.map((_, j) => (
              <button
                disabled={grid[i][j] === 0 || selectedCells[i][j] === 1}
                onClick={() => handleClick(i, j)}
                className={`w-14 h-14 rounded-md transition-all
                  ${
                    grid[i][j] === 0 &&
                    "bg-gray-300 border-none cursor-not-allowed"
                  }
                  ${
                    selectedCells[i][j] === 1
                      ? "bg-green-600"
                      : "border border-gray-800"
                  }`}
                key={j}
              ></button>
            ))}
          </div>
        ))}
      </div>
    </>
  );
};

export default Grid;
