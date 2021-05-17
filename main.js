var i,j;
var left = document.getElementById("left-row-para");
var right = document.getElementById("right-row-para");
var center = document.getElementById("center-row-para");

 var star=["***"];
 var stars=["*"];
 var txt="";
 var text="";
      


for (i = 0; i <=star.length - 1; i++) {
  for (j = 0; j <= 25 + i; j++){
 txt += star[i] + "<br>";
  left.innerHTML = txt;
  right.innerHTML = txt;
  }

};
for(i = 0; i <= stars.length - 1; i++){
  for (j = 1; j <= 25  ; j++){
  text += stars[i] + "&nbsp" ;
  center.innerHTML = text;
}
};
