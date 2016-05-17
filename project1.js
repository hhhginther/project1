var gameport = document.getElementById("gameport");

var renderer = PIXI.autoDetectRenderer(800, 400, {backgroundColor: 0xffccff});
gameport.appendChild(renderer.view);

var stage = new PIXI.Container();

var texture = PIXI.Texture.fromImage("bird.png");

//start bird.png addition
var sprite = new PIXI.Sprite(texture);

sprite.anchor.x = 0.5;
sprite.anchor.y = 0.5;

sprite.position.x = 200;
sprite.position.y = 200;

stage.addChild(sprite);
//end bird.png

//start text for bird
var birdText = new PIXI.Text("hey what's up");

birdText.x = 230;
birdText.y = 160;

stage.addChild(birdText);
//end test text

function animate() {
  requestAnimationFrame(animate);
  //sprite.rotation += 0.1;
  renderer.render(stage);
}
animate();
