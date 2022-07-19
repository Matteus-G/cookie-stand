//'use strict';

//console.log('hello world');

let jumper = {
  name: ' Jumper',
  like: ['Cuddling', 'lazer pointer', 'catnip'],
  render: function () {
    for (let i = 0; i < this.like.length; i++) {
      let li = document.createElement('li');
      li.textContent = `${this.name} likes ${this.like[i]}`;
      list.appendChild(li);
    }
  }
}

let art = document.createElement('article')

variable.appendChild(art);

let h3 = document.createElement('h3');

h3.textContent = 'Jumper'

let para = document.createElement('p');
para.textContent = 'Jumper the cat is a cat';
art.appendChild(para);

// 1. Create the image/h3/para
let image = document.createElement('img');
// 2. Give it content
image.src = 'filefolder/filename.jpeg';
image.alt = 'Jumper is a cat';
image.height = 275
image.width = 184
// 3. append to the DOM
art.appendChild(image);

let list = document.createElement('ul');

art.appendChild(list);
let listItem = document.createElement('li');
//listItem = `6am: ${seattle.comeValueInAnArray [i]} cookies`;

jumper.render();
