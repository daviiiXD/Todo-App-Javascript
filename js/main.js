'use strict';

let todos = [];
let addBtn = document.querySelector('#add-btn');
let input = document.querySelector('#add-input');
let list = document.querySelector('#todos');

function addTodos() {
     todos.push(input.value);
};

let i = 0;
function addItem() {
     if(input.value) {
          todos.push([input.value, false]);
          list.innerHTML += `<li id="${i}">${input.value}</li>`;
          i++;
          console.log(i)
          input.value = '';
          setCookies();
     };
};
function setCookies() {
     Cookies.set('todos', todos, {
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

windows.addEventListener('load', ()=>{

});

// on reload