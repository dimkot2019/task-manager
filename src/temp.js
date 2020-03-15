function appendLocalStorage(key, value) {
  localStorage.setItem(key, value);
};

const keyInput = document.getElementById('key');
const valueInput = document.getElementById('value');
const sendButton = document.getElementById('send_btn');

sendButton.addEventListener('click', () => {
  const key = keyInput.value;
  const value = valueInput.value;

  appendLocalStorage(key, value);
});

const showAllButton = document.getElementById('show_all');
const divContainer = document.getElementById('container');

function getLocalStorageList() {
  return Object.keys(localStorage).sort().map((key, index) => {
    const value = localStorage.getItem(key);
    const div = document.createElement('div');

    const string = `${index}. Key = ${key}, Value = ${value}`;

    div.textContent = string;

    divContainer.appendChild(div);
  });
}

showAllButton.addEventListener('click', () => {
  divContainer.innerHTML = '';
  getLocalStorageList();
});

const tempObj = {
  name: 'Ivan',
  age: 90,
};

const tempJson = JSON.stringify(tempObj);
localStorage.setItem('ivan', tempJson);