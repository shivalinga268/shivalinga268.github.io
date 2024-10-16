// Project data
const projectData = {
    'stock-prediction': {
        title: 'Stock Price Prediction',
        description: 'Developed an LSTM-based machine learning model to predict stock prices, achieving 85% accuracy.',
        technologies: ['Python', 'TensorFlow', 'Keras', 'Pandas', 'Matplotlib'],
        features: [
            'Processed and analyzed large financial datasets using PySpark and Pandas',
            'Implemented parameter tuning and experimentation frameworks',
            'Created interactive dashboards using Power BI for visualization'
        ]
    },
    'ecommerce': {
        title: 'E-commerce Platform',
        description: 'Developed a scalable e-commerce platform using Spring Boot and Angular, implementing ML models for customer behavior prediction.',
        technologies: ['Java', 'Spring Boot', 'Angular', 'PostgreSQL', 'Docker'],
        features: [
            'Implemented RESTful APIs for seamless front-end and back-end integration',
            'Utilized Git for version control and collaborative development',
            'Integrated payment gateway and order management system'
        ]
    },
    'student-performance': {
        title: 'Student Performance Prediction',
        description: 'Built an ML model to predict student performance with 92% accuracy using Python and scikit-learn.',
        technologies: ['Python', 'scikit-learn', 'Pandas', 'NumPy', 'Matplotlib'],
        features: [
            'Analyzed and interpreted data from 5,000+ students',
            'Implemented XGBoost and Random Forest models',
            'Created a user-friendly interface for educators to input student data and receive predictions'
        ]
    }
};

document.addEventListener('DOMContentLoaded', () => {
    // Smooth scrolling for navigation links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            document.querySelector(this.getAttribute('href')).scrollIntoView({
                behavior: 'smooth'
            });
        });
    });

    // Form submission handling
    const contactForm = document.getElementById('contact-form');
    contactForm.addEventListener('submit', (e) => {
        e.preventDefault();
        // Here you would typically send the form data to a server
        // For this example, we'll just log it to the console
        const formData = new FormData(contactForm);
        console.log('Form submitted with data:', Object.fromEntries(formData));
        alert('Thank you for your message! I\'ll get back to you soon.');
        contactForm.reset();
    });

    // Intersection Observer for fade-in animations
    const observer = new IntersectionObserver((entries) => {
        entries.forEach((entry) => {
            if (entry.isIntersecting) {
                entry.target.classList.add('fade-in');
            }
        });
    }, { threshold: 0.1 });

    document.querySelectorAll('section').forEach((section) => {
        observer.observe(section);
    });

    // Modal functionality
    const modal = document.getElementById('project-modal');
    const modalTitle = document.getElementById('modal-title');
    const modalDescription = document.getElementById('modal-description');
    const modalTechnologies = document.getElementById('modal-technologies');
    const modalFeatures = document.getElementById('modal-features');
    const closeBtn = document.getElementsByClassName('close')[0];

    document.querySelectorAll('.project-card').forEach(card => {
        card.addEventListener('click', () => {
            const project = projectData[card.dataset.project];
            modalTitle.textContent = project.title;
            modalDescription.textContent = project.description;
            modalTechnologies.innerHTML = project.technologies.map(tech => `<li>${tech}</li>`).join('');
            modalFeatures.innerHTML = project.features.map(feature => `<li>${feature}</li>`).join('');
            modal.style.display = 'block';
        });
    });

    closeBtn.onclick = () => {
        modal.style.display = 'none';
    };

    window.onclick = (event) => {
        if (event.target == modal) {
            modal.style.display = 'none';
        }
    };
});

// Add a class to animate the hero section on load
window.addEventListener('load', () => {
    document.querySelector('.hero').classList.add('loaded');
});
