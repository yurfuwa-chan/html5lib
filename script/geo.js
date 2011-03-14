function init(){
   var btn = document.getElementById("btn");
   btn.addEventListener("click",getGeolocation,false);
   getGeolocation();
}

function getGeolocation(){

    if(!navigator.geolocation){
        alert('no support :(');
        return;
    }else{
        navigator.geolocation.getCurrentPosition(update);
    }

    function update(position){
        lat = position.coords.latitude;
        lng = position.coords.longitude;

        var map = document.getElementById('map');
        map.src = 'http://maps.google.com/maps/api/staticmap?center='+lat+','+lng+'&markers='+lat+','+lng+'&zoom=13&size=400x400&maptype=roadmap&sensor=false';
    }


}

window.addEventListener("load",init,true);
