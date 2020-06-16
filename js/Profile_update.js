var name ="";

function nameChange(){
  name = document.getElementById("name").value;
}

function newUpdate(){
  document.getElementById("name").innerHTML = name;
}