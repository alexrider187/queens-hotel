// Wait for DOM to fully load before accessing any elements
document.addEventListener('DOMContentLoaded', () => {
  // ====== Mobile Navigation Toggle ======
  const toggle = document.getElementById('menuToggle');
  const nav = document.getElementById('navLinks');
  const iconHamburger = document.getElementById('iconHamburger');
  const iconClose = document.getElementById('iconClose');

  if (toggle && nav && iconHamburger && iconClose) {
    toggle.addEventListener('click', () => {
      nav.classList.toggle('show');
      const isOpen = nav.classList.contains('show');
      iconHamburger.style.display = isOpen ? 'none' : 'block';
      iconClose.style.display = isOpen ? 'block' : 'none';
    });

    iconClose.style.display = 'none';
  }

  // ====== Booking Form Validation ======
  const bookingForm = document.getElementById('bookingForm');
  if (bookingForm) {
    bookingForm.addEventListener('submit', function (e) {
      e.preventDefault();

      const fullName = document.getElementById('fullName').value.trim();
      const email = document.getElementById('email').value.trim();
      const phone = document.getElementById('phone').value.trim();
      const roomType = document.getElementById('roomType').value;
      const checkin = document.getElementById('checkin').value;
      const checkout = document.getElementById('checkout').value;
      const guests = document.getElementById('guests').value;

      if (!fullName || !email || !phone || !roomType || !checkin || !checkout || !guests) {
        alert('Please fill in all required fields.');
        return;
      }

      alert('Booking submitted! We will contact you shortly.');
      this.reset();
    });
  }

  // ====== Contact Form Validation ======
  const contactForm = document.getElementById('contactForm');
  if (contactForm) {
    contactForm.addEventListener('submit', function (e) {
      e.preventDefault();

      const name = document.getElementById('name').value.trim();
      const email = document.getElementById('email').value.trim();
      const message = document.getElementById('message').value.trim();

      if (!name || !email || !message) {
        alert("Please fill in all fields.");
        return;
      }

      alert("Thank you! Your message has been sent.");
      this.reset();
    });
  }
});
