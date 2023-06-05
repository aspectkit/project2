const loginFormHandler = async (event) => {
    event.preventDefault();
    console.log("login button clicked!");
    // Collect values from the login form
    const email = document.querySelector('#typeEmailX').value.trim();
    const password = document.querySelector('#typePasswordX').value.trim();

    if (email && password) {
      // Send a POST request to the API endpoint
        const response = await fetch('/api/users/login', {
            method: 'POST',
            body: JSON.stringify({ email, password }),
            headers: { 'Content-Type': 'application/json' },
        });

        if (response.ok) {
            document.location.replace('/profile');
        } else {
            let incorrect = document.getElementById('incorrect');
            incorrect.style.display = "block";
        }
    }
};

document.querySelector('.login-btn').addEventListener('click', loginFormHandler);