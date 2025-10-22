let current = 0;

export function animateSpark() {
  const blocks = document.querySelectorAll('.spark');
  blocks.forEach((b, i) => b.classList.toggle('active', i === current));

  setTimeout(() => {
    blocks[current].classList.remove('active');
    current = (current + 1) % blocks.length;
    animateSpark();
  }, 1000);
}
