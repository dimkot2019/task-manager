import Component from '../../classes/Component.js';
import Task from '../task/Task';
import tasksService from '../../services/tasksService';

const CN = {
    TASKS_LIST: 'TasksList',
};

class TasksList extends Component {
    constructor() {
        super();

        const tasksList = document.querySelector(`.${CN.TASKS_LIST}`);

        const taskObjectList = [];

        const editTask = taskInfo => {
            this.emit('editTask', taskInfo);
        };

        const removeTask = taskInfo => {
            this.emit('removeTask', taskInfo);
        };

        const renderTask = function(taskInfo) {
            const task = new Task(taskInfo, tasksList);
            taskObjectList.push(task);

            task.on('edit', editTask);

            task.on('remove', removeTask);
        };

        tasksService.loadTasksList().then(tasksList => {
            tasksList.forEach(taskInfo => {
                renderTask(taskInfo);
            });
        });
        
        this.addTask = function(taskInfo) {
            renderTask(taskInfo);
        };

        this.updateTask = function({id, ...taskInfo}) {
            const task = taskObjectList.find(task => task.getId() === id);
            if (task) {
                task.update(taskInfo);
            }
        };
    }
}

export default TasksList;
