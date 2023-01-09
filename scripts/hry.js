function start_game_set(value){
    document.getElementById('pregame').style.display = ["none", "block"][!value ? 1 : 0];
    document.getElementById('game').style.display = ["none", "block"][value ? 1 : 0];
}
function update_element_above_lista(e, above_by){
    e.style.bottom = (document.getElementById('lista').getBoundingClientRect().height + above_by).toString() + "px"
}

var text_out_e = null
function ciselnice_press(text){
    if(text_out_e.innerHTML[0] == "("){
        text_out_e.innerHTML = text_out_e.innerHTML.slice(1, text_out_e.innerHTML.length - 2)
    }
    if(text == "<-"){
        out_txt = text_out_e.innerHTML
        
        text_out_e.innerHTML = text_out_e.innerHTML.slice(0, out_txt.length - 1 - ((out_txt[out_txt.length - 1] == " ") ? 2 : 0))
    } else if(text == 'sub') {
        ciselnice_submit()
    } else {
        text_out_e.innerHTML += text
    }
    ciselnice_press_event()
}