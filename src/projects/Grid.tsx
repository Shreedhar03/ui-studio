import React, { useEffect, useState } from "react";

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
  const [allSelected, setAllSelected] = useState<boolean>(false);

  const handleClick = (i: number, j: number) => {
    console.log(i, j);
    const newGrid = [...selectedCells];
    newGrid[i][j] = 1;
    setSelectedCells(newGrid);
  };

  useEffect(() => {
    // de select all cells if all cells are selected
    let flag = true;
    for (let i = 0; i < grid.length; i++) {
      for (let j = 0; j < grid[i].length; j++) {
        if (grid[i][j] === 1 && selectedCells[i][j] === 0) {
          flag = false;
          break;
        }
      }
    }

    setAllSelected(flag);

    console.log(selectedCells);
  }, [selectedCells]);

  useEffect(() => {
    if (allSelected) {
      setSelectedCells(gridEmpty);
      console.log(`All selected: ${allSelected}`);
      //   console.log("Selected cells: ", selectedCells);
      setAllSelected(false);
    }
  }, [allSelected]);

  return (
    <div className="flex flex-col gap-3 mt-8">
      {grid.map((_, i) => {
        return (
          <div className="flex gap-3" key={i}>
            {grid.map((_, j) => {
              return (
                <button
                  disabled={grid[i][j] === 0}
                  onClick={() => handleClick(i, j)}
                  className={`w-10 h-10 rounded-md
                    ${grid[i][j] === 0 && "bg-white border border-gray-200"}
                    ${
                      selectedCells[i][j] === 1 ? "bg-green-600" : "bg-gray-200"
                    }`}
                  key={j}
                ></button>
              );
            })}
          </div>
        );
      })}
    </div>
  );
};

export default Grid;
