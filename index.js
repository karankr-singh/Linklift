const loginModal = document.getElementById('login-modal');
const loginBtn = document.querySelector('.login-btn');
const closeBtn = document.querySelector('.close');

loginBtn.addEventListener('click', (e) => {
    e.preventDefault();
    loginModal.classList.add('show');
});

closeBtn.addEventListener('click', () => {
    loginModal.classList.remove('show');
});

window.addEventListener('click', (e) => {
    if (e.target === loginModal) {
        loginModal.classList.remove('show');
    }
});

// Contact form
const form = document.getElementById('contact-form');
const response = document.getElementById('form-response');

form.addEventListener('submit', (e) => {
    e.preventDefault();
    response.textContent = "Message sent successfully!";
    response.style.color = "green";
    form.reset();
});
