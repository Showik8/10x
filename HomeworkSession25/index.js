const cont = document.getElementById("cont");
const reminder = document.getElementById("reminder");
const btn = document.getElementById("btn");

let ready = false;
let correctPass = false

function tryPlaySound() {
  play("Sound.mp3");
  ready = true;
  btn.style.display = "none";
  reminder.style.display = "none ";
  cont.style.display = "block";
  countdownTimerDisplay(44, "timer");
}

const encodedPass = "UGFzc3dvcmQxMSE=";
const PASSWORD = atob(encodedPass);

let TRY = 3;
const messageElement = document.getElementById("message");
const attemptsLeftElement = document.getElementById("attemptsLeft");
const passwordInput = document.getElementById("passwordInput");

function checkPassValid(pwd) {
  const symbols = ["!", "@", "#", "$", "%", "&", "*", "."];
  const hasUpperCaseRegex = /[A-Z]/;
  const hasNumberRegex = /\d/;
  let hasTwoNumbers = false;
  let hasSymbol = false;
  let hasUpperCase = false;
  let numberCount = 0;

  for (const char of pwd) {
    if (symbols.includes(char)) {
      hasSymbol = true;
    }

    if (hasUpperCaseRegex.test(char)) {
      hasUpperCase = true;
    }

    if (hasNumberRegex.test(char)) {
      numberCount++;
      if (numberCount >= 2) {
        hasTwoNumbers = true;
      }
    }
  }
  console.log("Validation:", hasTwoNumbers, hasSymbol, hasUpperCase);
  return hasTwoNumbers && hasSymbol && hasUpperCase;
}

const submitPassword = () => {
  const pwd = passwordInput.value;
  checkPass(pwd);
  if (TRY > 0) {
    attemptsLeftElement.textContent = `You have ${TRY} attempts left.`;
  } else {
    attemptsLeftElement.textContent = "You are locked out!";
    document.querySelector("button").disabled = true;
    passwordInput.disabled = true;
  }
  passwordInput.value = "";
};

function checkPass(pwd) {
  if (checkPassValid(pwd)) {
    if (TRY > 0) {
      if (pwd === PASSWORD) {
        messageElement.textContent = "Correct Password!";
        messageElement.className = "message valid";
        correctPass = true
        document.querySelector("button").disabled = true;
        passwordInput.disabled = true;
      } else {
        messageElement.textContent = `Wrong password.`;
        messageElement.className = "message invalid";
        TRY--;
      }
    } else {
      messageElement.textContent = "You are locked out!";
      messageElement.className = "message invalid";
    }
  } else {
    messageElement.textContent = "Password Not Valid";
    messageElement.className = "message invalid";
  }
}

function play(nm) {
  let audio = new Audio(nm);
      audio
        .play()
        .then(() => {
          console.log("Sound playing (attempted onload)");
        })
        .catch((error) => {
          console.error("Playback failed (onload):", error);
          if (error.name === "NotAllowedError") {
            console.log("Autoplay blocked on load.");
          }
        });
  

}
