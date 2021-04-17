const Timer = require('./2021-04-15-plantao-javascript-Timer');

const contadorRegressivo = new Timer();
/*const contadorRegressivo1 = new Timer();
const contadorRegressivo2 = new Timer();
const contadorRegressivo3 = new Timer();*/

contadorRegressivo.setTimer(30000);
contadorRegressivo.setTimerInterval(1000);
contadorRegressivo.setCallbackTimeout(function () {
  console.log('Tempo acabou!');
  contadorRegressivo.resetTimer();
});

contadorRegressivo.setCallbackTimeInterval(function (self) {
  if (self.getCurrentTime() == 26) {
    self.stopTimer();
    console.log(`Contagem: ${self.getCurrentTime()}`);
  } else {
    console.log(`Contagem: ${self.getCurrentTime()}`);
  }
});

contadorRegressivo.startTimer();
console.log(`Contagem: ${contadorRegressivo.getCurrentTime()}`);
/*
console.log('getCurrentTime: ', contadorRegressivo.getCurrentTime());
console.log('getCurrentTime: ', contadorRegressivo.getCurrentTime());
*/
//contadorRegressivo.resetTimer();
