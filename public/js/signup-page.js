const signupPageHandler = async (event) => {
    event.preventDefault();
    console.log("clicked signup-page btn!");
    document.location.replace('/signup');
};

document.querySelector('.signup-page').addEventListener("click", signupPageHandler);