import {cloneDeep} from '../utils';

export default class Store {
    constructor(initStore) {
        const store = initStore ? cloneDeep(initStore) : {};

        this.getStore = function() {
            return cloneDeep(store);
        };

        this.get = function(key) {
            const data = store[key];
            
            if (data) {
                return cloneDeep(data);
            }
            console.log(data);
            console.log(store[key]);
        
        };
        

        this.set = function(key, data) {
            store[key] = cloneDeep(data);
            
            
        };
    }
}
