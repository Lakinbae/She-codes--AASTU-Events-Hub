import { setupCountdown, mockApiSubmit } from './global.js';
import { events } from './eventData.js';

document.addEventListener('DOMContentLoaded', () => {
    const data = events.find(e => e.id === 'hackathon');
    setupCountdown(data.date, 'days', 'hours');

    const form = document.getElementById('hackathonForm');
    form.addEventListener('submit', async (e) => {
        e.preventDefault();
        const team = document.getElementById('teamName').value;
        
        // Simulating API Call
        const result = await mockApiSubmit('/register', { team });
        if(result.success) {
            window.location.href = `success.html?name=${team}&event=Hackathon`;
        }
    });
});