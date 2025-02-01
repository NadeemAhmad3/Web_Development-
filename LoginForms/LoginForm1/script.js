// script.js
document.getElementById('loginForm').addEventListener('submit', function(event) {
    event.preventDefault(); // Prevent default form submission

    const name = document.getElementById('name').value.trim();
    const email = document.getElementById('email').value.trim();

    if (name === '' || email === '') {
        alert('Please fill in all fields.');
        return;
    }

    // Simple validation
    alert(`Welcome, ${name}!`);
});
