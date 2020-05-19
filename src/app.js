import Modal from './components/modal/Modal';
import AddTaskButton from './components/add-task-button/AddTaskButton';
import Modal__window from './components/modal/Modal__window';
import TaskList from './components/tasks-list/TasksList';

import './app.css';
import storeService from './services/storeService';
import {FORM_STATUS} from './consts';
import tasksService from './services/tasksService';
import {generateId} from './utils';

const taskList = new TaskList();
const modal = new Modal();
const addTaskButton = new AddTaskButton();
const modalWindow = new Modal__window();


const createOrUpdate = (data, status) => {
    switch (status) {
        case FORM_STATUS.CREATE: {
            const dataWithId = {
                ...data,
                id: generateId(),
            };
            return tasksService.create(dataWithId)
                .then(() => {
                    taskList.addTask(dataWithId);
                });
        }
        case FORM_STATUS.EDIT: {
            const dataWithId = {
                ...data,
                id: storeService.getEditTaskId(),
            };
            return tasksService.update(dataWithId)
                .then(() => {
                    taskList.updateTask(dataWithId);
                });
        }
    }
    throw new Error(`Не обработанный status - "${status}"`);
};

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
        createOrUpdate(data, status)
        .then(() => {
            modal.hide();
            storeService.setCreateForm();
        });
    })
    .on('closeForm', () => {
        modal.hide();
    });

taskList
    .on('editTask', ({id, ...taskInfo}) => {
        
        modalWindow.put(taskInfo);
        storeService.setEditForm(id);
        modal.show(); 
               
    })
    .on('removeTask', taskInfo => {
        tasksService.remove(taskInfo.id);
    });
    