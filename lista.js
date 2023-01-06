function add_lista(active){
    document.getElementsByTagName('body')[0].innerHTML += '<div id="lista"><a style="border-top-left-radius: 10px;" href="index.html" id="home">🏠</a><a href="tipy.html" id="tipy">🎓</a><a href="ulohy.html" id="ulohy">✒️</a><a style="border-top-right-radius: 10px;" id="hry" href="hry.html">🎮</a></div>'
    document.getElementById(active).className = "active"
}