const input = document.querySelector('input');
const button = document.querySelector('button');
const ul = document.querySelector('ul');

button.addEventListener('click', add);

function add() {
  if (input.value === '') return;
  const newEl = document.createElement('li');
  newEl.textContent = input.value;
  ul.appendChild(newEl);
  input.value = '';
}
