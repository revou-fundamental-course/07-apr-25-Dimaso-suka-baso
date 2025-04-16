document.addEventListener('DOMContentLoaded', function() {
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

    const contactForm = document.getElementById('contactForm');
    
    if (contactForm) {
        contactForm.addEventListener('submit', function(e) {
            e.preventDefault();

            document.querySelectorAll('.error').forEach(el => {
                el.textContent = '';
            });
            
            let isValid = true;

            const name = document.getElementById('name');
            if (!name.value.trim()) {
                document.getElementById('nameError').textContent = 'Nama harus diisi';
                isValid = false;
            }
            
            const email = document.getElementById('email');
            const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
            if (!email.value.trim()) {
                document.getElementById('emailError').textContent = 'Email harus diisi';
                isValid = false;
            } else if (!emailRegex.test(email.value)) {
                document.getElementById('emailError').textContent = 'Email tidak valid';
                isValid = false;
            }
                       
            const message = document.getElementById('message');
            if (!message.value.trim()) {
                document.getElementById('messageError').textContent = 'Pesan harus diisi';
                isValid = false;
            } else if (message.value.trim().length < 10) {
                document.getElementById('messageError').textContent = 'Pesan terlalu pendek';
                isValid = false;
            }
                      
            if (isValid) {
                alert('Your message has been sent successfully! We will be in touch with you soon.');
                contactForm.reset();
            }
        });
    }
    
    window.addEventListener('scroll', function() {
        const navbar = document.getElementById('navbar');
        if (window.scrollY > 100) {
            navbar.classList.add('scrolled');
        } else {
            navbar.classList.remove('scrolled');
        }
    });
});