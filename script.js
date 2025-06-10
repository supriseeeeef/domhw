var cats = document.querySelectorAll('#categories .item');
console.log('У списку ' + cats.length + ' категорії.');

for (var i = 0; i < cats.length; i++) {
    var title = cats[i].querySelector('h2').textContent;
    var itemsCount = cats[i].querySelectorAll('ul li').length;
    console.log('Категорія: ' + title);
    console.log('Кількість елементів: ' + itemsCount);
}

var ingredients = [
    'Картопля',
    'Гриби',
    'Часник',
    'Помідори',
    'Зелень',
    'Приправи',
];
var list = document.getElementById('ingredients');
var lis = [];

for (var i = 0; i < ingredients.length; i++) {
    var li = document.createElement('li');
    li.textContent = ingredients[i];
    lis.push(li);
}

list.append.apply(list, lis);

var images = [
    {
        url:
            'https://images.pexels.com/photos/140134/pexels-photo-140134.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
        alt: 'White and Black Long Fur Cat',
    },
    {
        url:
            'https://images.pexels.com/photos/213399/pexels-photo-213399.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
        alt: 'Orange and White Koi Fish Near Yellow Koi Fish',
    },
    {
        url:
            'https://images.pexels.com/photos/219943/pexels-photo-219943.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
        alt: 'Group of Horses Running',
    },
];

var gallery = document.getElementById('gallery');
var html = '';

for (var i = 0; i < images.length; i++) {
    html +=
        '<li><img src="' + images[i].url + '" alt="' + images[i].alt + '"></li>';
}

gallery.insertAdjacentHTML('beforeend', html);

var counter = 0;
var valEl = document.getElementById('value');
var btnDec = document.querySelector('button[data-action="decrement"]');
var btnInc = document.querySelector('button[data-action="increment"]');

function update() {
    valEl.textContent = counter;
}

function inc() {
    counter = counter + 1;
    update();
}

function dec() {
    counter = counter - 1;
    update();
}

btnInc.addEventListener('click', inc);
btnDec.addEventListener('click', dec);

update();