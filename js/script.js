document.getElementById('loginForm').addEventListener('submit', function(e) {
    e.preventDefault();
    const email = document.getElementById('loginEmail').value;
    const password = document.getElementById('loginPassword').value;
    
    // Add your login validation logic here
    if (email && password) {
        alert('Login successful!');
        // Add your login API call here
    }
});

document.getElementById('registerForm').addEventListener('submit', function(e) {
    e.preventDefault();
    const name = document.getElementById('registerName').value;
    const email = document.getElementById('registerEmail').value;
    const password = document.getElementById('registerPassword').value;
    const confirmPass = document.getElementById('confirmPassword').value;
    
    // Basic validation
    if (password !== confirmPass) {
        alert('Passwords do not match!');
        return;
    }
    
    if (name && email && password && confirmPass) {
        alert('Registration successful!');
        // Add your registration API call here
    }
});