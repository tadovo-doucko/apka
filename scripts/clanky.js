function download_ulohy(url, change_state_func){
  var xhttp = new XMLHttpRequest();
  xhttp.onreadystatechange = change_state_func
  xhttp.open("GET", url, true);
  xhttp.send();
}

function parse_ulohy(ulohy_string){
  ulohy = ulohy_string.split(";|");
  ulohy.shift();
  for(i=0; i < ulohy.length; i++){
    lines = ulohy[i].split("\n");
    // time restrictions
    if (lines[0].split("!").length > 1 && (new Date(lines[0].split("!")[1].split("\r")[0]).getTime() - Date.now()) > 0){
      continue;
    }

    description = "";
    for(x = 2; x < lines.length; x++){
      description += format_string_effects(lines[x]) + ((x >= lines.length - 1) ? "" : "<br>");
    }
    document.getElementById("selection").innerHTML += '<div class="box-link" onClick="otevrit_clanek(' + lines[0].split("!") +')"><h1>'+ lines[1] +'</h1><h2>'+ description +'</h2></div><br>';
  }
  document.getElementById("loading").style.display = "none";
}

function format_string_effects(str){
  out = str.replace("<b>", "<span style='font-weight: 1000;'>").replace("</b>", "</span>")
  out = out.replace("<i>", "<span style='font-style: italic;'>").replace("</i>", "</span>")
  out = out.replace('\n', "<br>");
  console.log(out);
  return out
}

function otevrit_clanek(num){
  document.getElementById('selection').style.display = "none";
  document.getElementById('clanek').style.display = "block";
  document.getElementById('loading').style.display = "block";
  download_ulohy(CLANKY_FOLDER + num.toString() + ".txt", function(){if (this.readyState == 4 && this.status == 200) {display_clanek(this.responseText);}});
}
window.setInterval('loading_update()', 100)
function loading_update(){
  loading = document.getElementById("loading")
  if(loading.style.display == "none"){
    return;
  }
  loading.innerHTML += ".";
  if (loading.innerHTML.length > 3){
    loading.innerHTML = ""
  }
}