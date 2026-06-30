const canvas = document.getElementById('canvas');
canvas.width = 400;
canvas.height = 400;

let game = {
  snake: [{ x: 10, y: 10 }],
  food: { x: 15, y: 15 },
  score: 0,
  alive: true
};

function placeFood() {
  game.food = {
    x: Math.floor(Math.random() * 20),
    y: Math.floor(Math.random() * 20)
  };
}

function update() {
  if (!game.alive) return;
  const dir = getDirection();
  const head = { x: game.snake[0].x + dir.x, y: game.snake[0].y + dir.y };

  if (head.x < 0 || head.x >= 20 || head.y < 0 || head.y >= 20 ||
      game.snake.some(p => p.x === head.x && p.y === head.y)) {
    game.alive = false;
    alert('Game Over! Score: ' + game.score);
    return;
  }

  game.snake.unshift(head);
  if (head.x === game.food.x && head.y === game.food.y) {
    game.score++;
    placeFood();
  } else {
    game.snake.pop();
  }
}

function loop() {
  update();
  draw(game);
  if (game.alive) setTimeout(loop, 150);
}

loop();
