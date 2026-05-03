function addGoal() {
  const input = document.getElementById('goalInput');
  const list = document.getElementById('goalList');

  if(input.value.trim() !== '') {
    const li = document.createElement('li');
    li.textContent = input.value;
    list.appendChild(li);
    input.value = '';
  }
}

let time = 1500;
let running = false;

function startTimer() {
  if(running) return;

  running = true;

  const timerDisplay = document.getElementById('timer');

  const interval = setInterval(() => {
    const minutes = Math.floor(time / 60);
    const seconds = time % 60;

    timerDisplay.textContent =
      `${minutes}:${seconds < 10 ? '0' : ''}${seconds}`;

    time--;

    if(time < 0) {
      clearInterval(interval);
      timerDisplay.textContent = 'Done!';
      running = false;
    }
  }, 1000);
}
