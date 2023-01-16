function start_game_set(value){
    document.getElementById('pregame').style.display = ["none", "block"][!value ? 1 : 0];
    document.getElementById('game').style.display = ["none", "block"][value ? 1 : 0];
}
function update_element_above_lista(e, above_by){
    e.style.bottom = (document.getElementById('lista').getBoundingClientRect().height + above_by).toString() + "px"
}

last_ciselnice_overby = 0
last_ciselnice_but_size = 0
size = 0
function update_ciselcine_size(based_on){
    update_element_above_lista(document.getElementById('ciselnice'), -10)
    bound_cislenice = document.getElementById('ciselnice').getBoundingClientRect()
    ciselnice_bot = Number(document.getElementById('ciselnice').style.bottom.replace("px", ''))
    target_size = document.getElementById('lista').getBoundingClientRect().bottom - (based_on.getBoundingClientRect().top + based_on.getBoundingClientRect().height) - ciselnice_bot - 20
    // update only when nececary
    buttons = Array.from(document.getElementById('ciselnice').getElementsByTagName('div'));
    last_ciselnice_top = bound_cislenice.top
    
    size = Math.max(Math.min(target_size / 6, 70), 0);
    
    for(i = 0; i < buttons.length; i++){
        buttons[i].setAttribute("style", "line-height:" + Math.max((size * 0.66), 20).toString() + "px !important;padding-bottom:" + (size * 0.165).toString() + "px !important;padding-top:" + (size * 0.165).toString() + "px !important;");
    }
}

var text_out_e = null
