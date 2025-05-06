document.addEventListener('DOMContentLoaded', function() {
    // Navbar scroll effect
    const navbar = document.querySelector('.navbar-glass');
    
    window.addEventListener('scroll', function() {
        if (window.scrollY > 50) {
            navbar.classList.add('scrolled');
        } else {
            navbar.classList.remove('scrolled');
        }
    });

    // Close mobile menu when a link is clicked
    const navLinks = document.querySelectorAll('.nav-link');
    const navbarCollapse = document.querySelector('.navbar-collapse');
    
    navLinks.forEach(link => {
        link.addEventListener('click', function() {
            // For mobile view, collapse the menu after click
            if (window.innerWidth < 992) {
                const bsCollapse = new bootstrap.Collapse(navbarCollapse, {
                    toggle: false
                });
                bsCollapse.hide();
            }
        });
    });
});
// Particles.js configuration
document.addEventListener('DOMContentLoaded', function() {
    // Initialize particles if the library is loaded
    if (typeof particlesJS !== 'undefined') {
        particlesJS('particles-js', {
            "particles": {
                "number": {
                    "value": 60,
                    "density": {
                        "enable": true,
                        "value_area": 800
                    }
                },
                "color": {
                    "value": "#ffffff"
                },
                "shape": {
                    "type": "circle",
                    "stroke": {
                        "width": 0,
                        "color": "#000000"
                    }
                },
                "opacity": {
                    "value": 0.3,
                    "random": true,
                    "anim": {
                        "enable": true,
                        "speed": 1,
                        "opacity_min": 0.1,
                        "sync": false
                    }
                },
                "size": {
                    "value": 3,
                    "random": true,
                    "anim": {
                        "enable": true,
                        "speed": 2,
                        "size_min": 0.1,
                        "sync": false
                    }
                },
                "line_linked": {
                    "enable": true,
                    "distance": 150,
                    "color": "#8a2be2",
                    "opacity": 0.2,
                    "width": 1
                },
                "move": {
                    "enable": true,
                    "speed": 1,
                    "direction": "none",
                    "random": true,
                    "straight": false,
                    "out_mode": "out",
                    "bounce": false,
                    "attract": {
                        "enable": true,
                        "rotateX": 600,
                        "rotateY": 1200
                    }
                }
            },
            "interactivity": {
                "detect_on": "canvas",
                "events": {
                    "onhover": {
                        "enable": true,
                        "mode": "grab"
                    },
                    "onclick": {
                        "enable": true,
                        "mode": "push"
                    },
                    "resize": true
                },
                "modes": {
                    "grab": {
                        "distance": 140,
                        "line_linked": {
                            "opacity": 0.5
                        }
                    },
                    "push": {
                        "particles_nb": 4
                    }
                }
            },
            "retina_detect": true
        });
    }

    // Smooth scroll for anchor links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function(e) {
            e.preventDefault();
            const targetId = this.getAttribute('href');
            if (targetId === '#') return;
            
            const targetElement = document.querySelector(targetId);
            if (targetElement) {
                window.scrollTo({
                    top: targetElement.offsetTop - 70,
                    behavior: 'smooth'
                });
            }
        });
    });
});
// Add this to your existing script.js
document.addEventListener('DOMContentLoaded', function() {
    // Profile image hover effect
    const profileCard = document.querySelector('.profile-card');
    if (profileCard) {
        profileCard.addEventListener('mousemove', (e) => {
            const xAxis = (window.innerWidth / 2 - e.pageX) / 25;
            const yAxis = (window.innerHeight / 2 - e.pageY) / 25;
            profileCard.style.transform = `rotateY(${xAxis}deg) rotateX(${yAxis}deg)`;
        });

        profileCard.addEventListener('mouseenter', () => {
            profileCard.style.transition = 'none';
            profileCard.querySelector('.profile-img').style.transform = 'scale(1.05)';
        });

        profileCard.addEventListener('mouseleave', () => {
            profileCard.style.transition = 'transform 0.5s ease';
            profileCard.style.transform = 'rotateY(0deg) rotateX(0deg)';
            profileCard.querySelector('.profile-img').style.transform = 'scale(1)';
        });
    }

    // Add floating dots animation
    const aboutSection = document.querySelector('.about-section');
    if (aboutSection) {
        for (let i = 0; i < 10; i++) {
            const dot = document.createElement('div');
            dot.classList.add('floating-dot');
            
            // Random properties
            const size = Math.random() * 5 + 2;
            const posX = Math.random() * 100;
            const posY = Math.random() * 100;
            const delay = Math.random() * 5;
            const duration = Math.random() * 10 + 10;
            
            dot.style.width = `${size}px`;
            dot.style.height = `${size}px`;
            dot.style.left = `${posX}%`;
            dot.style.top = `${posY}%`;
            dot.style.animationDelay = `${delay}s`;
            dot.style.animationDuration = `${duration}s`;
            
            aboutSection.querySelector('.about-bg-elements').appendChild(dot);
        }
    }
});
// Add this to your existing script.js
document.addEventListener('DOMContentLoaded', function() {
    // Initialize circular progress bars
    const progressCircles = document.querySelectorAll('.circular-progress');
    
    progressCircles.forEach(circle => {
        const value = circle.getAttribute('data-value');
        const progressFill = circle.querySelector('.progress-fill');
        const progressText = circle.querySelector('.progress-text');
        
        // Calculate dash offset (283 is the circumference for 90px radius)
        const offset = 283 - (283 * value) / 100;
        
        // Set the stroke dashoffset after a small delay for animation
        setTimeout(() => {
            progressFill.style.strokeDashoffset = offset;
            progressText.textContent = `${value}%`;
        }, 100);
    });

    // Initialize particles for skills section if needed
    if (typeof particlesJS !== 'undefined' && document.getElementById('skills-particles')) {
        particlesJS('skills-particles', {
            particles: {
                number: { value: 40, density: { enable: true, value_area: 800 } },
                color: { value: "#ffffff" },
                shape: { type: "circle" },
                opacity: { value: 0.3, random: true },
                size: { value: 3, random: true },
                line_linked: { enable: true, distance: 150, color: "#8a2be2", opacity: 0.2, width: 1 },
                move: { enable: true, speed: 1, direction: "none", random: true, straight: false }
            },
            interactivity: {
                detect_on: "canvas",
                events: { onhover: { enable: true, mode: "grab" } },
                modes: { grab: { distance: 140, line_linked: { opacity: 0.5 } } }
            },
            retina_detect: true
        });
    }
});
// Projects Filtering
document.addEventListener('DOMContentLoaded', function() {
    // Filter projects
    const filterButtons = document.querySelectorAll('.filter-btn');
    const projectCards = document.querySelectorAll('.project-card');
    
    filterButtons.forEach(button => {
        button.addEventListener('click', () => {
            // Update active button
            filterButtons.forEach(btn => btn.classList.remove('active'));
            button.classList.add('active');
            
            const filterValue = button.getAttribute('data-filter');
            
            // Filter projects
            projectCards.forEach(card => {
                if (filterValue === 'all' || card.getAttribute('data-category') === filterValue) {
                    card.style.display = 'block';
                    setTimeout(() => {
                        card.style.opacity = '1';
                    }, 50);
                } else {
                    card.style.opacity = '0';
                    setTimeout(() => {
                        card.style.display = 'none';
                    }, 300);
                }
            });
        });
    });
    
    // Lightbox functionality
    const lightboxModal = document.getElementById('lightbox-modal');
    const lightboxImg = document.getElementById('lightbox-img');
    const lightboxCaption = document.getElementById('lightbox-caption');
    const previewButtons = document.querySelectorAll('.project-preview');
    const closeButton = document.querySelector('.lightbox-close');
    
    previewButtons.forEach(button => {
        button.addEventListener('click', function(e) {
            e.preventDefault();
            const imgSrc = this.getAttribute('href');
            const imgTitle = this.getAttribute('data-title');
            
            lightboxImg.src = imgSrc;
            lightboxCaption.textContent = imgTitle;
            lightboxModal.style.display = 'block';
            document.body.style.overflow = 'hidden';
        });
    });
    
    closeButton.addEventListener('click', () => {
        lightboxModal.style.display = 'none';
        document.body.style.overflow = 'auto';
    });
    
    lightboxModal.addEventListener('click', (e) => {
        if (e.target === lightboxModal) {
            lightboxModal.style.display = 'none';
            document.body.style.overflow = 'auto';
        }
    });
    
    // Close with ESC key
    document.addEventListener('keydown', (e) => {
        if (e.key === 'Escape' && lightboxModal.style.display === 'block') {
            lightboxModal.style.display = 'none';
            document.body.style.overflow = 'auto';
        }
    });
});
// Contact Form Submission
document.addEventListener('DOMContentLoaded', function() {
    const contactForm = document.getElementById('contactForm');
    
    if (contactForm) {
        contactForm.addEventListener('submit', function(e) {
            e.preventDefault();
            
            // Get form values
            const name = document.getElementById('name').value;
            const email = document.getElementById('email').value;
            const message = document.getElementById('message').value;
            
            // Here you would typically send the form data to a server
            // For demo purposes, we'll just log it and show an alert
            console.log({ name, email, message });
            
            alert('Thank you for your message! I will get back to you soon.');
            contactForm.reset();
            
            // Reset floating labels
            document.querySelectorAll('.form-group label').forEach(label => {
                label.style.top = '15px';
                label.style.left = '50px';
                label.style.fontSize = '1rem';
                label.style.background = 'transparent';
                label.style.color = 'rgba(255, 255, 255, 0.7)';
                label.style.padding = '0';
            });
        });
    }

    // Initialize particles for contact section if needed
    if (typeof particlesJS !== 'undefined' && document.getElementById('contact-particles')) {
        particlesJS('contact-particles', {
            particles: {
                number: { value: 40, density: { enable: true, value_area: 800 } },
                color: { value: "#ffffff" },
                shape: { type: "circle" },
                opacity: { value: 0.3, random: true },
                size: { value: 3, random: true },
                line_linked: { enable: true, distance: 150, color: "#8a2be2", opacity: 0.2, width: 1 },
                move: { enable: true, speed: 1, direction: "none", random: true, straight: false }
            },
            interactivity: {
                detect_on: "canvas",
                events: { onhover: { enable: true, mode: "grab" } },
                modes: { grab: { distance: 140, line_linked: { opacity: 0.5 } } }
            },
            retina_detect: true
        });
    }
});
// Scroll to Top Button
document.addEventListener('DOMContentLoaded', function() {
    const scrollBtn = document.querySelector('.scroll-top-btn');
    
    if (scrollBtn) {
        // Show/hide button on scroll
        window.addEventListener('scroll', function() {
            if (window.pageYOffset > 300) {
                scrollBtn.style.opacity = '1';
                scrollBtn.style.visibility = 'visible';
            } else {
                scrollBtn.style.opacity = '0';
                scrollBtn.style.visibility = 'hidden';
            }
        });
        
        // Smooth scroll to top
        scrollBtn.addEventListener('click', function(e) {
            e.preventDefault();
            window.scrollTo({
                top: 0,
                behavior: 'smooth'
            });
        });
    }
    
    // Smooth scroll for footer links
    const footerLinks = document.querySelectorAll('.footer-link');
    footerLinks.forEach(link => {
        link.addEventListener('click', function(e) {
            const targetId = this.getAttribute('href');
            if (targetId.startsWith('#')) {
                e.preventDefault();
                const targetElement = document.querySelector(targetId);
                if (targetElement) {
                    window.scrollTo({
                        top: targetElement.offsetTop - 80,
                        behavior: 'smooth'
                    });
                }
            }
        });
    });
});