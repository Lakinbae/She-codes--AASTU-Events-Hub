import { setupCountdown, getEventById, mockApiSubmit } from './global.js';

document.addEventListener('DOMContentLoaded', () => {
    const bootcampEvent = getEventById('bootcamp');

    if (bootcampEvent) {
        // Set hero background and content
        document.getElementById('hero-section').style.backgroundImage = `url('${bootcampEvent.image}')`;
        document.getElementById('bootcamp-title').innerHTML = bootcampEvent.tagline;
        document.getElementById('bootcamp-tagline').innerText = bootcampEvent.description;
        setupCountdown(bootcampEvent.date, 'days', 'hours', 'mins');

        // About section
        document.getElementById('bootcamp-about-text').innerText = bootcampEvent.details.about;

        // Schedule section
        const scheduleBody = document.getElementById('bootcamp-schedule');
        if (scheduleBody) {
            scheduleBody.innerHTML = bootcampEvent.details.schedule.map(item => `
                <tr>
                    <td>${item.day}</td>
                    <td>${item.topic}</td>
                    <td>${item.time}</td>
                </tr>
            `).join('');
        }

        // Instructors section
        const instructorList = document.getElementById('instructor-list');
        if (instructorList) {
            instructorList.innerHTML = bootcampEvent.details.instructors.map(instructor => `
                <div class="speaker-card glass-card" style="text-align: center;">
                    <img src="${instructor.image}" alt="${instructor.name}">
                    <h3>${instructor.name}</h3>
                    <p class="title gradient-text">${instructor.title}</p>
                    <p>${instructor.bio}</p>
                </div>
            `).join('');
        }

        // FAQ section
        const faqList = document.getElementById('bootcamp-faq-list');
        if (faqList) {
            faqList.innerHTML = bootcampEvent.details.faqs.map((faq, index) => `
                <div class="faq-item glass-card" data-index="${index}">
                    <div class="faq-question">
                        ${faq.question} <i class="fas fa-chevron-down"></i>
                    </div>
                    <div class="faq-answer">
                        <p>${faq.answer}</p>
                    </div>
                </div>
            `).join('');

            // Add event listeners for FAQ toggling
            document.querySelectorAll('.faq-question').forEach(question => {                question.addEventListener('click', () => {
                    const faqItem = question.closest('.faq-item');
                    faqItem.classList.toggle('open');
                });
            });
        }
    }

    // Registration Form Submission
    const bootcampRegistrationForm = document.getElementById('bootcampRegistrationForm');
    if (bootcampRegistrationForm) {
        bootcampRegistrationForm.addEventListener('submit', async (e) => {
            e.preventDefault();
            const btn = e.target.querySelector('button[type="submit"]');
            const statusMsg = document.getElementById('bootcamp-status-msg');

            const payload = {
                event: 'bootcamp',
                fullname: document.getElementById('reg-fullname').value,
                email: document.getElementById('reg-email').value,
                phone: document.getElementById('reg-phone').value,
                track: document.getElementById('reg-track').value,
                experience: document.getElementById('reg-experience').value
            };

            btn.innerText = "Applying...";
            btn.disabled = true;
            statusMsg.innerHTML = '<span style="color: var(--accent-blue);">Processing your application...</span>';
            statusMsg.classList.remove('success', 'error');

            try {
                const response = await mockApiSubmit('/api/bootcamp/register', payload); // Use mock API

                if (response.success) {
                    statusMsg.innerHTML = response.message;
                    statusMsg.classList.add('success');
                    bootcampRegistrationForm.reset();
                    // Redirect to a success page with dynamic parameters
                    window.location.href = `success.html?event=She Codes Bootcamp&name=${encodeURIComponent(payload.fullname)}`;
                } else {
                    statusMsg.innerHTML = response.message;
                    statusMsg.classList.add('error');
                }
            } catch (error) {
                statusMsg.innerHTML = "An unexpected error occurred. Please check your network.";
                statusMsg.classList.add('error');
                console.error('Registration error:', error);
            } finally {
                btn.innerText = "Submit Application";
                btn.disabled = false;
            }
        });
    }
});