Qt.include("/Js/Funcoes.js");

var comidas = [];

function criarComida(Campo) {
    var comida = Qt.createComponent("/Qml/Comida.qml");
    var status = comida.createObject(Campo, {"x": Math.random() * Campo.width,
                                             "y": Math.random() * Campo.height});
    if(status === null){
        console.log("Falha ao adicionar Comida!!");
        return;
    }
    comidas.push(status);

}

function comeu(index){
    var element = comidas.splice(index,1);
    element[0].destroy();
}



function calcProxPos(){
    for(var i = 0 ; i< comidas.length ; i++){
        var pos = parseInt(Math.random() * 8);
        if(pos === 0){
            comidas[i].dir = "<";
        }else if(pos === 1){
            comidas[i].dir = ">";
        }else if(pos === 2){
            comidas[i].dir = "A";
        }else if(pos === 3){
            comidas[i].dir = "V";
        }else if(pos === 4){
            comidas[i].dir = "a";
        }else if(pos === 5){
            comidas[i].dir = "b";
        }else if(pos === 6){
            comidas[i].dir = "c";
        }else if(pos === 7){
            comidas[i].dir = "d";
        }
    }

    console.log(pos);
}

function updateComida(){

    for(var i = 0 ; i< comidas.length; i++){
        if(comidas[i].dir === ">"){
            comidas[i].x+=20;
        }else if(comidas[i].dir === "<"){
            comidas[i].x-=20;
        }else if(comidas[i].dir === "A"){
            comidas[i].y-=20;
        }else if(comidas[i].dir === "V"){
            comidas[i].y+=20;
        }else if(comidas[i].dir === "a"){
            comidas[i].x-=20;
            comidas[i].y-=20;
        }else if(comidas[i].dir === "b"){
            comidas[i].x+=20;
            comidas[i].y-=20;
        }else if(comidas[i].dir === "c"){
            comidas[i].x-=20;
            comidas[i].y+=20;
        }else if(comidas[i].dir === "d"){
            comidas[i].x+=20;
            comidas[i].y+=20;
        }
    }
}
