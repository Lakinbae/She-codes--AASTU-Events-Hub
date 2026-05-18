import { setupCountdown, getEventById } from './global.js';
import { events } from './eventData.js';

document.addEventListener('DOMContentLoaded', () => {
    // Feature the first event in the hero section for a prominent display
    const featuredEvent = events[0]; // You can easily change which event is featured
    if (featuredEvent) {
        document.getElementById('hero-section').style.backgroundImage = `url('${featuredEvent.image}')`;
        document.getElementById('event-type').innerText = featuredEvent.title;
        document.getElementById('main-title').innerHTML = featuredEvent.tagline; // Using innerHTML for potential gradient text in tagline
        document.getElementById('event-desc').innerText = featuredEvent.description;
        
        // Setup countdown for the featured event
        setupCountdown(featuredEvent.date, 'days', 'hours', 'mins');

        // Update hero buttons to link to the featured event's page
        document.getElementById('hero-learn-more-btn').href = `${featuredEvent.id}.html`;
        document.getElementById('hero-register-btn').href = `${featuredEvent.id}.html#register`;
    }

    // Populate the events grid with all available events
    const eventsGrid = document.getElementById('events-grid');
    if (eventsGrid) {
        if (events.length === 0) {
            eventsGrid.innerHTML = '<p>No upcoming events to display at the moment. Check back soon!</p>';
        } else {
            eventsGrid.innerHTML = events.map(event => `
                <div class="event-card glass-card">
                    <img src="${event.image}" alt="${event.title}" style="width:100%; height: 180px; object-fit: cover; border-radius: 8px; margin-bottom: 15px;">
                    <h3>${event.title}</h3>
                    <p>${event.description.substring(0, 100)}...</p>
                    <div class="card-footer">
                        <span class="date"><i class="far fa-calendar-alt"></i> ${new Date(event.date).toLocaleDateString()}</span>
                        <a href="${event.id}.html" class="btn btn-primary">View Details</a>
                    </div>
                </div>
            `).join('');
        }
    }
});
