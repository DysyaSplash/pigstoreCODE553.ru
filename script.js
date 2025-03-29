// Параллакс эффект для фона
document.addEventListener('mousemove', (e) => {
    const x = e.clientX / window.innerWidth;
    const y = e.clientY / window.innerHeight;
    document.querySelector('.parallax-bg').style.transform = `translate(-${x * 20}px, -${y * 20}px)`;
});

// Анимация при скролле
const observerOptions = {
    threshold: 0.1
};

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('fade-in');
            observer.unobserve(entry.target);
        }
    });
}, observerOptions);

document.querySelectorAll('.product-card').forEach(card => {
    observer.observe(card);
});

// Эффект при наведении на кнопки
document.querySelectorAll('.nav-button, .buy-button').forEach(button => {
    button.addEventListener('mouseenter', () => {
        button.style.transform = 'translateY(-5px)';
    });
    
    button.addEventListener('mouseleave', () => {
        button.style.transform = 'translateY(0)';
    });
});

// Функция поиска товаров
function searchProducts() {
    const searchTerm = searchInput.value.toLowerCase();
    const productCards = document.querySelectorAll('.product-card');
    
    productCards.forEach(card => {
        const title = card.querySelector('.product-title').textContent.toLowerCase();
        if (title.includes(searchTerm)) {
            card.style.display = 'block';
        } else {
            card.style.display = 'none';
        }
    });
}

// Поиск с задержкой
const searchInput = document.querySelector('.search-input');
let searchTimeout;

searchInput.addEventListener('input', () => {
    clearTimeout(searchTimeout);
    searchTimeout = setTimeout(searchProducts, 300);
});

// Очистка поиска при нажатии Escape
searchInput.addEventListener('keydown', (e) => {
    if (e.key === 'Escape') {
        searchInput.value = '';
        searchProducts();
    }
});

// Анимация при загрузке
document.addEventListener('DOMContentLoaded', () => {
    document.body.style.opacity = '1';
});
// Welcome Screen Logic
document.addEventListener('DOMContentLoaded', function() {
    const overlay = document.getElementById('welcomeOverlay');
    const text = document.getElementById('welcomeText');
    const sticker = document.getElementById('welcomeSticker');
    const button = document.getElementById('welcomeButton');
    
    let currentStage = 1;
    
    button.addEventListener('click', function() {
        if (currentStage === 1) {
            // Переход на второй экран
            text.textContent = 'Начни делать покупки у нас!';
            sticker.src = 'гифки/happy.gif';
            button.textContent = 'Начать покупки';
            overlay.classList.add('second-stage');
            currentStage = 2;
        } else {
            // Закрытие welcome-экрана
            overlay.style.opacity = '0';
            setTimeout(() => {
                overlay.style.display = 'none';
                document.body.style.overflow = 'auto';
            }, 500);
        }
    });
    
    // Предзагрузка изображений
    ['hey.gif', 'happy.gif'].forEach(img => {
        new Image().src = img;
    });
    
    document.body.style.overflow = 'hidden';
});

//логика снега от гуиенапыг//

document.addEventListener('DOMContentLoaded', function() {
    // Создаем снежинки
    function createSnowflakes() {
        const snowflakesContainer = document.querySelector('.snowflakes');
        const snowflakeCount = 50; // Количество снежинок
        
        for (let i = 0; i < snowflakeCount; i++) {
            setTimeout(() => {
                const snowflake = document.createElement('div');
                snowflake.classList.add('snowflake');
                
                // Случайные параметры
                const size = Math.random() * 5 + 2; // 2-7px
                const posX = Math.random() * window.innerWidth;
                const delay = Math.random() * 5;
                const duration = Math.random() * 10 + 5; // 5-15 секунд
                const opacity = Math.random() * 0.7 + 0.3; // 0.3-1
                
                // Применяем параметры
                snowflake.style.width = `${size}px`;
                snowflake.style.height = `${size}px`;
                snowflake.style.left = `${posX}px`;
                snowflake.style.top = `-10px`;
                snowflake.style.animationDelay = `${delay}s`;
                snowflake.style.animationDuration = `${duration}s`;
                snowflake.style.opacity = opacity;
                
                // Добавляем на страницу
                snowflakesContainer.appendChild(snowflake);
                
                // Удаляем снежинку после падения
                setTimeout(() => {
                    snowflake.remove();
                }, duration * 1000);
                
            }, i * 300); // Задержка между созданием снежинок
        }
    }
    
    // Запускаем и повторяем каждые 15 секунд
    createSnowflakes();
    setInterval(createSnowflakes, 15000);
    
    // Обновляем при изменении размера окна
    window.addEventListener('resize', function() {
        document.querySelectorAll('.snowflake').forEach(sf => sf.remove());
        createSnowflakes();
    });
});
// Кнопка "Наверх"
const backToTopButton = document.getElementById('backToTop');

