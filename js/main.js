'use strict';

let todos = [];
let addBtn = document.querySelector('#add-btn');
let input = document.querySelector('#add-input');
let list = document.querySelector('#todos');

function addTodos() {
     todos.push(input.value);
};

function addItem(todo = input.value) {
     if(todo) {
          let i = 0;
          todos.push([input.value, false]);
          list.innerHTML += `<li id="${i}">${input.value}</li>`;
          i++;
          console.log(i)
          input.value = '';
     };
};
function setCookies() {
     Cookies.set('todos', JSON.stringify(todos), {
          expires: 30,
     });
};
// checks the item
list.addEventListener('click', (e) => {
     if (e.target.tagName === 'LI') {
          todos[e.target.id][1] = true;
          console.log(todos)
          e.target.style.color = 'red';
          setCookies();
     };
});

addBtn.addEventListener('click', addItem);
window.addEventListener('keydown', (e) => {
     if(e.key == 'Enter') {
          addItem();
     };
});

window.addEventListener('load', ()=>{
     if (Cookies.get('todos')) {
          todos = JSON.parse(Cookies.get('todos'));
          console.log(todos);
          for(let i = 0; i < todos.length; i++) {
               console.log(todos[i])
               list.innerHTML += `<li id="${i}">${todos[i][0]}</li>`
               if(todos[i][1] == true) {
                    document.querySelector("#" + i).style.color = 'red';
               };
          };
     };
});

// on reload