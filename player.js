console.log("Clase player load!!");

class Player {
  constructor(x, y) {
    this.width = 40;
    this.height = 40;
    this.speed = 10;
    this.ejeX = x;
    this.ejeY = y;
    this.directionY = 0;
    this.lives = 1;
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
    this.hitbox()
  }

  hitbox() {
    if (
      this.ejeX < basicEnemy.ejeX + basicEnemy.width &&
      this.ejeY < basicEnemy.ejeY + basicEnemy.height &&
      this.ejeX + this.width > basicEnemy.ejeX &&
      this.ejeY + this.height > basicEnemy.ejeY
    ) {
      console.log("collision detected!2");
     
    }
  }

  remove(){
   if(this.lives == 0){
    playField.removeChild(this.sprite)
   } 
  }

}
