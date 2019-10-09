function bootA(){
a.innerHTML = screenData + "<br>clear screen";
  jfg()
setTimeout(bootB, 50);
}
function bootB(){
screenData = "";
a.innerHTML = "";
setTimeout(workA, 900);
}
