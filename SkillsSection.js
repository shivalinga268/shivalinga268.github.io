document.addEventListener('DOMContentLoaded', function() {
    const skillsData = [
        { name: 'Python', icon: '<i class="fab fa-python"></i>' },
        { name: 'SQL', icon: '<i class="fas fa-database"></i>' },
        { name: 'Java', icon: '<i class="fab fa-java"></i>' },
        { name: 'HTML', icon: '<i class="fab fa-html5"></i>' },
        { name: 'CSS', icon: '<i class="fab fa-css3-alt"></i>' },
        { name: 'JavaScript', icon: '<i class="fab fa-js-square"></i>' },
        { name: 'Angular', icon: '<i class="fab fa-angular"></i>' },
        { name: 'Azure', icon: '<i class="fab fa-microsoft"></i>' },
        { name: 'Power BI', icon: '<i class="fas fa-chart-bar"></i>' },
        { name: 'Git', icon: '<i class="fab fa-git-alt"></i>' },
        { name: 'Machine Learning', icon: '<i class="fas fa-brain"></i>' },
        { name: 'Deep Learning', icon: '<i class="fas fa-network-wired"></i>' }
    ];

    function createSkillElement(skill) {
        const skillElement = document.createElement('div');
        skillElement.className = 'skill-item';
        skillElement.innerHTML = `
            <div class="skill-icon">${skill.icon}</div>
            <div class="skill-name">${skill.name}</div>
        `;
        return skillElement;
    }

    function renderSkills() {
        const skillsContainer = document.getElementById('skills-section');
        if (!skillsContainer) return;

        skillsData.forEach(skill => {
            skillsContainer.appendChild(createSkillElement(skill));
        });
    }

    renderSkills();
});