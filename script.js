function checkPassword() {
    const password = document.getElementById('password').value;
    const errorMessage = document.getElementById('error-message');
    
    if (password === '1829<3') {
        window.location.href = 'gallery.html'; // Redirect to the gallery page
    } else {
        errorMessage.style.display = 'block';
    }
}
