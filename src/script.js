let modal = document.getElementById('myModal');
let modal__window = document.getElementById('myModal__window');
let button = document.getElementById('myButton');
let span = document.getElementById('closeModal__window');
let savetask = document.getElementById('saveTaskButton');
button.onclick() = showModal();
 showModal = () => {
    modal__window.style.display = "block";
    modal.style.display = "block";
  };
/*const closeModa = () => {
    modal__window.style.display = "none";
    modal.style.display = "none";
  };*/
/*button.onclick = () => {
    modal__window.style.display = "block";
    modal.style.display = "block";
  };*/
span.onclick = () => {
    modal__window.style.display = "none";
    modal.style.display = "none";
  };
savetask.onclick = () => {
    modal__window.style.display = "none";
    modal.style.display = "none";
  };
modal.onclick = () => {
      modal__window.style.display = "none";
      modal.style.display = "none"; 
  };
