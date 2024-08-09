document.addEventListener('DOMContentLoaded', function() {
    const form = document.querySelector('.school-selection-form');
    
    form.addEventListener('submit', function(e) {
        e.preventDefault(); // Prevent the default form submission

        // Collect values from the form
        const school = document.getElementById('school-select').value;
        const location = document.getElementById('school-location').value;

        // Process the collected data (e.g., send it to a server)
        console.log('Selected School:', school);
        console.log('School Location:', location);

        // Optionally, you can send data to a server using fetch() or XMLHttpRequest
        // Example with fetch():
        /*
        fetch('/path/to/your/api', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                school: school,
                location: location
            })
        })
        .then(response => response.json())
        .then(data => {
            console.log('Success:', data);
            // Optionally, handle the response data
        })
        .catch(error => {
            console.error('Error:', error);
        });
        */

        // Optionally, reset the form after submission
        form.reset();
    });
});
