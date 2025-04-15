// Mở phong bì khi nhấn vào
document.querySelector('.envelope').addEventListener('click', function() {
    this.classList.add('open');
});

// Mở thiệp khi nhấn vào
document.querySelector('.card-front').addEventListener('click', function() {
    document.querySelector('.card').classList.add('open');
    createConfetti();
});

document.querySelector('.open-text').addEventListener('click', function(e) {
    e.stopPropagation();
    document.querySelector('.card').classList.add('open');
    createConfetti();
});

// Xác nhận tham dự
document.getElementById('rsvp-btn').addEventListener('click', function() {
    alert('Cảm ơn bạn đã xác nhận tham dự! Chúng tôi rất vui khi được đón tiếp bạn.');
});

// Tạo hiệu ứng confetti
function createConfetti() {
    const confettiCount = 100;
    const container = document.querySelector('body');
    
    for (let i = 0; i < confettiCount; i++) {
        const confetti = document.createElement('div');
        confetti.className = 'confetti';
        
        // Tạo màu ngẫu nhiên
        const colors = ['#ff7eb9', '#ff65a3', '#7afcff', '#feff9c', '#fff740'];
        const randomColor = colors[Math.floor(Math.random() * colors.length)];
        confetti.style.backgroundColor = randomColor;
        
        // Vị trí ngẫu nhiên
        confetti.style.left = Math.random() * 100 + '%';
        
        // Kích thước ngẫu nhiên
        const size = Math.random() * 8 + 5;
        confetti.style.width = size + 'px';
        confetti.style.height = size + 'px';
        
        // Hình dạng ngẫu nhiên
        const shapes = ['circle', 'square', 'triangle'];
        const shape = shapes[Math.floor(Math.random() * shapes.length)];
        
        if (shape === 'circle') {
            confetti.style.borderRadius = '50%';
        } else if (shape === 'triangle') {
            confetti.style.width = '0';
            confetti.style.height = '0';
            confetti.style.borderLeft = size/2 + 'px solid transparent';
            confetti.style.borderRight = size/2 + 'px solid transparent';
            confetti.style.borderBottom = size + 'px solid ' + randomColor;
            confetti.style.backgroundColor = 'transparent';
        }
        
        // Thêm animation
        confetti.style.animation = `confettiFall ${Math.random() * 3 + 2}s linear forwards`;
        
        container.appendChild(confetti);
        
        // Xóa confetti sau khi animation kết thúc
        setTimeout(() => {
            confetti.remove();
        }, 5000);
    }
}

// Thông tin có thể thay đổi
document.getElementById('birthday-person').textContent = 'Nguyễn Văn A';
document.getElementById('age').textContent = '25';