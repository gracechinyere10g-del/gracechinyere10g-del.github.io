let direction = { x: 1, y: 0 };

document.addEventListener('keydown', e => {
  if (e.key === 'ArrowUp' || e.key === 'w') direction = { x: 0, y: -1 };
  if (e.key === 'ArrowDown' || e.key === 's') direction = { x: 0, y: 1 };
  if (e.key === 'ArrowLeft' || e.key === 'a') direction = { x: -1, y: 0 };
  if (e.key === 'ArrowRight' || e.key === 'd') direction = { x: 1, y: 0 };
});

function getDirection() {
  return direction;
}
