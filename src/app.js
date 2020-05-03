import Modal from './components/modal/Modal';
import AddTaskButton from './components/add-task-button/AddTaskButton';
import Modal__window from './components/modal/Modal__window';
import TaskList from './components/tasks-list/TasksList';

import './app.css';
import storeService from './services/storeService';
import {FORM_STATUS} from './consts';

const taskList = new TaskList();
const modal = new Modal();
const addTaskButton = new AddTaskButton();
const modalWindow = new Modal__window();

modal
    .on('hide', () => {
        modalWindow.clearForm();
    });

addTaskButton
    .on('click', () => {
        storeService.setCreateForm();
        modal.show();
    });

modalWindow
    .on('submit', data => {
        const status = storeService.getFormStatus();
        
        switch (status) {
            case FORM_STATUS.CREATE: {
                taskList.addTask(data); 
                console.log(data); 
                console.log(storeService.getStore());               
                break;
            }
            case FORM_STATUS.EDIT: {
                taskList.updateTask({
                    ...data,
                    id: storeService.getEditTaskId(), 
                              
                }); 
                //console.log({
                //    ...data, }); 
                    //console.log(storeService.getStore());  
                    console.log(storeService.getEditTaskId());           
                break;
            }
        }

        if (localStorage.getItem('list') === null) {
            let list = [];
            list.push(data);
            localStorage.setItem('list', JSON.stringify(list));        
          } else {
            let list = JSON.parse(localStorage.getItem('list'));
            list.push(data);
            localStorage.setItem('list', JSON.stringify(list));
          }
           
        modal.hide();
        
        storeService.setCreateForm();
        
    })
    .on('closeForm', () => {
        
        modal.hide();
    });

taskList
    .on('editTask', ({id, ...taskInfo}) => {
        
        modalWindow.put(taskInfo);
         
        storeService.setEditForm(id); 
            
        modal.show();        
    });
