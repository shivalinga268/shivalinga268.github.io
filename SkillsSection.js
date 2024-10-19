// SkillsSection.js
document.addEventListener('DOMContentLoaded', function() {
    const skillsData = [
        { name: 'Azure', icon: '☁️' },
        { name: 'Power BI', icon: '📊' },
        { name: 'Git', icon: '🔀' },
        { name: 'Machine Learning', icon: '🤖' },
        { name: 'Deep Learning', icon: '🧠' }
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

        skillsContainer.innerHTML = '<h2 class="section-title">Skills & Technologies</h2>';
        const skillsGrid = document.createElement('div');
        skillsGrid.className = 'skills-grid';

        skillsData.forEach(skill => {
            skillsGrid.appendChild(createSkillElement(skill));
        });

        skillsContainer.appendChild(skillsGrid);
    }

    renderSkills();
});