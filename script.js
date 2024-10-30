let inputSlider = document.getElementById("inputSlider");
let sliderValue = document.getElementById("sliderValue");
let passBox = document.getElementById("passBox");
let lowercase = document.getElementById("lowercase");
let uppercase = document.getElementById("uppercase");
let numbers = document.getElementById("numbers");
let symbols = document.getElementById("symbols");
let genBtn = document.getElementById("genBtn");
let copyIcon = document.getElementById("copyIcon");


// Showing input slider value
sliderValue.textContent = inputSlider.value;
inputSlider.addEventListener('input', () => {
  sliderValue.textContent = inputSlider.ariaValueMax;
});

genBtn.addEventListener('click', () => {
  passBox.value = generatePassword();
});

let upperChars = Array.from({ length: 26 }, (_, i) => String.fromCharCode(65 + i)).join('');
let lowerChars = Array.from({ length: 26 }, (_, i) => String.fromCharCode(97 + i)).join('');
let allNumbers = Array.from({ length: 10 }, (_, i) => + i).join('');
let allSymbols = "~!@#$%^&*";

// Function to generate Password
function generatePassword() {
  let genPassword = "";
  let allChars = "";

  allChars += lowerChars.checked ? lowerChars : "";
  allChars += upperChars.checked ? upperChars : "";
  allChars += numbers.checked ? allNumbers : "";
  allChars += symbols.checked ? allSymbols : "";

  if(allChars == "" || allChars.length == 0) {
    return genPassword;
  }

  let i = 1;
  while(i <= inputSlider.value) {
    genPassword += allChars.charAt(Math.floor(Math.random() * allChars.length));
    i++;
  } 
  return genPassword;
}

copyIcon.addEventListener('click', () => {
  if(passBox.value != "" || passBox.value.length >= 1) {
    navigator.clipboard.writeText(passBox.value);
    copyIcon.innerText = "check";
    copyIcon.title = "Password Copied";

    setTimeout(() => {
      copyIcon.innerHTML = "content_copy";
      copyIcon.title = "";
    }, 3000)
  }
  
})