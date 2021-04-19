var fileNames = ["Pupper1.jpg","Pupper2.jpg","Pupper3.jpg","Pupper4.jpg","Pupper5.jpg"];
currentID = 0;

function next(){
  if (currentID == 4){
    currentID = 0;
  }else{
    currentID ++;
  }
  var image = document.getElementById('imageID');
  image.src = fileNames[currentID]
}

function previous(){
  if (currentID == 0){
    currentID = 4;
  }else{
    currentID --;
  }
  var image = document.getElementById('imageID');
  image.src = fileNames[currentID]
}
