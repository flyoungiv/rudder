setInterval(function() {
    var d = new Date(Date.now());
    var time = `${d.getHours()}:${d.getMinutes()}`;
    //document.getElementById("clock").innerHTML = time;
    console.log(time);
},
1000);