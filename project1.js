var gameport = document.getElementById("gameport");

var renderer = PIXI.autoDetectRenderer(800, 400, {backgroundColor: 0x33cccc});
gameport.appendChild(renderer.view);

var stage = new PIXI.Container();

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
var texture = PIXI.Texture.fromImage("bird.png");

var sprite = new PIXI.Sprite(texture);

sprite.anchor.x = 0.5;
sprite.anchor.y = 0.5;

sprite.position.x = 75;
sprite.position.y = 175;

stage.addChild(sprite);
//end bird.png

//start text for bird
var birdText = new PIXI.Text("help me out", {font : '10px Arial'});

birdText.x = 100;
birdText.y = 150;

stage.addChild(birdText);
//end text

//a big rectangle graphic to enclose sticks
var graphics = new PIXI.Graphics();
graphics.beginFill(0x70dbdb);
graphics.drawRoundedRect(725,25,50,315);
stage.addChild(graphics);

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

function onDragStart(event)
{
    this.data = event.data;
    this.dragging = true;
}

function onDragEnd() {
    this.dragging = false;
    this.data = null;
}

function onDragMove() {
    if (this.dragging) {
        var move = this.data.getLocalPosition(this.parent);
        this.position.x = move.x;
        this.position.y = move.y;
    }
}


function animate() {
  requestAnimationFrame(animate);
  spriteP.rotation += 0.03;
  renderer.render(stage);
}
animate();
