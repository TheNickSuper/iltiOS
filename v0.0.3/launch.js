function launchA(){ //Вот сам launchA
a.innerHTML = " "; //Указываем пустоту в переменную a
a.innerHTML = "iltiOS v0.0.3"; //Указываем iltiOS v0.0.3 в переменной a
jfg()
setTimeout(launchB, 2000); // Запускаем функцию launchB через 3 секунды
} 
function launchB(){ //Функция launchB
a.innerHTML = screenData + "<br>10MB operating memory"; // Указываем a и <br>1KB operating memory в переменной a
  jfg()
setTimeout(launchC, 2000); //Запускаем функцию launchC через 3 секунды
} //Короче, я устал писать комментарии, поздравляю, вы нашли единственную пасхалку
function launchC(){
a.innerHTML = screenData + "<br>100MB memory";
  jfg()
setTimeout(launchD, 2000);
}
function launchD(){
a.innerHTML = screenData + "<br>Letter and number test";
  jfg()
setTimeout(launchE, 2000);
}
function launchE(){
a.innerHTML = screenData + "<br>\! \@ \# \$ \% \^ \& \* \( \) \+ \" \№ \; \: \? \, \/ \- \{ \} \| \. \< \>";
  jfg()
setTimeout(launchJ, 3000);
}
function launchJ(){
a.innerHTML = screenData + "<br>1 2 3 4 5 6 7 8 9 0<br>Letter and number test finished";
  jfg()
setTimeout(launchK, 2000);
}
function launchK(){
a.innerHTML = screenData + "<br>Boot...";
  jfg()
setTimeout(bootA, 4000);
}
