
let x = 1;
document.getElementById('up').addEventListener('click',function() {
    let t = parseInt(document.getElementById('kenny').style.top);
    t = t - 10;
    if (t >= 0 )
    document.getElementById('kenny').style.top = t + 'px';
});

document.getElementById('left').addEventListener('click',function() {
    let t = parseInt(document.getElementById('kenny').style.left);
    t = t - 10;
    if (t >= 0 )
    document.getElementById('kenny').style.left = t + 'px';
    //let x = 0;
    if ( t <= 40) {
        alert("Kenny est mort")
        document.getElementById("kenny").style.left = 200 + "px";
        document.getElementById("kenny").style.top = 200 + "px";
        let count = x++
        alert(" kenny est mort " + count + " fois")
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

document.addEventListener("keypress", function (p) {
    if (p.key === "z") {
        let t = parseInt(document.getElementById('kenny').style.top);
        t = t - 10;
        if (t >= 0 )
            document.getElementById('kenny').style.top = t + 'px';
    }
    else if (p.key === "q") {
        let t = parseInt(document.getElementById('kenny').style.left);
        t = t - 10;
        if (t >= 0 )
            document.getElementById('kenny').style.left = t + 'px';
        //let x = 0;
        if ( t <= 40) {
            alert("Kenny est mort")
            document.getElementById("kenny").style.left = 200 + "px";
            document.getElementById("kenny").style.top = 200 + "px";
            let count = x++
            alert(" kenny est mort " + count + " fois")
        }
    }
    else if (p.key === "d") {
        let t = parseInt(document.getElementById('kenny').style.left);
        t = t + 10;
        if ( t <= 470)
            document.getElementById('kenny').style.left = t + 'px';
    }
    else if (p.key === "s") {
        let t = parseInt(document.getElementById('kenny').style.top);
        t = t + 10;
        if ( t <= 470)
            document.getElementById('kenny').style.top = t + 'px';
    }
})