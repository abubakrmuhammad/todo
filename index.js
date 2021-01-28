
const addButton = document.querySelector('#add');

var titleText = document.getElementById('title').value;
var noteText = document.getElementById('note').value;
var checkTrue = document.getElementById('completedtrue').checked;
var checkFalse = document.getElementById('completedfalse').checked;
var priorityLow= document.getElementById('prioritylow').checked;
var prirotyHigh = document.getElementById('priorityhigh').checked;

const addNewNote =  (Text = '') => {
const note = document.createElement('div');
note.classList.add('note');
const htmlData = `
<div class="row todo">
<div class="col-2">
    <h4>${titleText}</h4>
</div>
<div class="col-1"><h4></h4></div>
<div class="col-2"><h4></h4></div>
<div class="col-3">
    <h4></h4>
</div>
<div class="col-4">
    <h4>${noteText}</h4>
</div>
</div>`;
note.insertAdjacentHTML('afterbegin' , htmlData);
console.log(note);
document.body.appendChild(note);


};
addButton.addEventListener('click',()=> addNewNote() );