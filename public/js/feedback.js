document.addEventListener('DOMContentLoaded', function() {
    const form = document.querySelector('.feedback-form');

    form.addEventListener('submit', function(e) {
        e.preventDefault(); // Prevent the default form submission

        // Capture form data
        const name = document.getElementById('name').value;
        const school = document.getElementById('school').value;
        const email = document.getElementById('email').value;
        const comments = document.getElementById('comments').value;

    });
});
