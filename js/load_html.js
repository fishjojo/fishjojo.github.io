function load_html(url,id){
  $("#"+id).load(url);
}

function set_bg(id,name){

  pic_url =  "/pics/"+name+"_bg.JPG"
  day = new Date()
  hour = day.getHours()
  if(hour > 17){
    pic_url = "/pics/"+name+"_bg_night.JPG"
  }

  document.getElementById(id).style.backgroundImage = "url('"+pic_url +"')";
}
