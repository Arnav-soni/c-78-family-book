var pics_array = [ "Familybookmage.jpg" ,"collage.png", "Arnav.jpg", "Karthik.jpg", "Richa.jpg", "Richa_arnav.jpg"];

var text_array = ["Family collage", "Arnav", " Me and My Father", "My mother", "Me and My Mother", "Family Book"];
var o = 1;
var y = 0;

function next() {

  if (o == 6) {
    o = 0;
    document.getElementById("heading").style.display = "none";
  };

  document.getElementById("image1").src = pics_array[o];
  o++;

  if (y == 6) {
    y = 0;
  };

  document.getElementById("family_name").innerHTML = text_array[y];
  y++;

};




































