var newDiv=document.createElement('div');
newDiv.className='hello';
newDiv.id='hello1';
newDiv.setAttribute('title','Hello Div');
var newDivText=document.createTextNode('Hello World');
newDiv.appendChild(newDivText);
var container=document.querySelector('header-container');
var h1=document.querySelector('header h1');
console.log(newDiv)
newDiv.style.fontSize='30px';
container.insertBefore(newDiv,h1);

