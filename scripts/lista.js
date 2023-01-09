function add_lista(active, root=""){
    document.getElementsByTagName('body')[0].innerHTML += '<div id="lista"><a style="border-top-left-radius: 10px;" href="'+root+'index.html" id="home">🏠</a><a href="'+root+'tipy.html" id="tipy">🎓</a><a href="'+root+'ulohy.html" id="ulohy">✒️</a><a style="border-top-right-radius: 10px;" id="hry" href="'+root+'hry.html">🎮</a></div>'
    document.getElementById(active).className = "active"
}