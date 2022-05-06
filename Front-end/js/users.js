
import api from './service/api.js';

const userContainer = document.querySelector('.table-users tbody');

  
function createUserRow(user) {
  const userRow = `<tr>
    <td>${user.name}</td>
    <td>${user.email}</td>
    <td>${user.address}</td>
  </tr>`;

  userContainer.insertAdjacentHTML('beforeend', userRow);
}

async function loadUsers() {
  const users = await api.read('/users');

  for (const user of users) {
    createUserRow(user);
  }
}

loadUsers();
console.log('hello');
