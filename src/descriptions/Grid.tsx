const Grid = () => {
  return (
    <>
      <p className="text-lg">
        1. You are given a grid of size 3x3.
        <br />
        2. The grid is initially filled with 0s and 1s.
        <br />
        3. The cell with 1 is clickable, and the cell with 0 is not clickable.
        <br />
        4. When you click on a cell, the cell will turn green.
        <br />
        5. You have to click on all the cells with 1.
        <br />
        6. When you click on all the cells with 1, all the cells will turn
        green.
        <br />
        7. Once all the cells are green, the grid should reset.
      </p>

      <h1 className="text-xl font-semibold my-3">Miscellaneous</h1>
      <p className="text-lg">
        The grid should reset in the order of the cells clicked.
      </p>
    </>
  );
};

export default Grid;
