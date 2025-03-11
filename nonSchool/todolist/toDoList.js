const button = document.querySelector('.button');
const input = document.querySelector('input');
const date = document.querySelector('.date');
// const tasklList = document.querySelector('.input');
const showtask = document.querySelector('.showTask');

let todoList = [];



button.addEventListener('click', () => {
    todoList.push({
        date: date.value,
        task: input.value
    });
    generateList();
});


generateList = () => {
    todoList.forEach((item) => {
        console.log(item);
        list = document.createElement('h4');
        list.innerHTML = item.task + ' ' + item.date;
        showtask.appendChild(list);
        todoList = [];


        // showtask.innerHTML = item.task + ' ' + item.date;
        
    });
}


// usefull to know so i wrote it down

// document.querySelector('.button')
//     .foreach((button, i) => {

//         button.addEventListener('click', () => {
//             console.log('button ' + i + ' clicked');} );

//         });
    