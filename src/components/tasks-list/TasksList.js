import Component from '../../classes/Component.js';
import Task from '../task/Task';

const CN = {
    TASKS_LIST: 'TasksList',
};

const TEMP_DATA = [
    {
        id: 0,
        title: 'Задача №1',
        description: 'Описание задачи',
        date: '2020-04-01',
    },
    {
        id: 1,
        title: 'Задача №2',
        description: 'Описание задачи',
        date: '2020-04-01',
    },
    {
        id: 2,
        title: 'Задача №3',
        description: 'Описание задачи',
        date: '2020-04-01',
    },
];

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

        TEMP_DATA.forEach(taskInfo => {
            renderTask(taskInfo);
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
