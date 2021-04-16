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

contadorRegressivo.setCallbackTimeInterval(
  function (contador) {
    if (contador.getCurrentTime() == 26) {
      contador.stopTimer();
      console.log(`Contagem: ${contador.getCurrentTime()}`);
    } else {
      console.log(`Contagem: ${contador.getCurrentTime()}`);
    }
  }.bind(null, contadorRegressivo)
);

contadorRegressivo.startTimer();
console.log(`Contagem: ${contadorRegressivo.getCurrentTime()}`);
/*
console.log('getCurrentTime: ', contadorRegressivo.getCurrentTime());
console.log('getCurrentTime: ', contadorRegressivo.getCurrentTime());
*/
//contadorRegressivo.resetTimer();
