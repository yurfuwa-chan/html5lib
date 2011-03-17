function init(){
   updateLog();
   var inputArea = document.getElementById("inputArea");
   var resetButton = document.getElementById("reset");
   inputArea.addEventListener("change",changeHandler,false);
   resetButton.addEventListener("click",reset,false);
}

function changeHandler(e){
    window.localStorage.setItem(e.target.id,e.target.value);
}

function reset(){
    window.localStorage.clear();
}

function updateLog(){
    var keys = ["message","date","number"];
    //firefoxではlocalStrageのイテレーションに対応していない
    for(var i=0;i<keys.length;i++){
        var key = keys[i];
        var data = window.localStorage[key];
        var target = document.getElementById(key);
        if(data && target){
            target.value = data;
        }
    }
}

window.addEventListener("load",init,false);
