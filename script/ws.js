/**
 * HTML5 websocket + node.js + socket.io
 * User: kaede
 */

var socket;

function init(){
    var button = document.getElementById("button");
    button.addEventListener("click",clickHandler,false);
    socket = new io.Socket("192.168.0.6",{port:3000});
    socket.connect();

    socket.on('connect', onConnect);
    socket.on('message', onMessage);
}

function onConnect(){
    addText("connected");
}

function onMessage(data){
    addText(data);
}

function clickHandler(){
    var input = document.getElementById("input");
    socket.send(input.value);
}

function addText(str){
    var view = document.querySelector(".view");
    var p = document.createElement("p");
    var text = document.createTextNode(str);
    p.appendChild(text);
    view.appendChild(p);
}

addEventListener("load",init,false);