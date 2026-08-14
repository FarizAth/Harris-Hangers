document.addEventListener('DOMContentLoaded', () => {
  const form = document.getElementById('contactForm');
  const responseAlert = document.getElementById('formResponse');

  if (form) {
    form.addEventListener('submit', async (e) => {
      e.preventDefault();
      
      const submitBtn = document.getElementById('submitBtn');
      const fullName = document.getElementById('fullName').value.trim();
      const phone = document.getElementById('phone').value.trim();
      const email = document.getElementById('email').value.trim();
      const projectType = document.getElementById('projectType').value;
      const message = document.getElementById('message').value.trim();
      const honeypot = document.getElementById('website').value;

      if (honeypot) return; // Silent reject spam

      let isValid = true;

      if (!fullName) {
        document.getElementById('nameError').style.display = 'block';
        isValid = false;
      } else {
        document.getElementById('nameError').style.display = 'none';
      }

      if (!phone) {
        document.getElementById('phoneError').style.display = 'block';
        isValid = false;
      } else {
        document.getElementById('phoneError').style.display = 'none';
      }

      if (!email || !email.includes('@')) {
        document.getElementById('emailError').style.display = 'block';
        isValid = false;
      } else {
        document.getElementById('emailError').style.display = 'none';
      }

      if (!message) {
        document.getElementById('messageError').style.display = 'block';
        isValid = false;
      } else {
        document.getElementById('messageError').style.display = 'none';
      }

      if (!isValid) return;

      submitBtn.disabled = true;
      submitBtn.querySelector('span').textContent = 'Sending Message...';

      try {
        const res = await fetch('/api/contact', {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({ fullName, phone, email, projectType, message })
        });

        const data = await res.json();

        if (res.ok && data.success) {
          responseAlert.className = 'form-response-alert success';
          responseAlert.textContent = 'Thank you! Your message has been sent directly to Ed Harris. He will contact you shortly.';
          responseAlert.style.display = 'block';
          form.reset();
        } else {
          throw new Error(data.message || 'Error submitting form.');
        }
      } catch (err) {
        responseAlert.className = 'form-response-alert error';
        responseAlert.textContent = 'Oops! Something went wrong. Please call Ed directly at 315-679-7913.';
        responseAlert.style.display = 'block';
      } finally {
        submitBtn.disabled = false;
        submitBtn.querySelector('span').textContent = 'Send Message to Ed';
      }
    });
  }
});