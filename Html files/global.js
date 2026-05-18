// Function to handle the mobile navigation toggle
document.addEventListener('DOMContentLoaded', () => {
    const hamburgerMenu = document.querySelector('.hamburger-menu');
    const mobileNavOverlay = document.querySelector('.mobile-nav-overlay');
    const mobileDropdownBtn = document.querySelector('.mobile-dropdown .mobile-dropbtn');
    const mobileDropdownContent = document.querySelector('.mobile-dropdown-content');

    hamburgerMenu.addEventListener('click', () => {
        mobileNavOverlay.classList.toggle('open');
        // Toggle body scroll when mobile nav is open
        document.body.style.overflow = mobileNavOverlay.classList.contains('open') ? 'hidden' : 'auto';
    });

    // Close overlay if clicking outside links or on the overlay itself
    mobileNavOverlay.addEventListener('click', (e) => {
        if (e.target.tagName === 'A' || e.target.classList.contains('mobile-nav-overlay')) {
            mobileNavOverlay.classList.remove('open');
            document.body.style.overflow = 'auto';
        }
    });

    if (mobileDropdownBtn) {
        mobileDropdownBtn.addEventListener('click', (e) => {
            e.preventDefault(); // Prevent default link behavior
            mobileDropdownContent.style.display = mobileDropdownContent.style.display === 'block' ? 'none' : 'block';
            const icon = mobileDropdownBtn.querySelector('i');
            if (icon) {
                icon.classList.toggle('fa-chevron-up');
                icon.classList.toggle('fa-chevron-down');
            }
        });
    }

    // Close mobile menu if window is resized above mobile breakpoint
    window.addEventListener('resize', () => {
        if (window.innerWidth > 1024 && mobileNavOverlay.classList.contains('open')) {
            mobileNavOverlay.classList.remove('open');
            document.body.style.overflow = 'auto';
            if (mobileDropdownContent) {
                 mobileDropdownContent.style.display = 'none';
                 const icon = mobileDropdownBtn.querySelector('i');
                 if (icon) {
                    icon.classList.remove('fa-chevron-up');
                    icon.classList.add('fa-chevron-down');
                 }
            }
        }
    });
});

// Utility for fetching event by ID from our mock data
import { events } from './eventData.js';

export function getEventById(id) {
    return events.find(event => event.id === id);
}

// Global countdown logic (can be used on multiple pages)
export function setupCountdown(targetDateString, daysId, hoursId, minsId) {
    const targetDate = new Date(targetDateString).getTime();

    const update = () => {
        const now = new Date().getTime();
        const diff = targetDate - now;

        const daysElement = document.getElementById(daysId);
        const hoursElement = document.getElementById(hoursId);
        const minsElement = document.getElementById(minsId);

        if (diff < 0) {
            if (daysElement) daysElement.innerText = "00";
            if (hoursElement) hoursElement.innerText = "00";
            if (minsElement) minsElement.innerText = "00";
            return;
        }

        const d = Math.floor(diff / (1000 * 60 * 60 * 24));
        const h = Math.floor((diff % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        const m = Math.floor((diff % (1000 * 60 * 60)) / (1000 * 60));

        if (daysElement) daysElement.innerText = d < 10 ? '0' + d : d;
        if (hoursElement) hoursElement.innerText = h < 10 ? '0' + h : h;
        if (minsElement) minsElement.innerText = m < 10 ? '0' + m : m;
    };

    update(); // Initial call
    setInterval(update, 1000);
}

// Mock API Call for form submission (simulates network request)
export async function mockApiSubmit(endpoint, data) {
    return new Promise(resolve => {
        setTimeout(() => {
            console.log(`Mock API POST to ${endpoint} with data:`, data);
            const success = Math.random() > 0.1; // 90% success rate
            if (success) {
                resolve({ success: true, message: 'Your submission was successful!' });
            } else {
                resolve({ success: false, message: 'Submission failed. Please try again.' });
            }
        }, 1500); // Simulate network latency
    });
}