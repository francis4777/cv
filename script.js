document.addEventListener('DOMContentLoaded', function() {
    document.getElementById('name').textContent = 'Okello Francis';
    document.getElementById('role').textContent = 'Web Developer';
    document.getElementById('contact-info').innerHTML = 'Email: okellof1200@gmail.com';
    document.getElementById('phone-info').textContent = 'Phone: (555) 555-5555';
    document.getElementById('about-me').textContent = 'Passionate web developer with experience in building dynamic websites.';
    
    let experienceHtml = `
        <div class="experience-item">
            <h4>Frontend Developer - ABC Corp <span>(2020 - Present)</span></h4>
            <p>Worked on building responsive websites using HTML, CSS, and JavaScript.</p>
        </div>
        <div class="experience-item">
            <h4>Intern - XYZ Ltd <span>(2019 - 2020)</span></h4>
            <p>Assisted in developing web applications and contributing to team projects.</p>
        </div>`;
    
    document.getElementById('experience-list').innerHTML = experienceHtml;
    
    let educationHtml = `
        <h4>Diploma in Information Technolgy - University XYZ <span(2016 - 2020)</span></h4>
        <p>Graduated with honors, focused on web development and software web applications</p>`;
    
    document.getElementById('education-list').innerHTML = educationHtml;

    let skillsHtml = `
        <li>HTML</li>
        <li>CSS</li>
        <li>JavaScript</li>
        <li>React</li>
        <li>Node.js</li>`;
    
    document.getElementById('skills-list').innerHTML = skillsHtml;
});