const todoList = []

const addTodo = () => {
    let todo = prompt('What do you want to do')
    todo = todo.toLowerCase().trim()

    if (checkSimilar(todo, todoList)){
        alert('Item already exists!')
    } else {
        todoList.push(todo)
    }
}


const checkSimilar = (todo, todoList) => {
    let exist = false

    for (let i = 0; i < todoList.length; i++){
        if (todoList[i].includes(todo)){
            exist = true
        }
    }
    return exist
}

const removeItemWithPop = (todoList) => {
    if (todoList.length>0){
        todoList.pop()
        console.log(`1 item was removed! It was ${todoList.length-1}`)
    } else {
        console.log(`There are no more items to remove`)
    }
}

//remove an individual item
const removeItem = (todoList) => {
    const item = prompt(`Here are the items in your todo list: ${todoList}. Type the item you want to remove`)
    const itemEdited = item.trim().toLowerCase()

    const index = todoList.indexOf(itemEdited)

    if (index === -1) {
        alert('Item doesn\'t exist. Please try again')
    } else {
        let removedItem = todoList.splice(index, 1)
        console.log(`'${removedItem}' was removed from your list. Remaining list is [${todoList}]`)
    }
}


addTodo()
addTodo()
addTodo()
console.log(todoList)
removeItem(todoList)
