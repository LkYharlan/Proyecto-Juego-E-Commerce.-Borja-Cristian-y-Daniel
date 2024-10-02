class Meteorite {
    constructor() {
      this.width = 40;
      this.height = 40;
      this.speed = 12;
      let randomSpot = Math.floor(Math.random() * 960);  
      this.ejeX = randomSpot;
      this.ejeY = 0;  
      this.directionY = 1;  
      this.health = 1;
      this.sprite = document.createElement("div");
      this.interval = setInterval(this.movement.bind(this), 50);
    }
  

    insert() {
      this.sprite.setAttribute("class", "meteorite");
      this.sprite.style.width = this.width + "px";
      this.sprite.style.height = this.height + "px";
      this.sprite.style.top = this.ejeY + "px";
      this.sprite.style.left = this.ejeX + "px";
      this.sprite.style.position = "absolute";
      playField.appendChild(this.sprite);
    }
  

    movement() {
      let newAxisY = this.ejeY + this.speed * this.directionY;
      if (newAxisY <= 560 - this.height) {
        this.ejeY = newAxisY;
        this.sprite.style.top = this.ejeY + "px";
        this.hitbox();  
        let self = this;
        this.enemyHitbox(self);
      } else {
        this.sprite.remove();  
      }
    }

    hitbox() {
      if (this.ejeX < playerCharacter.ejeX + playerCharacter.width &&
          this.ejeY < playerCharacter.ejeY + playerCharacter.height &&
          this.ejeX + this.width > playerCharacter.ejeX &&
          this.ejeY + this.height > playerCharacter.ejeY
      ) {
        this.remove();  
        playerCharacter.lifes--; 
        checkLifes();
        enemyExplotionSound.currentTime = 0
        enemyExplotionSound.play(); 
        playerCharacter.remove();  
      }
    }

    enemyHitbox(self) {
      enemiesArray.forEach(function (enemy, index) {
     if (
       enemy.ejeX < self.ejeX + self.width &&
       enemy.ejeY < self.ejeY + self.height &&
       enemy.ejeX + enemy.width > self.ejeX &&
       enemy.ejeY + enemy.height > self.ejeY
     ) {
       enemiesArray.splice(index, 1)
       enemy.remove();
     }
   })
   }
  
    remove() {
      playField.removeChild(this.sprite);
      clearInterval(this.interval);
    }
  }
  