window.addEventListener('scroll', function() {
  if (window.pageYOffset > 300) {
    backToTopButton.classList.add('active');
  } else {
    backToTopButton.classList.remove('active');
  }
});

backToTopButton.addEventListener('click', function(e) {
  e.preventDefault();
  window.scrollTo({
    top: 0,
    behavior: 'smooth'
  });
});
// 1. 3D-эффект параллакса
document.querySelector('.pig-3d-text').addEventListener('mousemove', (e) => {
    const x = e.clientX / window.innerWidth;
    const y = e.clientY / window.innerHeight;
    this.style.transform = `rotateX(${(y * 20) - 10}deg) rotateY(${(x * 20) - 10}deg)`;
  });
  
  // 2. Жидкие частицы (нужен Three.js)
  const initFluid = () => {
    const canvas = document.getElementById('pig-fluids');
    canvas.width = window.innerWidth;
    canvas.height = 300;
    
    // Здесь код симуляции жидкости (требует Three.js)
    // Полный код: https://github.com/PavelLaptev/WebGL-Fluid-Simulation
  };
  
  // 3. Анимированные частицы
  class Particle {
    constructor() {
      this.reset();
    }
    reset() {
      this.x = Math.random() * window.innerWidth;
      this.y = Math.random() * window.innerHeight;
      this.size = Math.random() * 5 + 1;
      this.speedX = Math.random() * 3 - 1.5;
      this.speedY = Math.random() * 3 - 1.5;
    }
    update() {
      this.x += this.speedX;
      this.y += this.speedY;
      if (this.y > window.innerHeight) this.reset();
    }
  }
  
  const particles = Array(100).fill().map(() => new Particle());
  function animateParticles() {
    const ctx = document.createElement('canvas').getContext('2d');
    ctx.clearRect(0, 0, ctx.canvas.width, ctx.canvas.height);
    particles.forEach(p => {
      p.update();
      ctx.fillStyle = `hsla(${Math.random()*60 + 200}, 80%, 60%, 0.5)`;
      ctx.beginPath();
      ctx.arc(p.x, p.y, p.size, 0, Math.PI*2);
      ctx.fill();
    });
    document.querySelector('.pig-particles').style.backgroundImage = `url(${ctx.canvas.toDataURL()})`;
    requestAnimationFrame(animateParticles);
  }
  animateParticles();
  // Анимация появления букв
document.querySelectorAll('.pig-letter').forEach((letter, index) => {
    letter.style.animation = `letterPop 0.4s ease-out ${index * 0.1}s forwards`;
  });
  
  // Параллакс-эффект для 3D
document.querySelector('.pig-3d-header').addEventListener('mousemove', (e) => {
    const x = e.clientX / window.innerWidth - 0.5;
    const y = e.clientY / window.innerHeight - 0.5;
    
    document.querySelector('.pig-3d-title').style.transform = `
      rotateX(${y * 5 + 10}deg) 
      rotateY(${x * 5}deg)
    `;
    
    document.querySelector('.pig-3d-shadow').style.transform = `
      rotateX(60deg) 
      translateZ(-30px) 
      translateX(${x * -20}px)
    `;
  });
  document.querySelector('.pig-3d-header').addEventListener('click', function(e) {
    e.preventDefault();
    
    // Анимация перед переходом
    this.style.animation = 'clickPulse 0.5s ease';
    
    setTimeout(() => {
      window.open(this.href, '_blank');
    }, 300);
  });
  document.querySelector('.pig-3d-header').addEventListener('click', function(e) {
    e.preventDefault();
    
    // Создаём эффект частиц
    const particles = 15;
    for (let i = 0; i < particles; i++) {
      const particle = document.createElement('div');
      particle.className = 'click-particle';
      particle.style.left = `${e.clientX}px`;
      particle.style.top = `${e.clientY}px`;
      particle.style.background = `hsl(${Math.random()*60 + 200}, 80%, 60%)`;
      document.body.appendChild(particle);
      
      setTimeout(() => {
        particle.remove();
      }, 1000);
    }
    
    setTimeout(() => {
      window.open(this.href, '_blank');
    }, 300);
  });
  // Функции для модального окна
function openRobuxModal() {
    const modal = document.getElementById('robuxModal');
    modal.classList.add('active');
    document.body.style.overflow = 'hidden'; // Блокируем скролл
  }
  
  function closeRobuxModal() {
    const modal = document.getElementById('robuxModal');
    modal.classList.remove('active');
    document.body.style.overflow = 'auto'; // Разблокируем скролл
  }
  
  // Закрытие при клике вне окна
  window.addEventListener('click', (e) => {
    const modal = document.getElementById('robuxModal');
    if (e.target === modal) {
      closeRobuxModal();
    }
  });