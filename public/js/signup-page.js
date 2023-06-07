const signupPageHandler = async (event) => {
    event.preventDefault();
    console.log("clicked signup-page btn!");
    document.location.replace('/signup');
};

let signPg = document.querySelector('.signup-page');
if (signPg){
    document.querySelector('.signup-page').addEventListener("click", signupPageHandler);
}
