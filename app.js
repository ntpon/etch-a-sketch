let COLOR_DIV = 'black';
let IS_RANDOM_COLOR = false;

function createGridItem(num) {
  const container = document.getElementById('grid-container');
  const txtSize = document.getElementById('txt-size');
  container.style.gridTemplateColumns = `repeat(${num}, auto)`;
  txtSize.textContent = `${num} x ${num}`;
  container.innerHTML = '';
  for (let i = 1; i <= num * num; i++) {
    const div = document.createElement('div');
    div.className = 'grid-item';
    div.onmouseover = function () {
      const color = getColor();
      div.style.background = color;
      div.style.borderColor = color;
    };
    container.append(div);
  }
}
function getColor() {
  if (IS_RANDOM_COLOR)
    return '#' + (((1 << 24) * Math.random()) | 0).toString(16);
  return COLOR_DIV;
}

function changeSize() {
  let size;
  do {
    size = Number(
      prompt('Please enter a new size for the square (number > 0)')
    );
  } while (isNaN(size) || size <= 0 || parseInt(size) !== size);

  createGridItem(size);
}

function setUp() {
  const btnResize = document.getElementById('btn-resize');
  const btnReset = document.getElementById('btn-reset');
  const btnRandomColor = document.getElementById('btn-random-color');
  const btnColorBlack = document.getElementById('btn-color-black');

  btnResize.addEventListener('click', () => {
    changeSize();
  });

  btnReset.addEventListener('click', () => {
    createGridItem(16);
  });

  btnRandomColor.addEventListener('click', () => {
    IS_RANDOM_COLOR = true;
  });
  btnColorBlack.addEventListener('click', () => {
    IS_RANDOM_COLOR = false;
  });
  createGridItem(16);
}

setUp();
