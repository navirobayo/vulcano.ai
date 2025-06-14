// Simple modular assistant for the funnel
const Assistant = (() => {
  const tips = [
    'Focus on one channel and master it before spreading resources thin.',
    'Consistency beats intensity. Keep showing up for your audience.',
    'Use short videos to showcase quick wins or testimonials.'
  ];

  function getRandomTip() {
    return tips[Math.floor(Math.random() * tips.length)];
  }

  function generateResponse(input) {
    // Placeholder for real API call
    const tip = getRandomTip();
    return `Thanks for sharing that "${input}" is a challenge. Here's a tip: ${tip}`;
  }

  return { generateResponse };
})();

// Funnel navigation
const startBtn = document.getElementById('startBtn');
const submitBtn = document.getElementById('submitBtn');
const nextBtn = document.getElementById('nextBtn');
const userInput = document.getElementById('userInput');
const aiResponse = document.getElementById('aiResponse');
const floatBtn = document.getElementById('floatAssistant');
const popup = document.getElementById('conversionPopup');

function showStep(id) {
  document.querySelectorAll('.step').forEach(el => {
    el.classList.add('hidden');
    el.classList.remove('active');
  });
  const step = document.getElementById(id);
  step.classList.remove('hidden');
  setTimeout(() => step.classList.add('active'), 10);
}

startBtn.addEventListener('click', () => {
  showStep('step2');
});

submitBtn.addEventListener('click', () => {
  const input = userInput.value.trim();
  if (!input) return;
  const response = Assistant.generateResponse(input);
  aiResponse.textContent = '';
  showStep('step3');
  nextBtn.classList.add('hidden');
  setTimeout(() => {
    aiResponse.textContent = response;
    nextBtn.classList.remove('hidden');
  }, 600);
});

nextBtn.addEventListener('click', () => {
  showStep('step4');
});

floatBtn.addEventListener('click', () => {
  showStep('step2');
});

// Simulate recent conversion popup
setTimeout(() => {
  if (popup) popup.classList.add('show');
}, 2000);
