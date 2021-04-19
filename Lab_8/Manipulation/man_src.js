function button_clicked(){
  var bRed = document.getElementById("bRed").value;
  var bGreen = document.getElementById("bGreen").value;
  var bBlue = document.getElementById("bBlue").value;
  var bWidth = document.getElementById("bWidth").value;
  var baRed = document.getElementById("baRed").value;
  var baBlue = document.getElementById("baBlue").value;
  var baGreen = document.getElementById("baGreen").value;
  //alert(bRed)
  var back = document.getElementById("para_style")
  back.style.backgroundColor = "rgb(" + baRed + ", " + baGreen + ", " + baBlue + ")";
  back.style.borderColor = "rgb(" + bRed + ", " + bGreen + ", " + bBlue + ")";
  back.style.borderWidth = "" + bWidth + "px";
}
