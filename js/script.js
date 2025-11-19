// Real-time clock
function updateClock() {
    const now = new Date();
    const timeString = now.toLocaleTimeString();
    document.getElementById('clock').textContent = timeString;
}
setInterval(updateClock, 1000);
updateClock();

// Accordion functionality
const accordionBtns = document.querySelectorAll('.accordion-btn');
accordionBtns.forEach(btn => {
    btn.addEventListener('click', () => {
        const content = btn.nextElementSibling;
        content.style.display = content.style.display === 'block' ? 'none' : 'block';
    });
});

// Tabs functionality
const tabBtns = document.querySelectorAll('.tab-btn');
const tabContents = document.querySelectorAll('.tab-content');
tabBtns.forEach(btn => {
    btn.addEventListener('click', () => {
        tabBtns.forEach(b => b.classList.remove('active'));
        tabContents.forEach(c => c.classList.remove('active'));
        btn.classList.add('active');
        const tabId = btn.getAttribute('data-tab');
        document.getElementById(tabId).classList.add('active');
    });
});

// Gallery lightbox
const galleryImgs = document.querySelectorAll('.gallery img');
const lightbox = document.getElementById('lightbox');
const lightboxImg = document.getElementById('lightbox-img');
const closeBtn = document.querySelector('.close');
galleryImgs.forEach(img => {
    img.addEventListener('click', () => {
        lightbox.style.display = 'flex';
        lightboxImg.src = img.getAttribute('data-full');
    });
});
closeBtn.addEventListener('click', () => {
    lightbox.style.display = 'none';
});

// Google Map initialization
function initMap() {
    const mapElement = document.getElementById('google-map');
    if (mapElement) {
        const map = new google.maps.Map(mapElement, {
            center: { lat: -34.397, lng: 150.644 },
            zoom: 8
        });
    }
}
window.onload = initMap;

// Contact form submission using EmailJS
(function() {
    emailjs.init("your_user_id"); // Replace with your EmailJS user ID
})();

document.getElementById('contact-form').addEventListener('submit', function(event) {
    event.preventDefault();
    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const message = document.getElementById('message').value;

    emailjs.send("your_service_id", "your_template_id", {
        from_name: name,
        from_email: email,
        message: message
    }).then(function(response) {
        document.getElementById('feedback').textContent = 'Message sent successfully!';
    }, function(error) {
        document.getElementById('feedback').textContent = 'Failed to send message.';
    });
});

// Enquiry form submission
document.getElementById('enquiry-form').addEventListener('submit', function(event) {
    event.preventDefault();
    const name = document.getElementById('enquiry-name').value;
    const email = document.getElementById('enquiry-email').value;
    const subject = document.getElementById('enquiry-subject').value;

    // Placeholder for enquiry handling
    document.getElementById('enquiry-feedback').textContent = 'Enquiry submitted successfully!';
});

// Modal functionality
const modal = document.getElementById('modal');
const openModalBtn = document.getElementById('open-modal');
const closeModalBtn = document.querySelector('.close-modal');
openModalBtn.addEventListener('click', () => {
    modal.style.display = 'flex';
});
closeModalBtn.addEventListener('click', () => {
    modal.style.display = 'none';
});
window.addEventListener('click', (event) => {
    if (event.target === modal) {
        modal.style.display = 'none';
    }
});

// Search functionality
document.getElementById('search-btn').addEventListener('click', () => {
    const query = document.getElementById('search').value.toLowerCase();
    const sections = document.querySelectorAll('section');
    sections.forEach(section => {
        const text = section.textContent.toLowerCase();
        section.style.display = text.includes(query) ? 'block' : 'none';
    });
});
