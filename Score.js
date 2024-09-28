class Score {
  constructor() {
    //начальное кол-во очков при старте, очистка через куки
    this.score = 0;
    this.record;
  }

  draw() {
    //отрисовка ксс
    this.input = document.createElement("input");
    document.body.appendChild(this.input);
    this.input.value = `Ваши очки: ${this.score}`;

    this.input2 = document.createElement("input");
    document.body.appendChild(this.input2);
  }
}

export default Score;
