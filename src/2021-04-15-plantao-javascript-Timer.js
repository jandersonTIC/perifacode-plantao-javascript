module.exports = class Timer {
  /*
      - time: tempo de contagem regressiva em milissegundos;
      - currentTime: tempo de contagem atual em milissegundos;
      - timerInterval: intervalo de tempo a ser utilizado dentro do contador interno
      sendo o padrão 100 milissegundos;
      - callbackTimeout: função a ser chamada quando o tempo tiver esgotado;
      - callbackTimeInterval: função a ser chamada a cada ‘timerInterval’;
      - internalTimer: variável que recebe a função setInterval() e que possibilita
      que seja apagada com clearInterval(internalTimer);
      - internalTimeout: variável que recebe a função setTimeout() e que possibilita
      que seja apagada com clearTimeout(internalTimeout).
      */
  constructor(
    time,
    currentTime,
    timerInterval,
    callbackTimeout,
    callbackTimeInterval,
    internalTimer,
    internalTimeout
  ) {
    this.time = time;
    this.currentTime = currentTime;
    this.timerInterval = timerInterval;
    this.callbackTimeout = callbackTimeout;
    this.callbackTimeInterval = callbackTimeInterval;
    this.internalTimer = internalTimer;
    this.internalTimeout = internalTimeout;
  }

  //responsável por definir o tempo (time) regressivo em milissegundos;
  setTimer(_time) {
    this.time = _time;
  }

  //define qual o intervalo que a classe utilizará no seu contador regressivo;
  setTimerInterval(_timerInterval) {
    this.timerInterval = _timerInterval || 100;
  }

  //define a função de callback ‘callbackTimeout’ a ser executada ao final da contagem regressiva;
  setCallbackTimeout(_callbackTimeout) {
    this.callbackTimeout = _callbackTimeout;
  }

  //define a função de callback ‘callbackTimeInterval’ a ser executada após cada intervalo definido em ‘timerInterval’ ou, se não configurado, utilizar o padrão de 100 milissegundos;
  setCallbackTimeInterval(_callbackTimeInterval) {
    this.callbackTimeInterval = _callbackTimeInterval.bind(null, this);
  }

  //retorna o tempo corrente ‘currentTime’. Este retorno pode ser a qualquer momento, seja no começo, durante a contagem ou no fim;
  getCurrentTime() {
    return this.currentTime;
  }

  //inicia o contador;
  startTimer() {
    this.currentTime = this.time / 1000;
    this.internalTimeout = setTimeout(this.callbackTimeout, this.time);
    this.internalTimer = setInterval(() => {
      this.currentTime = this.currentTime - 1;
      this.callbackTimeInterval();
    }, this.timerInterval);
  }
  // para a contagem sem zerar os valores dos atributos;
  stopTimer() {
    clearInterval(this.internalTimer);
  }
  // reinicia os valores de ‘time’, ‘currentTime’, ‘timerInterval’ e os controladores de tempo ‘internalTimer’ e ‘internalTimeout’.
  resetTimer() {
    clearInterval(this.internalTimer);
    clearTimeout(this.internalTimeout);
    this.time = 0;
    this.currentTime = 0;
    this.timerInterval = 100;
  }
};
