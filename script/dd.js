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

    var dt = e.dataTransfer;
    var files = dt.files;
    var url = dt.getData("URL");
    var str = dt.getData("text/plain");
    
    if(files.length){
        addLocalImage(files);
    }else{
        if(url){
            addImage(url);
        }else if(str){
            addText(str);
        }
    }
}

function addLocalImage(files){
    var file = files[0];
    //FileType”»’è
    if(file.type.match(/image.*/)){
        var reader = new FileReader();
        reader.onloadend = readerLoadEnd;
        reader.readAsDataURL(file);
    }

    function readerLoadEnd(e){
        addImage(e.target.result);
    }
}

function add(node){
    var p = document.createElement("p");
    p.appendChild(node);
    dropArea.appendChild(p);
}

function addText(str){
    add(document.createTextNode(str));
}

function addImage(src){
    var img = document.createElement("img");
    img.src = src;
    add(img)
}

window.addEventListener("load",init,false);


