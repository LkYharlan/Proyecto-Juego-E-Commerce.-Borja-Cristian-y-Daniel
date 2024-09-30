console.log("Clase player load!!");

class Player {
  constructor(x, y) {
    this.width = 50;
    this.height = 50;
    this.speed = 10;
    this.ejeX = x;
    this.ejeY = y;
    this.directionY = 0;
    this.lives = 3;
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

  movement(){
    this.ejeY = this.ejeY + this.speed * this.directionY
    this.sprite.style.top = this.ejeY + "px"
  }


}
