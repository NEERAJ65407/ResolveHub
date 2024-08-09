document.addEventListener('DOMContentLoaded', function() {
    const form = document.getElementById('complaint-form');

    form.addEventListener('submit', function(e) {
        e.preventDefault(); // Prevent form from submitting

        const name = document.getElementById('name').value;
        const email = document.getElementById('email').value;
        const school = document.getElementById('school').value;
        const category = document.getElementById('category').value;
        const comments = document.getElementById('comments').value;

        // Create an object to hold the form data
        const formData = {
            name: name,
            email: email,
            school: school,
            category: category,
            comments: comments
        };

        console.log('Complaint submitted:', formData);

        // You can send this data to your backend server here, e.g. using fetch()

        // Example using fetch:
        /*
        fetch('/your-backend-endpoint', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(formData)
        })
        .then(response => response.json())
        .then(data => {
            console.log('Success:', data);
            alert('Complaint submitted successfully!');
        })
        .catch((error) => {
            console.error('Error:', error);
        });
        */

        // Reset the form fields after submission
        form.reset();
    });
});
