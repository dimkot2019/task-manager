let modal = document.getElementById('myModal');
let btn = document.getElementById("myBtn");
let span = document.getElementsByClassName("Close")[0];
let savetask = document.getElementsByClassName("SaveTask")[0];
btn.onclick = () => {
    modal.style.display = "block";
  }
span.onclick = () => {
    modal.style.display = "none";
  }
  savetask.onclick = () => {
    modal.style.display = "none";
  }
  window.onclick = (event) => {
    if (event.target === modal ) {
      modal.style.display = "none";
    }
  }