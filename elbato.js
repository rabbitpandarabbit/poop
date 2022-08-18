function back() {
    window.location.replace("index.html")
}

var members = ["def.jpeg" , "abc.png" , "monkey.jpeg"];
var membernames = ["brother" , "me" , "monkey sister"];

var i = 0;

function left() {
    i--;
    if(i<0) {
        i = 2;
    }
    document.getElementById("memberImg").src = members[i];
    document.getElementById("h31").innerHTML = membernames[i];
}
function right() {
    i++;
    if(i>2) {
        i = 0;
    }
    document.getElementById("memberImg").src = members[i];
    document.getElementById("h31").innerHTML = membernames[i];
}