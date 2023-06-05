const signupFormHandler = async (event) => {
    event.preventDefault();

    const name = document.querySelector('#typeNameX').value.trim();
    const email = document.querySelector('#typeEmailX').value.trim();
    const password = document.querySelector('#typePasswordX').value.trim();

    if (name && email && password){
        const response = await fetch ('/api/users', {
            method: 'POST',
            body: JSON.stringify({name, email, password}),
            headers: {'Content-Type': 'application/json'}
        });
        if (response.ok){
            document.location.replace('/gameLib');
        } else {
            alert(response.statusText);
        }
    }
};

document.querySelector('.signup-form').addEventListener('submit', signupFormHandler);