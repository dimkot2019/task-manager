import Modal from './components/modal/Modal';
import AddTaskButton from './components/add-task-button/AddTaskButton';
import Modal__window from './components/modal/Modal__window';
import TaskList from './components/tasks-list/TasksList';

import './app.css';
import storeService from './services/storeService';
import {FORM_STATUS, FORM_TITLE} from './consts';
import tasksService from './services/tasksService';

const taskList = new TaskList();
const modal = new Modal();
const addTaskButton = new AddTaskButton();
const modalWindow = new Modal__window();

modal
    .on('hide', () => {
        modalWindow.clearForm();
    })
    .on('show', () => {
        const status = storeService.getFormStatus();
        const title = FORM_TITLE[status];
        modalWindow.setTitle(title);
    });

addTaskButton
    .on('click', () => {
        storeService.setCreateForm();
        modal.show();
    });

modalWindow
    .on('submit', data => {
        const status = storeService.getFormStatus();
        tasksService.createOrUpdateTask(data, status)
            .then((dataWithId) => {
                if (status === FORM_STATUS.CREATE) {
                    taskList.addTask(dataWithId);
                }
                if (status === FORM_STATUS.EDIT) {
                    taskList.updateTask(dataWithId);
                }
                
                modal.hide();
                storeService.setCreateForm();
            });
    })
    .on('closeForm', () => {
        modal.hide();
    });

taskList
    .on('editTask', taskInfo => {
        modalWindow.put(taskInfo);
        storeService.setEditForm(taskInfo.id);
        modal.show(); 
    })
    .on('removeTask', taskInfo => {
        tasksService.removeTask(taskInfo.id);
    });
    