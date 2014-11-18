import QtQuick 2.0
import QtQuick.Controls 1.1

import "/Js/GerenciadorPontuacao.js" as GPontuacao

Rectangle {

    property alias tempo: tempo

    width: 185
    height: 151
    visible: true
    color:"transparent";
    border.width: 4
    z:100;

    property int segundos: 0 ;

    Timer {
        id: timeTempo
        interval: 1000;
        running: true;
        repeat: true
        onTriggered:{
            GPontuacao.inclementaTempo();
            tempo.text = GPontuacao.getTempo();
        }
    }

    Text {
        id: text1
        x: 59
        y: 13
        width: 68
        height: 22
        text: qsTr("Tempo")
        font.pixelSize: 21
    }

    Text {
        id: text2
        x: 41
        y: 88
        width: 104
        height: 24
        text: qsTr("Pontuaçao")
        font.pixelSize: 21
    }

    Text {
        id: tempo
        x: 63
        y: 49
        width: 59
        height: 24
        text: qsTr("00:00")
        font.pixelSize: 21
    }

    Text {
        id: pontuacao
        x: 79
        y: 118
        width: 29
        height: 18
        text: qsTr("000")
        font.pixelSize: 21
    }

    Rectangle {
        id: rectangle1
        x: 4
        y: 79
        width: 177
        height: 3
        color: "#240404"
    }
}
