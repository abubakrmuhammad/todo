const addButton = document.querySelector('#addBtn');

addButton.addEventListener('click', (event) => {
  event.preventDefault();
  addNewNote();
});

const addNewNote = (text = '') => {
  const titleText = document.getElementById('title').value;
  const noteText = document.getElementById('note').value;
  const checkTrue = document.getElementById('completedtrue').checked;
  const checkFalse = document.getElementById('completedfalse').checked;
  const priorityLow = document.getElementById('prioritylow').checked;
  const prirotyHigh = document.getElementById('priorityhigh').checked;

  const note = document.createElement('div');
  note.classList.add('note');

  const htmlData = `
        <div class="row todo">
            <div class="col-2">
                <h4>${titleText}</h4>
            </div>
            <div class="col-1">
                <h4></h4>
            </div>
            <div class="col-2">
                <h4></h4>
            </div>
            <div class="col-3">
                <h4></h4>
            </div>
            <div class="col-4">
                <h4>${noteText}</h4>
            </div>
        </div>
    `;

  note.insertAdjacentHTML('afterbegin', htmlData);

  console.log(note);

  document.body.appendChild(note);
};
