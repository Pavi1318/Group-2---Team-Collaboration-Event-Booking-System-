const loginForm = document.getElementById('loginForm');
const showPasswordCheckbox = document.getElementById('showPassword');
const forgotPasswordLink = document.getElementById('forgotPassword');
const createAccountLink = document.getElementById('createAccount');
const messageBox = document.getElementById('message');

const validCredentials = {
  username: 'admin',
  password: 'admin123'
};

showPasswordCheckbox.addEventListener('change', function () {
  const passwordInput = document.getElementById('password');
  if (this.checked) {
    passwordInput.type = 'text';
  } else {
    passwordInput.type = 'password';
  }
});

loginForm.addEventListener('submit', function (event) {
  event.preventDefault();

  const username = document.getElementById('username').value;
  const password = document.getElementById('password').value;

  if (!username || !password) {
    showMessage('Please enter both username and password.', 'error');
    return;
  }

  if (username === validCredentials.username && password === validCredentials.password) {
    showMessage('Login successful! Welcome back.', 'success');
  } else {
    showMessage('Invalid username or password. Please try again.', 'error');
  }
});

forgotPasswordLink.addEventListener('click', function (event) {
  event.preventDefault();
  showMessage('If you forgot your password, ask teacher for help.', 'success');
});

createAccountLink.addEventListener('click', function (event) {
  event.preventDefault();
  showMessage('You can create an account later when you are ready.', 'success');
});

function showMessage(text, type) {
  messageBox.textContent = text;
  messageBox.className = 'message ' + type;
  messageBox.style.display = 'block';
}
