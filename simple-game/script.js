const character = document.getElementById("character");
const block = document.getElementById("block")
const refreshButton = document.querySelector("#reload");

function jump() {
  if(character.classList != "animate"){
    character.classList.add("animate");
  }
  setTimeout(function(){
    character.classList.remove("animate")
  }, 500)
}

const checkDead = setInterval(function() {
  var characterTop=
  parseInt(window.getComputedStyle(character).getPropertyValue("top"));
  var blockLeft=
  parseInt(window.getComputedStyle(block).getPropertyValue("left"));
  if(blockLeft<20 && blockLeft>0 && characterTop>=130){
    block.style.animation= "none";
    block.style.display= "none";
    character.style.display="none";
    alert("You lost!");
  }
},10);

function reload() {
  reload = location.reload();
}

reloadButton.addEventListener("click", reload, false);
