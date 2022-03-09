import { observable, action } from 'mobx'

class Store {

    @observable Count = 0

    @action plus() {
        this.Count++;
    }
    
    @action minus() {
        this.Count--;
    }
}

const storeInstance = new Store()

export default storeInstance;