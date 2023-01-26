window.setInterval('update_scroll_margin()', 100);
//var click = new Audio("click.wav");

function add_lista(active, root="", tiny=false){
    the_class = (tiny) ? "tiny_lista" : ""
    document.getElementsByTagName('body')[0].innerHTML += '<div id="lista" class="' + the_class +'"><a style="border-top-left-radius: 10px;" href="'+root+'index.html" id="home"><img src="'+root+'imgs/home.png"></a><a href="'+root+'tipy.html" id="tipy"><img src="'+root+'imgs/tipy.png"></a><a href="'+root+'ulohy.html" id="ulohy"><img src="'+root+'imgs/ulohy.png"></a><a style="border-top-right-radius: 10px;" id="hry" href="'+root+'hry.html"><img src="'+root+'imgs/hry.png"></a></div>'
    if (active != ""){
        document.getElementById(active).className = "active";
    }
}

function update_scroll_margin(){
    document.getElementsByTagName('body')[0].style.marginBottom = document.getElementById('lista').getBoundingClientRect().height.toString() + "px";
}