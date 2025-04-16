const envelope = document.getElementById('envelope-trigger');
const letter = document.getElementById('letter');

envelope.addEventListener('click', function() {
  // Bước 1: Mở nắp phong bì
  this.classList.add('opening');

  // Bước 2: Sau khi mở nắp, làm mờ dần phong bì
  setTimeout(() => {
    this.classList.add('hidden');

    // Bước 3: Hiện dần lá thư
    setTimeout(() => {
      letter.classList.add('visible');
    }, 300);

  }, 600);

  // Nếu muốn chuyển trang sau khi hoàn thành hiệu ứng
  // setTimeout(() => {
  //   window.location.href = 'trang-thu.html';
  // }, 2000);
});