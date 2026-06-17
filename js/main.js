// ===== CONTACT FORM VALIDATION =====
const contactForm = document.getElementById('contactForm');

if (contactForm) {
  contactForm.addEventListener('submit', function (e) {
    e.preventDefault(); // stop page refresh

    let isValid = true;

    // --- Validate Name ---
    const name = document.getElementById('name');
    if (name.value.trim().length < 3) {
      name.classList.add('is-invalid');
      isValid = false;
    } else {
      name.classList.remove('is-invalid');
      name.classList.add('is-valid');
    }

    // --- Validate Email ---
    const email = document.getElementById('email');
    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailPattern.test(email.value.trim())) {
      email.classList.add('is-invalid');
      isValid = false;
    } else {
      email.classList.remove('is-invalid');
      email.classList.add('is-valid');
    }

    // --- Validate Phone ---
    const phone = document.getElementById('phone');
    const phonePattern = /^0[17]\d{8}$/;
    if (!phonePattern.test(phone.value.trim().replace(/\s/g, ''))) {
      phone.classList.add('is-invalid');
      isValid = false;
    } else {
      phone.classList.remove('is-invalid');
      phone.classList.add('is-valid');
    }

    // --- Validate Subject ---
    const subject = document.getElementById('subject');
    if (subject.value === '') {
      subject.classList.add('is-invalid');
      isValid = false;
    } else {
      subject.classList.remove('is-invalid');
      subject.classList.add('is-valid');
    }

    // --- Validate Message ---
    const message = document.getElementById('message');
    if (message.value.trim().length < 20) {
      message.classList.add('is-invalid');
      isValid = false;
    } else {
      message.classList.remove('is-invalid');
      message.classList.add('is-valid');
    }

    // --- If all valid, show success ---
    if (isValid) {
      document.getElementById('successMsg').classList.remove('d-none');
      contactForm.reset();
      // Remove green borders after reset
      contactForm.querySelectorAll('.is-valid').forEach(el => {
        el.classList.remove('is-valid');
      });
    }
  });
}