const cont = document.getElementById("cont");
const reminder = document.getElementById("reminder");
const btn = document.getElementById("btn");

let ready = false;
let correctPass = false;
let audio = null;

const encodedPass = "UGFzc3dvcmQxMSE=";
const PASSWORD = atob(encodedPass);

function tryPlaySound() {
  play("Sound.mp3");
  ready = true;
  btn.style.display = "none";
  reminder.style.display = "none ";
  cont.style.display = "block";
  countdownTimerDisplay(44, "timer");
}


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
        correctPass = true;
        document.querySelector("button").disabled = true;
        passwordInput.disabled = true;
        attemptsLeftElement.style.display="none"
        stop()
        return
      }

      if(pwd !== PASSWORD) {
        console.log(TRY)
        messageElement.textContent = `Wrong password.`;
        messageElement.className = "message invalid";
        TRY--;
        return
      }
    } 
   
    if(TRY == 0){
      messageElement.textContent = "You are locked out!";
      messageElement.className = "message invalid";
      return
    }
  } 

  if (!checkPassValid(pwd)) {
    messageElement.textContent = "Password Not Valid";
    messageElement.className = "message invalid";
    TRY--
    return
  }
}


function play(nm) {
   audio = new Audio(nm);
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

function stop(){
  console.log("stop")
    audio.pause();
    audio.currentTime = 0; 
    audio = null;
}
