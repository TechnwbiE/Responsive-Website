// confidant.js
const items = document.querySelectorAll('.feature-item');
const prevBtn = document.getElementById('prevBtn');
const nextBtn = document.getElementById('nextBtn');

let currentIndex = 0;

function updateDisplay() {
  items.forEach((item, i) => {
    item.style.display = i === currentIndex ? 'block' : 'none';
  });
}

prevBtn.addEventListener('click', () => {
  currentIndex = (currentIndex - 1 + items.length) % items.length;
  updateDisplay();
});

nextBtn.addEventListener('click', () => {
  currentIndex = (currentIndex + 1) % items.length;
  updateDisplay();
});

// On page load
updateDisplay();
