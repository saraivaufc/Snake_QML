import QtQuick 2.2
import QtQuick.Controls 1.1

import "/Js/GerenciadorCobra.js" as GCobra
import "/Js/GerenciadorComida.js" as GComida


ApplicationWindow {
    id:root
    width: 500
    height: 500
    visible: true
    //visibility: "FullScreen";

    Rectangle{
        id: campo;
        visible: true
        width: root.width
        height: root.height
        anchors.centerIn: parent


        signal gameOver();

        Image {
            id: background
            width: parent.width
            height: parent.height
            anchors.centerIn: parent
            source: "/Img/background.jpg"
        }


        Timer {
            id: updateSnake;
            interval: 1000/30;
            repeat: true;
            running: true;
            onTriggered: {
               GCobra.update(campo);
            }
        }

        MouseArea{
            id:mouseAreaCampo;
            anchors.fill: parent;
            onMouseXChanged: {
                GCobra.setPosicao(mouse.x, mouse.y);
            }
            onMouseYChanged: {
                GCobra.setPosicao(mouse.x, mouse.y);
            }

        }

        Rectangle{
            id: botaoAdicionar
            width: 40
            height: 40
            x: parent.width - width
            y: parent.height - height
            color: "red"
            visible: true

            MouseArea{
                id: mouseAreaBotaoAdicionar
                anchors.fill: parent
                onClicked:{
                    GComida.criarComida(campo);
                }

            }

        }

        Image {
            id:gameover
            width: parent.width
            height:parent.height
            visible: false;
            source: "/Img/gameover.jpg"

            Rectangle{
                id: sair
                width: 100
                height: 100
                smooth: true
                Image {
                    id: imagemSair
                    anchors.fill: parent
                    source: "/Img/sair.png"
                }
                antialiasing: true
                x : (parent.width/2);
                y : (parent.height/2);

                MouseArea{
                    id: mouseAreaSair
                    anchors.fill: parent
                    onClicked: {
                        root.close();
                    }
                }
            }
        }

        Component.onCompleted: {
            GCobra.startGame(campo);
        }



        onGameOver: {
            updateSnake.stop();
            GCobra.destroy();
            gameover.visible = true;
            console.log("Morreu!!");
        }

    }

}
