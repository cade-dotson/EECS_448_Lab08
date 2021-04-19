function button_clicked(){
  var first = document.getElementById("pass").value;
  var second = document.getElementById("pass2").value;
  //alert(first);
  //alert(second);
  if (first.length < 8) {
    alert("Password too short! Try again");
  }else if (first === second) {
    alert("Password match! Success");
  }else{
    alert("Password does not match, try again");
  }
}
