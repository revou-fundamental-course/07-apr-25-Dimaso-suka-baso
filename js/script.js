document.addEventListener('DOMContentLoaded', function() {
    // Smooth scrolling for navigation links
    document.querySelectorAll('nav a').forEach(anchor => {
        anchor.addEventListener('click', function(e) {
            e.preventDefault();
            
            const targetId = this.getAttribute('href');
            const targetElement = document.querySelector(targetId);
            
            window.scrollTo({
                top: targetElement.offsetTop - 70,
                behavior: 'smooth'
            });
        });
    });

    // Form validation
    const contactForm = document.getElementById('contactForm');
    
    if (contactForm) {
        contactForm.addEventListener('submit', function(e) {
            e.preventDefault();
            
            // Reset errors
            document.querySelectorAll('.error').forEach(el => {
                el.textContent = '';
            });
            
            let isValid = true;
            
            // Validate name
            const name = document.getElementById('name');
            if (!name.value.trim()) {
                document.getElementById('nameError').textContent = 'Nama harus diisi';
                isValid = false;
            }
            
            // Validate email
            const email = document.getElementById('email');
            const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
            if (!email.value.trim()) {
                document.getElementById('emailError').textContent = 'Email harus diisi';
                isValid = false;
            } else if (!emailRegex.test(email.value)) {
                document.getElementById('emailError').textContent = 'Email tidak valid';
                isValid = false;
            }
            
            // Validate message
            const message = document.getElementById('message');
            if (!message.value.trim()) {
                document.getElementById('messageError').textContent = 'Pesan harus diisi';
                isValid = false;
            } else if (message.value.trim().length < 10) {
                document.getElementById('messageError').textContent = 'Pesan terlalu pendek';
                isValid = false;
            }
            
            // If form is valid, show success message
            if (isValid) {
                alert('Pesan Anda telah berhasil dikirim! Kami akan segera menghubungi Anda.');
                contactForm.reset();
            }
        });
    }
    
    // Change navbar style on scroll
    window.addEventListener('scroll', function() {
        const navbar = document.getElementById('navbar');
        if (window.scrollY > 100) {
            navbar.style.background = '#222';
            navbar.style.boxShadow = '0 2px 10px rgba(0, 0, 0, 0.1)';
        } else {
            navbar.style.background = '#333';
            navbar.style.boxShadow = 'none';
        }
    });
});