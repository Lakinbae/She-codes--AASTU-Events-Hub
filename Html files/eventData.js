
// Data for all events and global information
export const events = [
    {
        id: 'bootcamp',
        title: 'She Codes Bootcamp 2024',
        tagline: 'Master the Art of Modern Coding',
        description: 'An intensive 3-month program designed to transform aspiring women into job-ready frontend and backend developers. Focus on practical skills, real-world projects, and mentorship from industry experts.',
        image: 'https://images.unsplash.com/photo-1542831371-dce20b9e950e?auto=format&fit=crop&w=1920&q=80',
        date: '2024-12-31T00:00:00', // Target date for countdown
        details: {
            about: 'Our bootcamp offers a comprehensive curriculum covering HTML, CSS, JavaScript, React, Node.js, databases, and deployment. Small class sizes ensure personalized attention and a collaborative learning environment, preparing you for a successful career in tech.',
            schedule: [
                { day: 'Week 1-4', topic: 'Frontend Fundamentals (HTML, CSS, JS)', time: 'Mon-Fri, 9am-5pm' },
                { day: 'Week 5-8', topic: 'React.js & State Management', time: 'Mon-Fri, 9am-5pm' },
                { day: 'Week 9-12', topic: 'Backend Development (Node.js, Express, DB)', time: 'Mon-Fri, 9am-5pm' },
                { day: 'Week 12+', topic: 'Final Project & Career Prep', time: 'Ongoing' }
            ],
            instructors: [
                { id: 1, name: 'Dr. Almaz Kebede', title: 'Lead Frontend Instructor', bio: 'Expert in React & UI/UX principles with over 10 years of experience.', image: 'https://i.pravatar.cc/150?img=1' },
                { id: 2, name: 'Eng. Sarah Ahmed', title: 'Lead Backend Instructor', bio: 'Specializes in Node.js & scalable database architecture. A true fullstack mentor.', image: 'https://i.pravatar.cc/150?img=2' },
                { id: 3, name: 'Ms. Bethlehem Abebe', title: 'Career Coach & Mentor', bio: 'Helps students land their dream tech jobs with her extensive network and coaching skills.', image: 'https://i.pravatar.cc/150?img=3' }
            ],
            faqs: [
                { question: 'What are the prerequisites for the bootcamp?', answer: 'Basic computer literacy, a strong desire to learn, and commitment to the program. No prior coding experience is strictly required.' },
                { question: 'Is financial aid or scholarships available?', answer: 'Yes, we offer a limited number of scholarships based on need and merit. Please check the application page for details.' },
                { question: 'What is the class schedule?', answer: 'Classes are held Monday to Friday, 9:00 AM to 5:00 PM, with breaks. Evening and weekend study is expected.' },
                { question: 'What kind of career support is offered?', answer: 'We provide resume building workshops, interview preparation, portfolio reviews, and connections to our industry partners for job placement.' }
            ]
        }
    },
    {
        id: 'hackathon',
        title: 'Annual Innovation Hackathon',
        tagline: 'Code for a Cause: Solving Community Challenges',
        description: 'A 48-hour intense coding marathon where teams build innovative solutions to real-world problems. Great prizes, networking, and a chance to make an impact.',
        image: 'https://images.unsplash.com/photo-1596542171221-5079860b73c4?auto=format&fit=crop&w=1920&q=80',
        date: '2025-01-20T09:00:00',
        details: {
            introduction: 'Unleash your creativity and problem-solving skills! Form teams, brainstorm ideas, and bring your tech solutions to life within 48 hours. This is an unparalleled opportunity to innovate and impact your community.',
            prizes: [
                { place: '1st Place', award: '20,000 ETB + Mentorship & Incubation Spot' },
                { place: '2nd Place', award: '10,000 ETB + High-End Tech Gadgets' },
                { place: '3rd Place', award: '5,000 ETB + Exclusive Swag Bag & Certificates' }
            ],
            sponsors: [
                { name: 'Ethio Telecom', logo: 'https://upload.wikimedia.org/wikipedia/commons/thumb/1/1b/Ethio_telecom_logo.svg/langet-200px-Ethio_telecom_logo.svg.png' },
                { name: 'Gebeya', logo: 'https://media.licdn.com/dms/image/C4D0BAQG567M811uM7Q/company-logo_200_200/0/1630653631620?e=2147483647&v=beta&t=o1t0t5O4-92eS_U24r2P4vP3mO1V8-S3_1p_4fJ1g-A' }
            ],
            timeline: [
                { day: 'Jan 20', time: '9:00 AM', event: 'Opening Ceremony & Theme Reveal' },
                { day: 'Jan 20', time: '10:00 AM', event: 'Coding Begins & Mentorship Starts' },
                { day: 'Jan 21', time: 'All Day', event: 'Continued Development & Workshops' },
                { day: 'Jan 22', time: '12:00 PM', event: 'Project Submission Deadline' },
                { day: 'Jan 22', time: '2:00 PM', event: 'Judging & Presentations' },
                { day: 'Jan 22', time: '5:00 PM', event: 'Awards Ceremony & Closing' }
            ]
        }
    },
    {
        id: 'conference',
        title: 'Women in Tech Conference',
        tagline: 'Inspiring the Next Wave of Innovators',
        description: 'A day of inspiring talks, workshops, and networking with leading women in the Ethiopian tech industry. Connect, learn, and grow your professional network.',
        image: 'https://images.unsplash.com/photo-1556761175-5973dd3039d7?auto=format&fit=crop&w=1920&q=80',
        date: '2025-03-08T09:00:00',
        details: {
            speakers: [
                { id: 4, name: 'Aisha Hassan', title: 'AI Ethicist, Google', bio: 'Pioneering responsible AI development and its impact on society.', image: 'https://i.pravatar.cc/150?img=4' },
                { id: 5, name: 'Lia Tadesse', title: 'CTO, Health-Tech Startup', bio: 'Built a successful health-tech platform transforming rural healthcare access.', image: 'https://i.pravatar.cc/150?img=5' }
            ],
            agenda: [
                { time: '9:00 AM', event: 'Registration & Welcome Coffee' },
                { time: '10:00 AM', event: 'Opening Remarks & Introduction' },
                { time: '10:30 AM', event: 'Keynote: Aisha Hassan - The Future of AI in Africa' },
                { time: '11:30 AM', event: 'Panel Discussion: Women Leading Innovation in FinTech' },
                { time: '12:30 PM', event: 'Lunch & Networking Session' },
                { time: '2:00 PM', event: 'Breakout Workshops (Choose Your Track)' },
                { time: '3:30 PM', event: 'Fireside Chat with Lia Tadesse' },
                { time: '4:30 PM', event: 'Closing Remarks & Future Initiatives' }
            ],
            venue: 'AASTU Main Auditorium, Exhibition Hall A',
            gallery: [
                'https://images.unsplash.com/photo-1517048676732-d65bc9c46083?auto=format&fit=crop&w=600&q=80',
                'https://images.unsplash.com/photo-1542744173-8e7e53415c6b?auto=format&fit=crop&w=600&q=80',
                'https://images.unsplash.com/photo-1498050108023-c5249f4cd085?auto=format&fit=crop&w=600&q=80',
                'https://images.unsplash.com/photo-1601662528148-936b81a7b003?auto=format&fit=crop&w=600&q=80',
                'https://images.unsplash.com/photo-1563986968168-12e030043c72?auto=format&fit=crop&w=600&q=80'
            ],
            partners: [
                { name: 'Ministry of Innovation & Technology', logo: 'https://via.placeholder.com/150/0000FF/FFFFFF?text=MINt' },
                { name: 'Sheger Innovation Hub', logo: 'https://via.placeholder.com/150/FF0000/FFFFFF?text=Sheger' },
                { name: 'Ethiopian Women in Tech', logo: 'https://via.placeholder.com/150/008080/FFFFFF?text=EWIT' }
            ]
        }
    },
    {
        id: 'ai_workshop',
        title: 'AI & Data Science Workshop',
        tagline: 'Unlocking Insights with Machine Learning',
        description: 'A hands-on workshop covering the fundamentals of AI, machine learning algorithms, and data analysis using Python. Perfect for beginners and intermediate learners.',
        image: 'https://images.unsplash.com/photo-1620712943407-efb50742a22b?auto=format&fit=crop&w=1920&q=80',
        date: '2025-04-15T10:00:00',
        details: {
            about: 'Dive into the exciting world of Artificial Intelligence and Data Science. This workshop offers a practical approach to learning core concepts of ML, building predictive models, and visualizing data using Python. Engage in interactive sessions and solidify your understanding.',
            schedule: [
                { day: 'Day 1', topic: 'Introduction to AI & Python for Data Science', time: '10am-4pm' },
                { day: 'Day 2', topic: 'Supervised Learning & Model Evaluation', time: '10am-4pm' },
                { day: 'Day 3', topic: 'Unsupervised Learning & Data Visualization', time: '10am-4pm' }
            ],
            instructors: [
                { id: 6, name: 'Dr. Yonas Mamo', title: 'Lead Data Scientist, Local AI Lab', bio: 'Specialist in Natural Language Processing (NLP) and Computer Vision, with extensive industry experience.', image: 'https://i.pravatar.cc/150?img=6' }
            ],
            faqs: [
                { question: 'What software and tools do I need for the workshop?', answer: 'Participants will need Anaconda (with Jupyter Notebook) installed, Python 3.8+ and common libraries like Pandas, NumPy, Scikit-learn.' },
                { question: 'Is prior coding experience required to attend?', answer: 'Basic proficiency in Python programming is highly recommended. Concepts will be explained, but fundamental syntax knowledge is assumed.' },
                { question: 'Will certificates be provided?', answer: 'Yes, participants who complete all sessions and assignments will receive a certificate of completion.' }
            ]
        }
    },
    {
        id: 'innovation_fair',
        title: 'Student Innovation Fair',
        tagline: 'Showcasing AASTU\'s Brightest Ideas',
        description: 'An annual exhibition where AASTU students present their innovative projects, prototypes, and research to the university community and industry partners.',
        image: 'https://images.unsplash.com/photo-1547481878-a0d33e721a36?auto=format&fit=crop&w=1920&q=80',
        date: '2025-05-10T10:00:00',
        details: {
            introduction: 'Discover groundbreaking projects from AASTU students across various disciplines. The Innovation Fair is an unparalleled opportunity to network with aspiring innovators, potential collaborators, and industry leaders, fostering a culture of creativity.',
            prizes: [
                { place: 'Best Social Impact Project', award: 'Grant + Mentorship & Media Exposure' },
                { place: 'Most Innovative Concept', award: 'High-Value Tech Gadgets & Certificate' },
                { place: 'Audience Choice Award', award: 'Gift Voucher & Recognition' }
            ],
            sponsors: [ // Event-specific partners (can be different from global)
                { name: 'AASTU Incubation Center', logo: 'https://via.placeholder.com/150/00FFFF/000000?text=AASTU+Inc' },
                { name: 'Tech Ethiopia', logo: 'https://via.placeholder.com/150/800080/FFFFFF?text=Tech+Eth' }
            ],
            timeline: [
                { day: 'April 20, 2025', time: '5:00 PM', event: 'Project Submission Deadline' },
                { day: 'May 05, 2025', time: 'All Day', event: 'Preliminary Judging (Internal)' },
                { day: 'May 10, 2025', time: '10:00 AM', event: 'Fair Opening & Public Exhibition' },
                { day: 'May 10, 2025', time: '1:00 PM', event: 'Final Judging & Industry Review' },
                { day: 'May 10, 2025', time: '4:00 PM', event: 'Awards Ceremony & Closing Remarks' }
            ]
        }
    }
];

