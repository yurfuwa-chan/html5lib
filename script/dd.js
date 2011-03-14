/**
 * dd.js
 * User: kaede
 */

var dropArea;

function init(){
    dropArea = document.getElementById("dropArea");
    dropArea.addEventListener("dragover", dragOver, true);
    dropArea.addEventListener("drop", drop, true);
}

function dragOver(e){
    e.preventDefault();
}

function drop(e){
    e.preventDefault();
    var dt = e.dataTransfer
    var url = dt.getData("URL");
    var node;
    if(url){
       node = document.createElement("img");
       node.src = url;
    }else{
       node = document.createTextNode(dt.getData("text/plain"));
    }
    if(node){
        var p = document.createElement("p");
        p.appendChild(node);
        dropArea.appendChild(p);
    }
}

window.addEventListener("load",init,false);


