function countdownTimerDisplay(seconds, elementId) {
  let timeLeft = seconds;
  const timerDisplay = document.getElementById(elementId);

  if (!timerDisplay) {
    console.error(`Element with ID "${elementId}" not found.`);
    return;
  }

  timerDisplay.textContent = formatTime(timeLeft); // Initial display

  const interval = setInterval(() => {
    timeLeft--;
    timerDisplay.textContent = formatTime(timeLeft);

    if(TRY == 0){
      clearInterval(interval)
    }

    if (timeLeft < 0) {
      clearInterval(interval);
      attemptsLeftElement.textContent = "You are locked out!";
      timerDisplay.textContent = "Finished!";
    } else if (correctPass) {
      clearInterval(interval);
      timerDisplay.textContent = `00:${timeLeft}`;
    }
  }, 1000);
}

function formatTime(totalSeconds) {
  if (totalSeconds < 0) {
    return "00:00";
  }
  const minutes = Math.floor(totalSeconds / 60);
  const seconds = totalSeconds % 60;
  const formattedMinutes = String(minutes).padStart(2, "0");
  const formattedSeconds = String(seconds).padStart(2, "0");
  return `${formattedMinutes}:${formattedSeconds}`;
}
