let playField = document.getElementById("playField");

let enemiesArray = []

let playerCharacter = new Player();
playerCharacter.insert();

let proyectile = new Proyectile();
proyectile.insert()

let basicEnemy

 let repeatEnemy = setInterval(function(){
    basicEnemy = new Enemy ()
    basicEnemy.insert()
    enemiesArray.push(basicEnemy)
}, 1000)



let movePrompt = window.addEventListener("keydown", function (event) {
  switch (event.key.toLowerCase()) {
    case "w":
      playerCharacter.directionY = -1;
      proyectile.directionY= -1
      playerCharacter.movement();
      proyectile.movement()
      break;
    case "s":
      playerCharacter.directionY = 1;
      proyectile.directionY = 1;
      playerCharacter.movement();
      proyectile.movement();
      break;
  }
});

let moveClearInter = window.addEventListener( "keyup", function(event){
    playerCharacter.directionY = 0;
    proyectile.directionY = 0;
})

movePlayerInterval = setInterval( function () {
    playerCharacter.movement()
    proyectile.movement()
}, 100);



