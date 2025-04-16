const envelope = document.getElementById('envelopeTrigger');
const card = document.getElementById('inviteCard');
const rsvp = document.getElementById('rsvpConfirm');

envelope.addEventListener('click', () => {
  envelope.classList.add('opened');
  setTimeout(() => {
    card.classList.add('open');
    showConfetti();
  }, 700);
});

rsvp.addEventListener('click', () => {
  alert('🎉 Cảm ơn bạn đã xác nhận! Mong gặp lại bạn tại buổi tiệc nhé!');
});

function showConfetti() {
  const container = document.body;
  const colors = ['#ff7eb9', '#7afcff', '#fff740', '#b9fbc0', '#fcd5ce'];
  const shapes = ['square', 'circle'];

  for (let i = 0; i < 60; i++) {
    const confetti = document.createElement('div');
    confetti.classList.add('confetti-piece');

    const size = Math.random() * 8 + 6;
    const color = colors[Math.floor(Math.random() * colors.length)];
    const shape = shapes[Math.floor(Math.random() * shapes.length)];

    confetti.style.backgroundColor = color;
    confetti.style.left = Math.random() * 100 + 'vw';
    confetti.style.top = Math.random() * -100 + 'px';

    if (shape === 'circle') {
      confetti.style.borderRadius = '50%';
    }

    container.appendChild(confetti);

    setTimeout(() => {
      confetti.remove();
    }, 4000);
  }
}
