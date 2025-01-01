const passwordField = document.getElementById('password');
const lengthField = document.getElementById('length');
const includeUppercase = document.getElementById('include-uppercase');
const includeNumbers = document.getElementById('include-numbers');
const includeSymbols = document.getElementById('include-symbols');
const generateButton = document.getElementById('generate');
const copyButton = document.getElementById('copy');

// Character pools
const lowercaseChars = 'abcdefghijklmnopqrstuvwxyz';
const uppercaseChars = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
const numberChars = '0123456789';
const symbolChars = '!@#$%^&*()_+[]{}|;:,.<>?';

function generatePassword() {
  const length = parseInt(lengthField.value);
  let characterPool = lowercaseChars;

  if (includeUppercase.checked) characterPool += uppercaseChars;
  if (includeNumbers.checked) characterPool += numberChars;
  if (includeSymbols.checked) characterPool += symbolChars;

  let password = '';
  for (let i = 0; i < length; i++) {
    const randomIndex = Math.floor(Math.random() * characterPool.length);
    password += characterPool[randomIndex];
  }

  passwordField.value = password;
}

function copyToClipboard() {
  passwordField.select();
  document.execCommand('copy');
  alert('Password copied to clipboard!');
}

// Event Listeners
generateButton.addEventListener('click', generatePassword);
copyButton.addEventListener('click', copyToClipboard);
