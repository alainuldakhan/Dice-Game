const slider   = document.getElementById('number-slider');
const current  = document.getElementById('current');
const resultEl = document.getElementById('result');
const btnL     = document.getElementById('lower');
const btnH     = document.getElementById('higher');
const message  = document.getElementById('message');

function randomNumber() {
  return Math.floor(Math.random() * 100) + 1;
}
``
slider.addEventListener('input', () => {
  current.textContent = slider.value;
  resultEl.textContent  = '';
  resultEl.classList.remove('loading');
  message.textContent   = 'Make a choice';
  message.className     = '';
});

function guess(isHigher) {
  const base = Number(slider.value);

  resultEl.textContent = '';
  resultEl.classList.add('loading');
  message.textContent  = 'Loading...';
  message.className    = '';

  setTimeout(() => {
    const next    = randomNumber();
    const correct = isHigher ? next > base : next < base;

    resultEl.classList.remove('loading');
    resultEl.textContent = next;

    message.textContent = correct ? 'You won!' : 'You lose!';
    message.className   = correct ? 'win' : 'lose';
  }, 1000);
}

btnL.addEventListener('click', () => guess(false));
btnH.addEventListener('click', () => guess(true));

current.textContent = slider.value;
resultEl.textContent = '–';
