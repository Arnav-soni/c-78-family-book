var pics_array = [ "Familybookmage.jpg" ,"collage.png", "Arnav.jpg", "Karthik.jpg", "Richa.jpg", "Richa_arnav.jpg"];

var text_array = ["Family collage", "Arnav", " Me and My Father", "My mother", "Me and My Mother", "Family Book"];
var i = 1;
var a = 0;

function next() {

  if (i == 6) {
    i = 0;
    document.getElementById("heading").style.display = "none";
  };

  document.getElementById("image1").src = pics_array[i];
  i++;

  if (a == 6) {
    a = 0;
  };

  document.getElementById("family_name").innerHTML = text_array[a];
  a++;

};




































