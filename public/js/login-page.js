const loginPageHandler = async (event) => {
    event.preventDefault();
    console.log("clicked login-page btn!");
    document.location.replace('/login');
};
let loginPg = document.querySelector('.login-page');
if (loginPg){
    document.querySelector('.login-page').addEventListener("click", loginPageHandler);
}
