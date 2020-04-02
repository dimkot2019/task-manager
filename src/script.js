let shading = document.getElementById('myShading');
let modal = document.getElementById('myModal');
let button = document.getElementById("myButton");
let span = document.getElementsByClassName("Close")[0];
let savetask = document.getElementsByClassName("SaveTask")[0];
button.onclick = () => {
    modal.style.display = "block";
    shading.style.display = "block";
  }
span.onclick = () => {
    modal.style.display = "none";
    shading.style.display = "none";
  }
savetask.onclick = () => {
    modal.style.display = "none";
    shading.style.display = "none";
  }
  
shading.onclick = () => {
      modal.style.display = "none";
      shading.style.display = "none";
    
  }