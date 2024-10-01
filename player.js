console.log("Clase player load!!");

class Player {
  constructor() {
    this.width = 40;
    this.height = 40;
    this.speed = 10;
    this.ejeX = 90;
    this.ejeY = 265;
    this.directionY = 0;
    this.lives = 3;
    this.damage = 1;
    this.sprite = document.createElement("div");
  }

  insert() {
    this.sprite.setAttribute("id", "player");
    this.sprite.style.width = this.width + "px";
    this.sprite.style.height = this.height + "px";
    this.sprite.style.top = this.ejeY + "px";
    this.sprite.style.left = this.ejeX + "px";
    this.sprite.style.position = "absolute";
    playField.appendChild(this.sprite);
  }

  movement() {
    let newAxisY = this.ejeY + this.speed * this.directionY;

    if (newAxisY >= 0 && newAxisY <= 560 - this.width) {
      this.ejeY = newAxisY;
      this.sprite.style.top = this.ejeY + "px";
    }
  }

  remove() {
    if (this.lives == 0) {
      playField.removeChild(this.sprite);
      clearInterval(repeatEnemy);
      setTimeout(gameOver, 3000)
      /* gameOver(); */

    }
  }
}