// Global Sponsors (for the Sponsors page)
export const globalSponsors = [
    { name: 'Ethio Telecom', logo: 'https://upload.wikimedia.org/wikipedia/commons/thumb/1/1b/Ethio_telecom_logo.svg/langet-200px-Ethio_telecom_logo.svg.png' },
    { name: 'Gebeya', logo: 'https://media.licdn.com/dms/image/C4D0BAQG567M811uM7Q/company-logo_200_200/0/1630653631620?e=2147483647&v=beta&t=o1t0t5O4-92eS_U24r2P4vP3mO1V8-S3_1p_4fJ1g-A' },
    { name: 'Ministry of Innovation & Technology', logo: 'https://via.placeholder.com/150/0000FF/FFFFFF?text=MINt' },
    { name: 'Sheger Innovation Hub', logo: 'https://via.placeholder.com/150/FF0000/FFFFFF?text=Sheger' },
    { name: 'AASTU Incubation Center', logo: 'https://via.placeholder.com/150/00FFFF/000000?text=AASTU+Inc' },
    { name: 'Tech Ethiopia', logo: 'https://via.placeholder.com/150/800080/FFFFFF?text=Tech+Eth' }
];

// Global FAQs (for the main FAQ page)
export const globalFaqs = [
    { question: 'How can I register for an event?', answer: 'You can register for any event by navigating to its dedicated microsite and filling out the registration form. Look for the "Register Now" button on the main events page or within each event\'s specific page.' },
    { question: 'Are these events open to non-AASTU students?', answer: 'While primarily aimed at AASTU students, many of our events welcome participants from other universities and institutions. Please check the specific event details for eligibility criteria.' },
    { question: 'How can my company become a sponsor?', answer: 'We welcome partnerships! Please visit our Sponsors page for more information on sponsorship tiers and benefits, and use the contact form to send us an inquiry. You can also email us directly at partnerships@aastuevents.et.' },
    { question: 'What is She Codes AASTU?', answer: 'She Codes AASTU is a student-led initiative at Addis Ababa Science and Technology University (AASTU), dedicated to fostering a vibrant community for women in technology. We organize various events, workshops, and projects to empower and uplift female tech talent.' },
    { question: 'Where can I find the detailed schedule for all events?', answer: 'A consolidated schedule for all upcoming events is available on our dedicated Schedule page. For in-depth agendas and timelines, please visit the individual event microsites.' },
    { question: 'Is there a code of conduct for participants?', answer: 'Yes, we uphold a strict code of conduct to ensure a safe, respectful, and inclusive environment for all participants. Details are available on our About Us page and at event registration.' },
];
