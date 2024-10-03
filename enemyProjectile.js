class EnemyProjectile {
  constructor(enemy) {
    this.width = 10;
    this.height = 10;
    this.speed = 10;
    this.shootingSpeed = 30;
    this.ejeX = enemy.ejeX;
    this.ejeY = enemy.ejeY + enemy.height / 2;
    this.directionX = -1;
    this.sprite = document.createElement("div");
    this.interval = setInterval(this.shooting.bind(this), 50);
  }

  insert() {
    this.sprite.setAttribute("class", "enemyProjectile");
    this.sprite.style.width = this.width + "px";
    this.sprite.style.height = this.height + "px";
    this.sprite.style.top = this.ejeY + "px";
    this.sprite.style.left = this.ejeX + "px";
    this.sprite.style.position = "absolute";
    playField.appendChild(this.sprite);
  }

  shooting() {
    let newAxisX = this.ejeX + this.shootingSpeed * this.directionX;
    if (newAxisX > 0 && newAxisX < 1050) {
      this.ejeX = newAxisX;
      this.sprite.style.left = this.ejeX + "px";
      let self = this;
      this.hitbox(self);
    }
   
    if (this.ejeX < 60) {
    clearArrayBulletEnemies();
      this.sprite.remove();
    }
  }

  hitbox() {
    if (
      this.ejeX < playerCharacter.ejeX + playerCharacter.width &&
      this.ejeY < playerCharacter.ejeY + playerCharacter.height &&
      this.ejeX + this.width > playerCharacter.ejeX &&
      this.ejeY + this.height > playerCharacter.ejeY
    ) {
      this.remove();
      console.log(playerCharacter.lifes);
      playerCharacter.lifes--;
      checkLifes();
      playerCharacter.remove();
    }
  }

  remove() {
    playField.removeChild(this.sprite);
    clearInterval(this.interval);
  }
}
