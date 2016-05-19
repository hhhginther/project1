var gameport = document.getElementById("gameport");

var renderer = PIXI.autoDetectRenderer(800, 400, {backgroundColor: 0x33cccc});
gameport.appendChild(renderer.view);

var stage = new PIXI.Container();

//add simple bg- edit later!!!!
var bg = PIXI.Texture.fromImage("bgTest.png");
var bgSprite = new PIXI.Sprite(bg);
bgSprite.anchor.set(0.5);
bgSprite.position.set(400,200);
stage.addChild(bgSprite);

//add a tree
var textureT = PIXI.Texture.fromImage("tree.png");
var spriteT = new PIXI.Sprite(textureT);

spriteT.anchor.set(0.5);
spriteT.position.set(50,200);
stage.addChild(spriteT);

//birdhouse pinwheel added
var textureP = PIXI.Texture.fromImage("pinwheel.png");
var spriteP = new PIXI.Sprite(textureP);

spriteP.anchor.set(0.5);
spriteP.position.set(373,206);
stage.addChild(spriteP);

//birdhouse added
var textureB = PIXI.Texture.fromImage("birdhouse.png");
var spriteB = new PIXI.Sprite(textureB);

spriteB.anchor.set(0.5);
spriteB.position.set(400,200);
stage.addChild(spriteB);

//start bird.png addition
var textureBird = PIXI.Texture.fromImage("bird.png");

var spriteBird = new PIXI.Sprite(textureBird);

spriteBird.anchor.x = 0.5;
spriteBird.anchor.y = 0.5;

spriteBird.position.x = 75;
spriteBird.position.y = 175;

stage.addChild(spriteBird);
//end bird.png

//start bird2 & button, (with animation?)
var birdMov = new PIXI.Container();
birdMov.position.set(425,150);
stage.addChild(birdMov);

var textureBird2 = PIXI.Texture.fromImage("bird2.png");
var spriteBird2 = new PIXI.Sprite(textureBird2);
spriteBird2.anchor.set(0.5);
spriteBird2.position.set(70,35);
birdMov.addChild(spriteBird2);

var buttonTexture = PIXI.Texture.fromImage("doneButton.png");
var spriteButton = new PIXI.Sprite(buttonTexture);

//interactive button..
spriteButton.interactive = true;
spriteButton.on('mousedown', onDown);

spriteButton.anchor.set(0.5);
spriteButton.position.set(50,0);
birdMov.addChild(spriteButton);

//if actually done
var doneText = new PIXI.Text("Thanks dude", {font: '10px Arial'});
doneText.position.set(100,150);
stage.addChild(doneText);
doneText.visible = false;

//if not done yet
var notDoneText = new PIXI.Text("you didn't even use all the sticks", {font: '10px Arial'});
notDoneText.position.set(100,150);
stage.addChild(notDoneText);
notDoneText.visible = false;

//start text for bird
var birdText = new PIXI.Text("help me out", {font : '10px Arial'});

birdText.x = 100;
birdText.y = 150;

stage.addChild(birdText);
//end text

//a big rectangle graphic to enclose sticks
var stickBox = new PIXI.Container();
stickBox.position.set(725,25);
stage.addChild(stickBox);

var graphics = new PIXI.Graphics();
graphics.beginFill(0x70dbdb);
graphics.drawRoundedRect(0,0,50,315);
stickBox.addChild(graphics);

//and a smaller rectangle for a hat
var graphics2 = new PIXI.Graphics();
graphics2.beginFill(0x70dbdb);
graphics2.drawRoundedRect(650,290,50,50);
stage.addChild(graphics2);

//add stick type 1 (x2)
var texture2 = PIXI.Texture.fromImage('stick1.png');
var sprite2 = new PIXI.Sprite(texture2);
sprite2.anchor.set(0.5);
sprite2.position.set(750,50);

sprite2.interactive=true;
sprite2.on('mousedown', onDragStart);
sprite2.on('mouseup', onDragEnd);
sprite2.on('mouseupoutside', onDragEnd);
sprite2.on('mousemove', onDragMove);

stage.addChild(sprite2);

var texture2_2 = PIXI.Texture.fromImage('stick1.png');
var sprite2_2 = new PIXI.Sprite(texture2_2);
sprite2_2.anchor.set(0.5);
sprite2_2.position.set(750, 200);

sprite2_2.interactive=true;
sprite2_2.on('mousedown', onDragStart);
sprite2_2.on('mouseup', onDragEnd);
sprite2_2.on('mouseupoutside', onDragEnd);
sprite2_2.on('mousemove', onDragMove);

stage.addChild(sprite2_2);
//end stick 1

//add stick type 2 (x 2)
var texture3 = PIXI.Texture.fromImage('stick2.png');
var sprite3 = new PIXI.Sprite(texture3);
sprite3.anchor.set(0.5);
sprite3.position.set(750,100);

