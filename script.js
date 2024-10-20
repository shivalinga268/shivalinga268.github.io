document.addEventListener('DOMContentLoaded', function() {
    // Typing effect
    const typedTextSpan = document.querySelector(".typed-text");
    const cursorSpan = document.querySelector(".cursor");
    const textArray = ["Data Scientist", "Full Stack Developer", "AI Enthusiast", "Problem Solver"];
    const typingDelay = 100;
    const erasingDelay = 100;
    const newTextDelay = 2000; // Delay between current and next text
    let textArrayIndex = 0;
    let charIndex = 0;

    function type() {
        if (charIndex < textArray[textArrayIndex].length) {
            if (!cursorSpan.classList.contains("typing")) cursorSpan.classList.add("typing");
            typedTextSpan.textContent += textArray[textArrayIndex].charAt(charIndex);
            charIndex++;
            setTimeout(type, typingDelay);
        } 
        else {
            cursorSpan.classList.remove("typing");
            setTimeout(erase, newTextDelay);
        }
    }

    function erase() {
        if (charIndex > 0) {
            if (!cursorSpan.classList.contains("typing")) cursorSpan.classList.add("typing");
            typedTextSpan.textContent = textArray[textArrayIndex].substring(0, charIndex-1);
            charIndex--;
            setTimeout(erase, erasingDelay);
        } 
        else {
            cursorSpan.classList.remove("typing");
            textArrayIndex++;
            if(textArrayIndex >= textArray.length) textArrayIndex=0;
            setTimeout(type, typingDelay + 1100);
        }
    }

    if(textArray.length) setTimeout(type, newTextDelay + 250);

    // Particle background
    particlesJS("particles-js", {
        "particles": {
            "number": {
                "value": 80,
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
                },
                "polygon": {
                    "nb_sides": 5
                }
            },
            "opacity": {
                "value": 0.5,
                "random": false,
                "anim": {
                    "enable": false,
                    "speed": 1,
                    "opacity_min": 0.1,
                    "sync": false
                }
            },
            "size": {
                "value": 3,
                "random": true,
                "anim": {
                    "enable": false,
                    "speed": 40,
                    "size_min": 0.1,
                    "sync": false
                }
            },
            "line_linked": {
                "enable": true,
                "distance": 150,
                "color": "#ffffff",
                "opacity": 0.4,
                "width": 1
            },
            "move": {
                "enable": true,
                "speed": 6,
                "direction": "none",
                "random": false,
                "straight": false,
                "out_mode": "out",
                "bounce": false,
                "attract": {
                    "enable": false,
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
                    "mode": "repulse"
                },
                "onclick": {
                    "enable": true,
                    "mode": "push"
                },
                "resize": true
            },
            "modes": {
                "grab": {
                    "distance": 400,
                    "line_linked": {
                        "opacity": 1
                    }
                },
                "bubble": {
                    "distance": 400,
                    "size": 40,
                    "duration": 2,
                    "opacity": 8,
                    "speed": 3
                },
                "repulse": {
                    "distance": 200,
                    "duration": 0.4
                },
                "push": {
                    "particles_nb": 4
                },
                "remove": {
                    "particles_nb": 2
                }
            }
        },
        "retina_detect": true
    });

    // Smooth scrolling for navigation links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            document.querySelector(this.getAttribute('href')).scrollIntoView({
                behavior: 'smooth'
            });
        });
    });

    // Navbar color change on scroll
    const navbar = document.querySelector('header');
    window.addEventListener('scroll', () => {
        if (window.scrollY > 50) {
            navbar.style.backgroundColor = 'rgba(0, 0, 0, 1)';
        } else {
            navbar.style.backgroundColor = 'rgba(0, 0, 0, 0.8)';
        }
    });

    // Mobile menu toggle
    const menuToggle = document.querySelector('.menu-toggle');
    const navUl = document.querySelector('nav ul');

    if (menuToggle) {
        menuToggle.addEventListener('click', () => {
            navUl.classList.toggle('show');
        });
    }

    // Fade-in animation for sections
    const fadeElements = document.querySelectorAll('.fade-in');
    const fadeIn = (entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('visible');
                observer.unobserve(entry.target);
            }
        });
    };

    const fadeObserver = new IntersectionObserver(fadeIn, { threshold: 0.1 });

    fadeElements.forEach(element => {
        fadeObserver.observe(element);
    });

    // Form submission
    const contactForm = document.querySelector('.contact-form');
    if (contactForm) {
        contactForm.addEventListener('submit', function(e) {
            e.preventDefault();
            // Here you would typically send the form data to a server
            // For this example, we'll just log it to the console and show an alert
            console.log('Form submitted');
            alert('Thank you for your message! I will get back to you soon.');
            contactForm.reset();
        });
    }

    // Scroll to top button
    const scrollTopButton = document.createElement('button');
    scrollTopButton.innerHTML = '↑';
    scrollTopButton.setAttribute('aria-label', 'Scroll to top');
    scrollTopButton.classList.add('scroll-top');
    document.body.appendChild(scrollTopButton);

    window.addEventListener('scroll', () => {
        if (window.pageYOffset > 100) {
            scrollTopButton.classList.add('show');
        } else {
            scrollTopButton.classList.remove('show');
        }
    });

    scrollTopButton.addEventListener('click', () => {
        window.scrollTo({ top: 0, behavior: 'smooth' });
    });

    // Theme switcher
    const themeSwitcher = document.createElement('button');
    themeSwitcher.innerHTML = '🌓';
    themeSwitcher.setAttribute('aria-label', 'Switch theme');
    themeSwitcher.classList.add('theme-switcher');
    document.body.appendChild(themeSwitcher);

    let isDarkTheme = true; // Start with dark theme

    function setTheme(isDark) {
        document.body.classList.toggle('light-theme', !isDark);
        document.body.style.setProperty('--primary-color', isDark ? '#00a8e8' : '#0056b3');
        document.body.style.setProperty('--secondary-color', isDark ? '#00e676' : '#28a745');
        document.body.style.setProperty('--text-color', isDark ? '#ffffff' : '#333333');
        document.body.style.setProperty('--card-background', isDark ? 'rgba(30, 30, 30, 0.8)' : 'rgba(255, 255, 255, 0.8)');
        document.body.style.setProperty('--solid-background', isDark ? '#121212' : '#f8f9fa');
    }

    themeSwitcher.addEventListener('click', () => {
        isDarkTheme = !isDarkTheme;
        setTheme(isDarkTheme);
        localStorage.setItem('theme', isDarkTheme ? 'dark' : 'light');
    });

    // Check for saved theme preference
    const savedTheme = localStorage.getItem('theme');
    if (savedTheme) {
        isDarkTheme = savedTheme === 'dark';
        setTheme(isDarkTheme);
    }

    // Dynamic copyright year
    const currentYear = new Date().getFullYear();
    document.querySelector('footer p').innerHTML = `&copy; ${currentYear} Shivalinga Narayanappa. All rights reserved.`;

    // Interactive effects for home page, main buttons, and headings
    const homeSection = document.querySelector('#home');
    const mainButtons = document.querySelectorAll('.btn');
    const headings = document.querySelectorAll('h1, h2, h3, h4, h5, h6');

    // Parallax effect for home section
    window.addEventListener('scroll', () => {
        const scrollPosition = window.pageYOffset;
        homeSection.style.backgroundPositionY = scrollPosition * 0.7 + 'px';
    });

    // Glow effect for main buttons
    mainButtons.forEach(button => {
        button.addEventListener('mousemove', (e) => {
            const rect = button.getBoundingClientRect();
            const x = e.clientX - rect.left;
            const y = e.clientY - rect.top;
            
            button.style.setProperty('--x', `${x}px`);
            button.style.setProperty('--y', `${y}px`);
            button.classList.add('btn-glow');
        });

        button.addEventListener('mouseleave', () => {
            button.classList.remove('btn-glow');
        });
    });

    // 3D tilt effect for headings
    headings.forEach(heading => {
        heading.addEventListener('mousemove', (e) => {
            const rect = heading.getBoundingClientRect();
            const x = e.clientX - rect.left;
            const y = e.clientY - rect.top;
            
            const centerX = rect.width / 2;
            const centerY = rect.height / 2;
            
            const angleX = (y - centerY) / 20;
            const angleY = (centerX - x) / 20;
            
            heading.style.transform = `perspective(1000px) rotateX(${angleX}deg) rotateY(${angleY}deg)`;
        });

        heading.addEventListener('mouseleave', () => {
            heading.style.transform = 'perspective(1000px) rotateX(0) rotateY(0)';
        });
    });

    // Add ripple effect to buttons
    function createRipple(event) {
        const button = event.currentTarget;
        const circle = document.createElement('span');
        const diameter = Math.max(button.clientWidth, button.clientHeight);
        const radius = diameter / 2;

        circle.style.width = circle.style.height = `${diameter}px`;
        circle.style.left = `${event.clientX - button.offsetLeft - radius}px`;
        circle.style.top = `${event.clientY - button.offsetTop - radius}px`;
        circle.classList.add('ripple');

        const ripple = button.getElementsByClassName('ripple')[0];

        if (ripple) {
            ripple.remove();
        }

        button.appendChild(circle);
    }

    const buttons = document.getElementsByTagName('button');
    for (const button of buttons) {
        button.addEventListener('click', createRipple);
    }
});