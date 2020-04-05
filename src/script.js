let modal = document.getElementById('taskModal');
let modal__window = document.getElementById('taskModalWindow');
let button = document.getElementById('addTaskButton');
let span = document.getElementById('closeModalButton');
let savetask = document.getElementById('saveTaskButton');
/*const showModal = () => {
    modal__window.style.display = "block";
    modal.style.display = "block";
  };
  button.onclick() = showModal();*/
button.onclick = () => {
    modal__window.style.display = "block";
    modal.style.display = "block";
};
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
