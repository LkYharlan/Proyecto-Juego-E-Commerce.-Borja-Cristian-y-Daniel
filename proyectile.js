class Proyectile {
  constructor() {
    this.width = 10;
    this.height = 10;
    this.speed = 10;
    this.shootingSpeed = 30
    this.ejeX = playerCharacter.ejeX + playerCharacter.width / 2;
    this.ejeY = playerCharacter.ejeY + playerCharacter.height / 2;
    this.directionY = 0
    this.directionX = 0;
    this.damage = 1;
    this.sprite = document.createElement("div");
  }

  insert() {
    this.sprite.setAttribute("class", "proyectile");
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

  shooting(){
    
  }
}
