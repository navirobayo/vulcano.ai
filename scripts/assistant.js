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

function showStep(id) {
  document.querySelectorAll('.step').forEach(el => el.classList.add('hidden'));
  document.getElementById(id).classList.remove('hidden');
}

startBtn.addEventListener('click', () => {
  showStep('step2');
});

submitBtn.addEventListener('click', () => {
  const input = userInput.value.trim();
  if (!input) return;
  const response = Assistant.generateResponse(input);
  aiResponse.textContent = response;
  showStep('step3');
});

nextBtn.addEventListener('click', () => {
  showStep('step4');
});
