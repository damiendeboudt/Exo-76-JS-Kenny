

document.getElementById('up').addEventListener('click',function() {
    let t = parseInt(document.getElementById('kenny').style.top);
    t = t - 10;
    if (t >= 0 )
    document.getElementById('kenny').style.top = t + 'px';
    //else if
});

document.getElementById('left').addEventListener('click',function() {
    let t = parseInt(document.getElementById('kenny').style.left);
    t = t - 10;
    if (t >= 0 )
    document.getElementById('kenny').style.left = t + 'px';
    if ( t <= 40) {
        alert("Kenny est mort")
        document.getElementById("kenny").style.left = 200 + "px";
        document.getElementById("kenny").style.top = 200 + "px";
        let x = 1
        let killed = (t <= 40)
        let xkilled = x * killed
        alert(" kenny est mort" + xkilled + "fois")
    }
});

document.getElementById('right').addEventListener('click',function() {
    let t = parseInt(document.getElementById('kenny').style.left);
    t = t + 10;
    if ( t <= 470)
    document.getElementById('kenny').style.left = t + 'px';
});

document.getElementById('down').addEventListener('click',function() {
    let t = parseInt(document.getElementById('kenny').style.top);
    t = t + 10;
    if ( t <= 470)
    document.getElementById('kenny').style.top = t + 'px';
});






let view = document.getElementById("viewport");
let zoneRouge = document.createElement("div");
zoneRouge.style.backgroundColor = "red";
zoneRouge.style.position = "absolute";
zoneRouge.style.width = "50px";
zoneRouge.style.height = "500px";
view.append(zoneRouge);

