class Enemy {
  constructor() {
      this.width = 40;
      this.height = 40;
      this.speed = 12;
      //let randomSpot = Math.floor(Math.random() * 540);
      this.ejeX = 984;
      this.ejeY = randomSpot;
    this.directionY = 0;
    this.directionX = 0;
    this.health = 1;
    this.sprite = document.createElement("div");
  }

  insert() {
    this.sprite.setAttribute("class", "basicEnemy");
    this.sprite.style.width = this.width + "px";
    this.sprite.style.height = this.height + "px";
    this.sprite.style.top = this.ejeY + "px";
    this.sprite.style.left = this.ejeX + "px";
    this.sprite.style.position = "absolute";
    playField.appendChild(this.sprite);
  }

  movement() {
    let newAxisY = this.ejeY + this.speed * this.directionY;
    let newAxisX = this.ejeX + this.speed * this.directionX;

    if (newAxisX >= 0 && newAxisX < 1024 - this.width && newAxisY >= 0 && newAxisY <= 560 - this.height) {
      let randomVertical = Math.ceil(Math.random() * 10);
      for (let i = 0; i < 10; i++) {
        if (newAxisX >= 0 && newAxisX < 1024 - this.width && newAxisY >= 0 && newAxisY <= 560 - this.height){
        this.sprite.style.top = this.ejeY + randomVertical + "px";
        }
      }
      this.ejeX = newAxisX;
      this.sprite.style.left = this.ejeX + "px";
    }
  }
}
