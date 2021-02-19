
class List{
    
    toDoHold = [];
    

    //добавляет текст
    addToDoTask(text) {
        const task = {
            text,
            id: Date.now(),
            status: false,
        };
        const identifyText = this.toDoHold.find((item) => item.text === text);
        if(!identifyText){
            this.toDoHold.push(task);
        }
        
    }

    //удаляет заметку по id
    removeTask(id){
        const delitItem = 1;
        const indexId = gettoDoHoldIndexById(id);
        this.toDoHold.splice(indexId, delitItem);
        
    }

    //редактировать заметку
    overWrite(id, newText){
        const indexId = gettoDoHoldIndexById(id);
            this.toDoHold[indexId].text = newText;
    }

    // находит индекс
    gettoDoHoldIndexById(id) {
        return this.toDoHold.findIndex((item) => item.id === id);
    }

    
    
}
class ToDoList extends List {

    //меняет статус
    changesStatus(id){
        const indexId = gettoDoHoldIndexById(id);
        this.toDoHold[indexId].status = true;
    }

    // показывает статистику
    getStatistics() {
        const result = {
            total: this.toDoHold.length,
        };
        const completed = this.toDoHold.filter((i) => i.status).length;

        result.completed = completed;
        result.inComplete = result.total - completed;

        return result;
    }
    setLocalStorage(neme){
        const object = JSON.stringify(this.toDoHold);
        localStorage.setItem(neme, object);
    }
}






const list = new List()

const toList = new ToDoList()



