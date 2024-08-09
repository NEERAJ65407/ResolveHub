document.addEventListener('DOMContentLoaded', function() {
    const form = document.querySelector('.login-form');
    
    form.addEventListener('submit', function(e) {
        e.preventDefault(); // Prevent the default form submission
        
        const username = document.getElementById('username').value;
        const password = document.getElementById('password').value;
        const loginType = document.querySelector('input[name="login-type"]:checked').value;

        // Create the data object to be sent in the request body
        const formData = {
            username: username,
            password: password,
            loginType: loginType
        };

        // Send the data to the server
        fetch('http://localhost:8000/api/v1/users/login', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(formData)
        })
        .then(response => response.json())
        .then(data => {
            console.log('Success:', data);
            alert('Login successful!');
            form.reset(); // Reset form after successful submissio
            window.location.href = '/api/v1/users/school'; 
            
        })
        .catch((error) => {
            console.log('Error:', error);
            alert('There was an error during login. Please try again.');
        });
    });
});
