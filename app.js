const serviceUrl = window.SCHOOL_SERVICE_URL || 'http://localhost:8000';
const form = document.querySelector('#registration-form');
const message = document.querySelector('#message');

form.addEventListener('submit', async (event) => {
  event.preventDefault();
  message.textContent = 'Submitting...';
  const data = Object.fromEntries(new FormData(form));
  try {
    const response = await fetch(`${serviceUrl}/students`, {
      method: 'POST', headers: { 'Content-Type': 'application/json' }, body: JSON.stringify(data),
    });
    if (!response.ok) throw new Error('Registration failed');
    form.reset();
    message.textContent = 'Registration submitted.';
  } catch (error) {
    message.textContent = error.message;
  }
});