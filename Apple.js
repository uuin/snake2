class Apple {
  constructor() {
    //рандомное поялвение объектов

    this.apple;

    this.createApple = () => {
      const generateApple = () => {
        let posX = Math.round(Math.random() * (10 - 3) + 3);
        let posY = Math.round(Math.random() * (10 - 1) + 1);
        return [posX, posY];
      };

      this.appleCoordinates = generateApple();
      this.apple = document.querySelector('[posX = "' + this.appleCoordinates[0] + '"][posY = "' + this.appleCoordinates[1] + '"]');
      while (this.apple.classList.contains("snakeBody")) {
        this.appleCoordinates = generateApple();
        this.apple = document.querySelector('[posX = "' + this.appleCoordinates[0] + '"][posY = "' + this.appleCoordinates[1] + '"]');
      }

      this.apple.classList.add("apple");
    };

    this.createApple();
  }
}

export default Apple;