sprite3.interactive=true;
sprite3.on('mousedown', onDragStart);
sprite3.on('mouseup', onDragEnd);
sprite3.on('mouseupoutside', onDragEnd);
sprite3.on('mousemove', onDragMove);

stage.addChild(sprite3);

var sprite3_2 = new PIXI.Sprite(texture3);
sprite3_2.anchor.set(0.5);
sprite3_2.position.set(750,250);

sprite3_2.interactive=true;
sprite3_2.on('mousedown', onDragStart);
sprite3_2.on('mouseup', onDragEnd);
sprite3_2.on('mouseupoutside', onDragEnd);
sprite3_2.on('mousemove', onDragMove);

stage.addChild(sprite3_2);
//end stick 2

//add stick type 3 (x2)
var texture4 = PIXI.Texture.fromImage('stick3.png');
var sprite4 = new PIXI.Sprite(texture4);
sprite4.anchor.set(0.5);
sprite4.position.set(750,150);

sprite4.interactive=true;
sprite4.on('mousedown', onDragStart);
sprite4.on('mouseup', onDragEnd);
sprite4.on('mouseupoutside', onDragEnd);
sprite4.on('mousemove', onDragMove);

stage.addChild(sprite4);

var sprite4_2 = new PIXI.Sprite(texture4);
sprite4_2.anchor.set(0.5);
sprite4_2.position.set(750,300);

sprite4_2.interactive=true;
sprite4_2.on('mousedown', onDragStart);
sprite4_2.on('mouseup', onDragEnd);
sprite4_2.on('mouseupoutside', onDragEnd);
sprite4_2.on('mousemove', onDragMove);

stage.addChild(sprite4_2);
//end stick 3

//start hats (four diff!!)
var hatTexture = PIXI.Texture.fromImage("hat.png");
var hatSprite = new PIXI.Sprite(hatTexture);
hatSprite.anchor.set(0.5);
hatSprite.position.set(675,320);

var hatTexture2 = PIXI.Texture.fromImage("hat2.png");
var hatSprite2 = new PIXI.Sprite(hatTexture2);
hatSprite2.anchor.set(0.5);
hatSprite2.position.set(675,320);

var hatTexture3 = PIXI.Texture.fromImage("hat3.png");
var hatSprite3 = new PIXI.Sprite(hatTexture3);
hatSprite3.anchor.set(0.5);
hatSprite3.position.set(675,320);

var hatTexture4 = PIXI.Texture.fromImage("hat4.png");
var hatSprite4 = new PIXI.Sprite(hatTexture4);
hatSprite4.anchor.set(0.5);
hatSprite4.position.set(675,320);
//end hats

hatArray = [hatSprite, hatSprite2, hatSprite3, hatSprite4];

function chooseHat(){
  var hatIndex = Math.floor((Math.random() *4));
  var chosenHat = hatArray[hatIndex];

  chosenHat.interactive = true;
  chosenHat.on('mousedown', onDragStart);
  chosenHat.on('mouseup', onDragEnd);
  chosenHat.on('mouseupoutside', onDragEnd);
  chosenHat.on('mousemove', onDragMove);

  stage.addChild(chosenHat);
}

chooseHat();



var stickArray = [sprite2,sprite2_2,sprite3,sprite3_2,sprite4, sprite4_2];

//start medal
var medalTexture = PIXI.Texture.fromImage("medal.png");
var medalSprite = new PIXI.Sprite(medalTexture);
medalSprite.anchor.set(0.5);
medalSprite.position.set(500,125);
stage.addChild(medalSprite);
medalSprite.visible = false;

function onDragStart(event)
{
    this.data = event.data;
    this.dragging = true;
}

function onDragEnd() {
    this.dragging = false;
    this.data = null;
}

function onDragMove () {
    if (this.dragging) {
        var move = this.data.getLocalPosition(this.parent);
        this.position.x = move.x;
        this.position.y = move.y;
    }
}

function onDown (event) {
  if(checkSticks()){
    doneText.visible = true;
    birdText.visible = false;
    medalSprite.visible = true;
    notDoneText.visible= false;
  }
  else{
    notDoneText.visible= true;
    birdText.visible = false;
  }
}

//var stickBounds = stickBox.getBounds();

function checkSticks () {
  for (var i =0;i<stickArray.length;i++){
    if(stickArray[i].position.x >= 725 && stickArray[i].position.y >=25){
      return false;
    }
  }
  return true;
}

birdMovCount=0;

function animate() {
  requestAnimationFrame(animate);
  spriteP.rotation += 0.03;
  renderer.render(stage);

  if(birdMovCount < 6){
    birdMov.position.y += .5;
    birdMovCount ++;
  }
  else if(birdMovCount >= 6 && birdMovCount < 12){
    birdMov.position.y -=.5;
    birdMovCount++;
  }
  else birdMovCount = 0;
  }

animate();
