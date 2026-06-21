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
// ===== COURSE FILTER =====
const filterBtns = document.querySelectorAll('.filter-btn');
const courseCards = document.querySelectorAll('.course-card');
const noResults = document.getElementById('noResults');

filterBtns.forEach(btn => {
  btn.addEventListener('click', () => {
    // Reset all buttons to outline style
    filterBtns.forEach(b => {
      b.classList.remove('btn-primary', 'active');
      b.classList.add('btn-outline-primary');
    });
    // Highlight the clicked button
    btn.classList.remove('btn-outline-primary');
    btn.classList.add('btn-primary', 'active');

    const filterValue = btn.getAttribute('data-filter');
    let visibleCount = 0;

    courseCards.forEach(card => {
      const category = card.getAttribute('data-category');
      if (filterValue === 'all' || category === filterValue) {
        card.style.display = 'block';
        visibleCount++;
      } else {
        card.style.display = 'none';
      }
    });

    // Show "no results" message if needed
    if (visibleCount === 0) {
      noResults.classList.remove('d-none');
    } else {
      noResults.classList.add('d-none');
    }
  });
});
// ===== NEWSLETTER FORM =====
const newsletterForm = document.getElementById('newsletterForm');
if (newsletterForm) {
  newsletterForm.addEventListener('submit', function (e) {
    e.preventDefault();
    document.getElementById('newsletterMsg').classList.remove('d-none');
    newsletterForm.reset();
  });
}
// ===== GALLERY FILTER =====
const galleryFilterBtns = document.querySelectorAll('.gallery-filter-btn');
const galleryItems = document.querySelectorAll('.gallery-item');

galleryFilterBtns.forEach(btn => {
  btn.addEventListener('click', () => {

    // Reset all buttons
    galleryFilterBtns.forEach(b => {
      b.classList.remove('btn-primary', 'active');
      b.classList.add('btn-outline-primary');
    });

    // Highlight clicked button
    btn.classList.remove('btn-outline-primary');
    btn.classList.add('btn-primary', 'active');

    const filter = btn.getAttribute('data-filter');

    galleryItems.forEach(item => {
      if (filter === 'all' || item.getAttribute('data-category') === filter) {
        item.style.display = 'block';
      } else {
        item.style.display = 'none';
      }
    });
  });
});
// ===== FAQ SEARCH =====
const faqSearch = document.getElementById('faqSearch');
if (faqSearch) {
  faqSearch.addEventListener('input', function () {
    const searchTerm = this.value.toLowerCase();
    const accordionItems = document.querySelectorAll('.accordion-item');

    accordionItems.forEach(item => {
      const questionText = item.querySelector('.accordion-button').textContent.toLowerCase();
      const answerText = item.querySelector('.accordion-body').textContent.toLowerCase();

      if (questionText.includes(searchTerm) || answerText.includes(searchTerm)) {
        item.style.display = 'block';
      } else {
        item.style.display = 'none';
      }
    });
  });
}