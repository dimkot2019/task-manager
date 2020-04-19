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
                break;
            }
            case FORM_STATUS.EDIT: {
                taskList.updateTask({
                    ...data,
                    id: storeService.getEditTaskId(),
                });
                break;
            }
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
