document.addEventListener('DOMContentLoaded', () => {
  const sidebar = document.getElementById('sidebar');
  const toggleBtn = document.getElementById('menuToggle');
  const iconHamburger = document.getElementById('iconHamburger');
  const iconClose = document.getElementById('iconClose');

  if (toggleBtn && sidebar && iconHamburger && iconClose) {
    toggleBtn.addEventListener('click', () => {
      sidebar.classList.toggle('show');
      const isOpen = sidebar.classList.contains('show');
      iconHamburger.style.display = isOpen ? 'none' : 'block';
      iconClose.style.display = isOpen ? 'block' : 'none';
    });
  }

  // Close sidebar when clicking outside on small screens
  document.addEventListener('click', (e) => {
    if (
      window.innerWidth <= 1023 &&
      sidebar.classList.contains('show') &&
      !sidebar.contains(e.target) &&
      !toggleBtn.contains(e.target)
    ) {
      sidebar.classList.remove('show');
      iconHamburger.style.display = 'block';
      iconClose.style.display = 'none';
    }
  });

  // Booking Form Validation
  const bookingForm = document.getElementById('bookingForm');
  if (bookingForm) {
    bookingForm.addEventListener('submit', function (e) {
      e.preventDefault();
      const fullName = document.getElementById('fullName')?.value.trim();
      const email = document.getElementById('email')?.value.trim();
      const phone = document.getElementById('phone')?.value.trim();
      const roomType = document.getElementById('roomType')?.value;
      const checkin = document.getElementById('checkin')?.value;
      const checkout = document.getElementById('checkout')?.value;
      const guests = document.getElementById('guests')?.value;

      if (!fullName || !email || !phone || !roomType || !checkin || !checkout || !guests) {
        alert('Please fill in all required fields.');
        return;
      }

      alert('Booking submitted! We will contact you shortly.');
      this.reset();
    });
  }

  // Contact Form Validation
  const contactForm = document.getElementById('contactForm');
  if (contactForm) {
    contactForm.addEventListener('submit', function (e) {
      e.preventDefault();

      const name = document.getElementById('name')?.value.trim();
      const email = document.getElementById('email')?.value.trim();
      const message = document.getElementById('message')?.value.trim();

      if (!name || !email || !message) {
        alert("Please fill in all fields.");
        return;
      }

      alert("Thank you! Your message has been sent.");
      this.reset();
    });
  }
});
