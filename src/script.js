const taskModal = document.getElementById('taskModal');
const addTaskButton = document.getElementById('addTaskButton');
const closeModalButton = document.getElementById('closeModalButton');
const saveTaskButton = document.getElementById('saveTaskButton');
const showModal = () => {
    taskModal.style.display = "flex";
};
const hideModal = () => {
    taskModal.style.display = "none"; 
}
addTaskButton.addEventListener('click', showModal);   
closeModalButton.addEventListener('click', hideModal);   
taskModal.addEventListener('click', (event) => {
    if (event.target === taskModal) {
        hideModal();
    }
});   
saveTaskButton.addEventListener('click', hideModal);   


