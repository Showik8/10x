function calculateAverage(points) {
  return points.reduce((a, b) => a + b, 0) / points.length;
}



let dolphinsScores1 = [96, 108, 89];
let koalasScores1 = [88, 91, 110];
let dolphinsAvg1 = calculateAverage(dolphinsScores1);
let koalasAvg1 = calculateAverage(koalasScores1);

function checkWinner(dolphinsAvg, koalasAvg) {
  if (dolphinsAvg > koalasAvg) {
    console.log(
      `Dolphins avarage score is ${dolphinsAvg}, Koalas avarage score is ${koalasAvg}. So winner is: Dolphins team`
    );
  } else if (dolphinsAvg < koalasAvg) {
    console.log(
      `Dolphins avarage score is ${dolphinsAvg}, Koalas avarage score is ${koalasAvg}. So winner is: Koala's team`
    );
  } else {
    console.log(
      `Dolphins avarage score is ${dolphinsAvg}, Koalas avarage score is ${koalasAvg}. Both team has same score, so there's no winner`
    );
  }
}

checkWinner(dolphinsAvg1, koalasAvg1);

console.log(`Dolphins Avg: ${dolphinsAvg1.toFixed(2)}, Koalas Avg: ${koalasAvg1.toFixed(2)}`);