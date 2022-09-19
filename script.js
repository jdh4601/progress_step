const progress = document.getElementById('progress');
const circles = document.querySelectorAll('.circle');
const prev = document.getElementById('prev');
const next = document.getElementById('next');
const actives = document.querySelectorAll('.active');

let currentActive = 1;

// +1칸씩 이동
next.addEventListener('click', () => {
  currentActive++;

  if (currentActive > circles.length) {
    currentActive = circles.length;
  }

  update();
});

// -1칸씩 이동
prev.addEventListener('click', () => {
  currentActive--;

  if (currentActive < 1) {
    currentActive = 1;
  }

  update();
});

// 변화값을 업데이트 + 화면에 출력
function update() {
  circles.forEach((circle, index) => {
    if (index < currentActive) {
      circle.classList.add('active');
    }
    circle.classList.remove('active');
  });

  progress.style.width =
    ((actives.length - 1) / (circles.length - 1)) * 100 + '%';

  if (currentActive == 1) {
    prev.disabled = false;
  } else if (currentActive == circles.length) {
    next.disabled = false;
  } else {
    prev.disabled = true;
    next.disabled = true;
  }
}
