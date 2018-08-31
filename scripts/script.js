var html = document.querySelector('html');
var list = document.createElement('ul');
var info = document.createElement('p');

info.textContent = 'Below is a dynamic list. Click anywhere outside the list to add a new list item. Click an existing list item to change its text to something else.';

document.body.appendChild(info);
document.body.appendChild(list);

html.onclick = function () {
  var listContent = prompt('What content do you want the list item to have?');

  var listItem = document.createElement('li');
  listItem.textContent = listContent;

  list.appendChild(listItem);

  listItem.onclick = function (e) {
    e.stopPropagation();
    var listContent = prompt('Enter new content for your list item');
    this.textContent = listContent;
  };
};
