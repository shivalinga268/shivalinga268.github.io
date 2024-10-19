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
            if(textArrayIndex>=textArray.length) textArrayIndex=0;
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
    // Skills section
    const skills = [
        { name: 'Python', icon: '🐍' },
        { name: 'SQL', icon: '🗃️' },
        { name: 'Java', icon: '☕' },
        { name: 'HTML', icon: '📄' },
        { name: 'CSS', icon: '🎨' },
        { name: 'JavaScript', icon: 'JS' },
        { name: 'Angular', icon: 'Ng' },
        { name: 'Azure', icon: '☁️' },
        { name: 'Power BI', icon: '📊' },
        { name: 'Git', icon: '🔀' },
        { name: 'Machine Learning', icon: '🤖' },
        { name: 'Deep Learning', icon: '🧠' }
    ];

    const skillsSection = document.getElementById('skills-section');
    if (skillsSection) {
        const skillsHTML = skills.map(skill => `
            <div class="skill-item">
                <div class="skill-icon">${skill.icon}</div>
                <div class="skill-name">${skill.name}</div>
            </div>
        `).join('');
        skillsSection.innerHTML = skillsHTML;
    }

    // Project cards hover effect
    const projectCards = document.querySelectorAll('.project-card');
    projectCards.forEach(card => {
        card.addEventListener('mouseenter', () => {
            card.style.transform = 'translateY(-10px)';
        });
        card.addEventListener('mouseleave', () => {
            card.style.transform = 'translateY(0)';
        });
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

    // Lazy loading for images
    const lazyImages = document.querySelectorAll('img[data-src]');
    const lazyLoad = (entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const img = entry.target;
                img.src = img.dataset.src;
                img.removeAttribute('data-src');
                observer.unobserve(img);
            }
        });
    };

    const imageObserver = new IntersectionObserver(lazyLoad, { threshold: 0.1 });
    lazyImages.forEach(img => imageObserver.observe(img));

    // Dynamic copyright year
    const currentYear = new Date().getFullYear();
    document.querySelector('footer p').innerHTML = `&copy; ${currentYear} Shivalinga Narayanappa. All rights reserved.`;

    // Add animation to timeline items
    const timelineItems = document.querySelectorAll('.timeline-item');
    const animateTimeline = (entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('animate');
                observer.unobserve(entry.target);
            }
        });
    };

    const timelineObserver = new IntersectionObserver(animateTimeline, { threshold: 0.1 });
    timelineItems.forEach(item => timelineObserver.observe(item));

    // Skill progress animation
    const skillItems = document.querySelectorAll('.skill-item');
    const animateSkills = (entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('animate');
                observer.unobserve(entry.target);
            }
        });
    };

    const skillObserver = new IntersectionObserver(animateSkills, { threshold: 0.1 });
    skillItems.forEach(item => skillObserver.observe(item));

    // Theme switcher
    const themeSwitcher = document.createElement('button');
    themeSwitcher.innerHTML = '🌓';
    themeSwitcher.setAttribute('aria-label', 'Switch theme');
    themeSwitcher.classList.add('theme-switcher');
    document.body.appendChild(themeSwitcher);

    let isDarkTheme = true; // Start with dark theme

    themeSwitcher.addEventListener('click', () => {
        isDarkTheme = !isDarkTheme;
        document.body.classList.toggle('light-theme', !isDarkTheme);
        localStorage.setItem('theme', isDarkTheme ? 'dark' : 'light');
    });

    // Check for saved theme preference
    const savedTheme = localStorage.getItem('theme');
    if (savedTheme) {
        isDarkTheme = savedTheme === 'dark';
        document.body.classList.toggle('light-theme', !isDarkTheme);
    }

    // Add custom cursor
    const cursor = document.createElement('div');
    cursor.classList.add('custom-cursor');
    document.body.appendChild(cursor);

    document.addEventListener('mousemove', (e) => {
        cursor.style.left = e.clientX + 'px';
        cursor.style.top = e.clientY + 'px';
    });

    // Performance optimization
    window.addEventListener('load', () => {
        // Defer non-critical scripts
        const deferredScripts = document.querySelectorAll('script[data-defer]');
        deferredScripts.forEach(script => {
            script.setAttribute('src', script.getAttribute('data-defer'));
        });
    });
});
document.addEventListener('DOMContentLoaded', function() {
    const form = document.getElementById('contact-form');

    form.addEventListener('submit', function(e) {
        e.preventDefault();

        const name = document.getElementById('name').value;
        const email = document.getElementById('email').value;
        const subject = document.getElementById('subject').value;
        const message = document.getElementById('message').value;

        const mailtoLink = `mailto:msshiva286@gmail.com?subject=${encodeURIComponent(subject || 'Contact from Portfolio')}&body=${encodeURIComponent(`Name: ${name}\nEmail: ${email}\n\nMessage:\n${message}`)}`;

        window.location.href = mailtoLink;

        // Optional: Reset the form
        form.reset();

        // Optional: Show a confirmation message
        alert('Thank you for your message. Your default email client should now open with a pre-filled email. If it doesn\'t, please send your message directly to msshiva286@gmail.com');
    });
});