.pragma library

//DEFINES DAS DIRECOES

var LEFT = "<";
var RIGHT = ">";
var UP = "A";
var DONW = "V";


var cobra = [];
var mousePositionX = 0;
var mousePositionY = 0;
var direcao = RIGHT;

function startGame(Campo){
    adiciona(Campo, 0, 0);
}


function adiciona(Campo,xPosition , yPosition){
    var component = Qt.createComponent("Node.qml");
    var node = component.createObject(Campo, {"x":xPosition, "y":yPosition});
    node.x = xPosition;
    node.y = yPosition;
    console.log(node.x);
    cobra.push(node);
}

function update(Campo){
    var xPos = cobra[0].x;
    var yPos = cobra[0].y;
    moveX();
    moveY();
    moveNodes(1,xPos, yPos);
}

function moveNodes(index , x, y){
    if(index >= cobra.length){
        return;
    }
    var m = cobra[index].x;
    var n = cobra[index].y;
    cobra[x] = x;
    cobra[y] = y;
    moveNodes(index+1, m, n);
}




function moveX(){
    if(cobra.length === 0){
        console.log("Cobra vazia!!");
        return;
    }
    console.log("Cobra tamanho:" + cobra.length + " X: " + cobra[0].x);

    if(mousePositionX > cobra[0].x){
        cobra[0].x++;
        direcao = RIGHT;
    }else if(mousePositionX < cobra[0].x){
        cobra[0].x--;
        direcao = LEFT;
    }else if(mousePositionX === cobra[0].x){
        if(direcao === RIGHT){
            cobra[0].x++;
        }else if(direcao === LEFT){
           cobra[0].x--;
        }
    }
}

function moveY(){
    if(cobra.length == 0){
        console.log("Cobra vazia!!");
        return;
    }

    if(mousePositionY > cobra[0].y){
        cobra[0].y++;
        direcao = DONW;
    }else if(mousePositionY < cobra[0].y){
        cobra[0].y--;
        direcao = UP;
    }else  if(mousePositionY === cobra[0].y){
        if(direcao === DONW){
            cobra[0].y++;
        }else if(direcao === UP){
            cobra[0].y--;
        }
    }
}

function setPosicao(x, y){
    mousePositionX = x;
    mousePositionY = y;
}