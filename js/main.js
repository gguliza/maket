var modal = document.getElementById("myModal");
var btn = document.getElementById("myBtn");
var span = document.getElementsByClassName("close")[0];

btn.onclick = function () {
     modal.style.display = "block";
}

span.onclick = function () {
     modal.style.display = "none";
}

window.onclick = function (event) {
     if (event.target == modal) {
          modal.style.display = "none";
     }
}


function openNav() {
     document.getElementById("mySidenav").style.width = "250px";
     document.getElementById("main").style.marginLeft = "0px";
     document.body.style.backgroundColor = "rgba(0,0,0,0.1)";
}

function closeNav() {
     document.getElementById("mySidenav").style.width = "0px";
     document.getElementById("main").style.marginLeft = "0px";
     document.body.style.backgroundColor = "white";
}