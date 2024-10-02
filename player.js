class Player {
  constructor() {
    this.width = 40;
    this.height = 40;
    this.speed = 10;
    this.ejeX = 90;
    this.ejeY = 265;
    this.directionX = 0;
    this.directionY = 0;
    this.score = 0;
    this.lives = 3;
    this.sprite = document.createElement("div");
    this.engine = document.createElement("div");
  }

  insert() {
    this.sprite.setAttribute("id", "player");
    this.sprite.style.width = this.width + "px";
    this.sprite.style.height = this.height + "px";
    this.sprite.style.top = this.ejeY + "px";
    this.sprite.style.left = this.ejeX - 40 + "px";
    this.sprite.style.position = "absolute";
    playField.appendChild(this.sprite);

    this.engine.setAttribute("id", "playerEngine");
    this.engine.style.width = 10 + "px";
    this.engine.style.height = 10 + "px";
    this.engine.style.top = this.ejeY + 25 + "px";
    this.engine.style.left = this.ejeX - 15 + "px";
    this.engine.style.position = "absolute";
    playField.appendChild(this.engine);

  }

  movement() {
    let newAxisY = this.ejeY + this.speed * this.directionY;
    let newAxisX = this.ejeX + this.speed * this.directionX

    if (newAxisY >= 0 && newAxisY <= 540 - this.height) {
      this.ejeY = newAxisY;
      this.sprite.style.top = this.ejeY + "px";
      this.engine.style.top = this.ejeY + 25 + "px";
    }

    if (newAxisX >= 15 && newAxisX <= 512 - this.width) {
      this.ejeX = newAxisX;
      this.sprite.style.left = this.ejeX + "px";
      this.engine.style.left = this.ejeX - 15 + "px";
    }
  }

  remove() {
    if (this.lives == 0) {
      playerExplotionSound.play();
      gameplaySong.pause();
      gameplaySong.currentTime = 0;
      gameOverSong.volume = 0.4
      gameOverSong.play()

      playField.removeChild(this.sprite);
      playField.removeChild(this.engine);
      clearInterval(repeatEnemy);
      clearInterval(movePlayerInterval);
      clearInterval(repeatMeteorite);
      setTimeout(gameOver, 4000);
    }
  }
}
