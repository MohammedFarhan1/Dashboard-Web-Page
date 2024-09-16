document.getElementById('loginForm').addEventListener('submit', function(event) {
    event.preventDefault();  // Prevent form submission

    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;
    const role = document.getElementById('role').value;

    // Perform basic validation (for demo purposes)
    if (username === '' || password === '') {
        alert('Please fill in all fields.');
        return;
    }

    // Redirect based on role
    if (role === 'student') {
        window.location.href = 'student-dashboard.html';
    } else if (role === 'teacher') {
        window.location.href = 'teacher-dashboard.html';
    }
});
