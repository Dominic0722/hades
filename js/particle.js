
const canvas = document.getElementById('particleCanvas');
const ctx = canvas.getContext('2d');

// 캔버스 크기 설정
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

// 파티클 배열과 속성 설정
const particles = [];
const particleCount = 150;

// 파티클 클래스 정의
class Particle {
    constructor(x, y, size, speedX, speedY) {
      this.x = x;
      this.y = y;
      this.size = size;
      this.speedX = (Math.random() - 0.5) * 2; // 좌우 움직임을 줄이기 위해 속도를 더 낮춤
      this.speedY = Math.random() * -1 - 0.5; // Y축 속도 (위로 이동)
      this.color = 'rgba(57, 255, 20, 0.8)'; // 형광 초록색
      this.alpha = Math.random() * 0.5 + 0.5; // 불투명도 (더 강한 발광 효과)
      this.lifeSpan = Math.random() * 400 + 100; // 수명: 400 ~ 500 범위로 설정
      this.age = 0; // 파티클의 나이
    }
  
    update() {
      this.x += this.speedX; // X축 이동
      this.y += this.speedY; // Y축 이동
  
      this.age++; // 나이 증가
  
      // 파티클이 화면 밖으로 나가거나 수명이 다하면 다시 나타나도록 설정
      if (this.age > this.lifeSpan || this.y < 0 - this.size || this.x < 0 - this.size || this.x > canvas.width + this.size) {
        this.reset(); // 파티클 초기화
      }
    }
  
    reset() {
      this.age = 0; // 나이 리셋
      this.x = Math.random() * canvas.width; // 새로운 랜덤 위치
      this.y = canvas.height + this.size; // 화면 아래에서 나타나게 설정
      this.speedX = (Math.random() - 0.5) * 2; // 좌우 움직임을 줄인 속도
      this.speedY = Math.random() * -1 - 0.5; // Y축 속도 (위로 이동)
      this.lifeSpan = Math.random() * 400 + 100; // 수명 범위 400 ~ 500으로 설정
    }
  
    draw() {
      ctx.beginPath();
      ctx.ellipse(this.x, this.y, this.size / 2, this.size / 3, 0, 0, Math.PI * 2); // 세로 타원형
      ctx.fillStyle = this.color;
  
      // 발광 효과를 강조하는 부분
      ctx.shadowBlur = 50; // 그림자 퍼짐 정도를 크게 설정
      ctx.shadowColor = 'rgba(57, 255, 20, 1)'; // 발광 색상, 완전한 형광 초록색
      ctx.globalAlpha = 1; // 불투명도 (파티클의 발광 효과를 강하게)
  
      ctx.fill();
      ctx.closePath();
  
      // 그림자 효과가 적용되지 않도록 리셋
      ctx.shadowBlur = 0;
      ctx.globalAlpha = 1;
    }
  }
// 파티클 초기화
function initParticles() {
  for (let i = 0; i < particleCount; i++) {
    const size = Math.random() * 3 + 1; // 파티클 크기
    const x = Math.random() * canvas.width; // X 위치
    const y = Math.random() * canvas.height; // Y 위치
    const speedX = (Math.random() - 0.5) * 4; // X축 속도 불규칙적으로
    const speedY = Math.random() * -1 - 0.5; // Y축 속도 (위로 이동)
    particles.push(new Particle(x, y, size, speedX, speedY));
  }
}

// 애니메이션 루프
function animate() {
  ctx.clearRect(0, 0, canvas.width, canvas.height); // 캔버스 클리어
  particles.forEach((particle) => {
    particle.update();
    particle.draw();
  });
  requestAnimationFrame(animate);
}

// 창 크기 변경 시 캔버스 크기 업데이트
window.addEventListener('resize', () => {
  canvas.width = window.innerWidth;
  canvas.height = window.innerHeight;
  particles.length = 0;
  initParticles();
});

// 실행
initParticles();
animate();