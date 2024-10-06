class Projectile {
  static bulletCounter = 0;
  constructor() {
    this.width = 10;
    this.height = 10;
    this.speed = 10;
    this.shootingSpeed = 30;
    this.ejeX = playerCharacter.ejeX + playerCharacter.width / 2;
    this.ejeY = playerCharacter.ejeY + playerCharacter.height / 2;
    this.directionY = 0;
    this.directionX = 1;
    this.damage = 1;
    this.sprite = document.createElement("div");
    this.interval = setInterval(this.shooting.bind(this), 50);
  }

  insert() {
    this.sprite.setAttribute("class", "projectile");
    this.sprite.style.width = this.width + "px";
    this.sprite.style.height = this.height + "px";
    this.sprite.style.top = this.ejeY + "px";
    this.sprite.style.left = this.ejeX + "px";
    this.sprite.style.position = "absolute";
    playField.appendChild(this.sprite);
    Projectile.bulletCounter++;
  }

  shooting() {
    let newAxisX = this.ejeX + this.shootingSpeed * this.directionX;
    if (newAxisX > 0 && newAxisX <= 1050 - this.width) {
      this.ejeX = newAxisX;
      this.sprite.style.left = this.ejeX + "px";
      let self = this;
      this.hitbox(self);
    }
    if (this.ejeX >= 1024 - this.width) {
      this.remove();
    }

  }

  hitbox(self) {
    enemiesArray.forEach(function (enemy, index) {

      if (
        enemy.ejeX < self.ejeX + self.width &&
        enemy.ejeY < self.ejeY + self.height &&
        enemy.ejeX + enemy.width > self.ejeX &&
        enemy.ejeY + enemy.height > self.ejeY
      ) {
        enemiesArray.splice(index, 1);
        enemy.remove();
        Player.score += 10;
        scoreDiv.innerText = `Score: ${Player.score}`;
        self.remove();
        if (Player.score % 200 == 0 && playerCharacter.lifes <= 5) {
          playerCharacter.lifes ++;
          checkLifes();
        }
      }
    })
  }

  remove() {
    Projectile.bulletCounter -= 1;
    playField.removeChild(this.sprite);
    clearInterval(this.interval);
  }
}

