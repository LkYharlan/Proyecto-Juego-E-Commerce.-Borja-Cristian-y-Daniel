class Enemy {
  constructor() {
    this.width = 40;
    this.height = 40;
    this.speed = 12;
    let randomSpot = Math.floor(Math.random() * 500);
    this.ejeX = 900;
    this.ejeY = randomSpot;
    this.directionY = 0;
    this.directionX = -1;
    this.sprite = document.createElement("div");
    this.interval = setInterval(this.movement.bind(this), 45);
    this.shootingInterval = setInterval(this.shootingCannon.bind(this), 500); 
    this.engine = document.createElement("div");
    this.explotion = document.createElement("div");
  }

  insert() {
    this.sprite.setAttribute("class", "basicEnemy");
    this.sprite.style.width = this.width + "px";
    this.sprite.style.height = this.height + "px";
    this.sprite.style.top = this.ejeY + "px";
    this.sprite.style.left = this.ejeX + "px";
    this.sprite.style.position = "absolute";
    playField.appendChild(this.sprite);

    this.engine.setAttribute("class", "enemyEngine");
    this.engine.style.width = 10 + "px";
    this.engine.style.height = 10 + "px";
    this.engine.style.top = this.ejeY + 23 + "px";
    this.engine.style.left = this.ejeX + 40 + "px";
    this.engine.style.position = "absolute";
    playField.appendChild(this.engine);

    this.explotion.setAttribute("class", "enemyExplotion");
    this.explotion.style.width = this.width + "px";
    this.explotion.style.height = this.height + "px";
    this.explotion.style.top = this.ejeY + "px";
    this.explotion.style.left = this.ejeX + "px";
    this.explotion.style.position = "absolute";
    playField.appendChild(this.explotion);
  }

  movement() {
    let newAxisX = this.ejeX + this.speed * this.directionX;
    if (newAxisX >= -1 && newAxisX < 1024 - this.width) {
      this.ejeX = newAxisX;
      this.sprite.style.left = this.ejeX + "px";
      this.engine.style.left = this.ejeX + 60 + "px";
      this.explotion.style.left = this.ejeX + "px";
      this.hitbox();
      if (this.ejeX <= 0) {
        this.sprite.remove();
        this.engine.remove();
      }
    }
  }

  hitbox() {
    if (this.ejeX < playerCharacter.ejeX + playerCharacter.width &&
      this.ejeY < playerCharacter.ejeY + playerCharacter.height &&
      this.ejeX + this.width > playerCharacter.ejeX &&
      this.ejeY + this.height > playerCharacter.ejeY
    ) {
      this.remove();
      this.explotion.style.display = "block";
      playerCharacter.lifes--;
      checkLifes()
      playerCharacter.remove();
    }
  }

   // Función para que dispare el enemigo.
   // Crea un nuevo proyectil desde la posición del enemigo.
   shootingCannon() {
    let enemyProjectile = new EnemyProjectile(this); 
 /*    arrEnemyProjectile.push(enemyProjectile); // array para almacenar proyectiles enemigos. */
    enemyProjectile.insert();
  }

  remove() {
    enemyExplotionSound.currentTime = 0
    enemyExplotionSound.play();
    playField.removeChild(this.sprite);
    playField.removeChild(this.engine);
    this.explotion.style.display = "block";
    clearInterval(this.interval);
    clearInterval(this.shootingInterval);
  }
}
