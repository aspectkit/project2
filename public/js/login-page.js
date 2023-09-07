const loginPageHandler = async (event) => {
    event.preventDefault();
    console.log("clicked login-page btn!");
    document.location.replace('/login');
};

document.querySelector('.login-page').addEventListener("click", loginPageHandler);