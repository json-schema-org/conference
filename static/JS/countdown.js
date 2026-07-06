// Countdown to December 1st, 2026
const countdownDate = new Date("Dec 1, 2026 00:00:00").getTime();

// Track previous values for animation
let previousValues = { days: 0, hours: 0, minutes: 0, seconds: 0 };

function updateCountdown() {
  const now = new Date().getTime();
  const distance = countdownDate - now;

  const days = Math.floor(distance / (1000 * 60 * 60 * 24));
  const hours = Math.floor(
    (distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
  );
  const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
  const seconds = Math.floor((distance % (1000 * 60)) / 1000);

  const daysEl = document.querySelector(".days");
  const hoursEl = document.querySelector(".hours");
  const minutesEl = document.querySelector(".minutes");
  const secondsEl = document.querySelector(".seconds");

  // Add animation class when values change
  function updateWithAnimation(element, newValue, oldValue) {
    if (element && newValue !== oldValue) {
      element.textContent = String(newValue).padStart(2, '0');
      // Add pulse animation
      const box = element.closest('.countdown-number-box');
      if (box) {
        box.style.animation = 'none';
        setTimeout(() => {
          box.style.animation = 'pulse-number 0.3s ease-in-out';
        }, 10);
      }
    } else if (element && !element.textContent) {
      element.textContent = String(newValue).padStart(2, '0');
    }
  }

  updateWithAnimation(daysEl, days, previousValues.days);
  updateWithAnimation(hoursEl, hours, previousValues.hours);
  updateWithAnimation(minutesEl, minutes, previousValues.minutes);
  updateWithAnimation(secondsEl, seconds, previousValues.seconds);

  previousValues = { days, hours, minutes, seconds };

  if (distance < 0) {
    clearInterval(countdown);
    const countdownEl = document.getElementById("countdown");
    if (countdownEl) {
      countdownEl.innerHTML = '<div style="font-size: 2rem; font-weight: 700; color: white; animation: pulse-number 0.5s ease-in-out;">Conference Started! 🎉</div>';
    }
  }
}

// Initial update
updateCountdown();

// Update every second
const countdown = setInterval(updateCountdown, 1000);
