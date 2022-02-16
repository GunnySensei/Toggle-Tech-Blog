async function signupRedirect() {
  window.redirect('/signup');
}

document.querySelector('#signup-btn').addEventListener('click', signupRedirect);
