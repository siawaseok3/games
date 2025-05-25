const startBtn = document.getElementById('startBtn');
const scoreDisplay = document.getElementById('score');
const hole = document.getElementById('hole');

let score = 0;
let gameInterval;
let hideTimeout;

function showMole() {
  const x = Math.random() * 100;
  const y = Math.random() * 100;
  hole.style.left = `${x}px`;
  hole.style.top = `${y}px`;
  hole.style.display = 'block';

  hideTimeout = setTimeout(() => {
    hole.style.display = 'none';
  }, 800);
}

hole.addEventListener('click', () => {
  score++;
  scoreDisplay.textContent = `スコア: ${score}`;
  hole.style.display = 'none';
});

startBtn.addEventListener('click', () => {
  score = 0;
  scoreDisplay.textContent = 'スコア: 0';
  startBtn.disabled = true;

  gameInterval = setInterval(showMole, 1000);

  setTimeout(() => {
    clearInterval(gameInterval);
    clearTimeout(hideTimeout);
    hole.style.display = 'none';
    startBtn.disabled = false;
    alert(`ゲーム終了！あなたのスコアは ${score} 点です`);
  }, 20000); // 20秒で終了
});
