const body = document.body;
body.style.backgroundImage = 'url("/TO-DO-LIST-APP/build/images/to-do-list-background.jpg")';


const toDoListApp = (event) =>{
    event.preventDefault();

    const inputValue = document.getElementById('input').value;

    const newDisplay = document.getElementById('display');

    const paragraph = document.createElement('p');

    paragraph.style.cssText = 'min-width: 250px;'

    const newDiv = document.createElement('div');

    newDiv.style.cssText = 'display: flex; flex-direction: row; align-items: center; margin-top: 5px;' 
    
    const deleteButton = document.createElement('button');

    deleteButton.style.cssText = 'margin-left: 4px; background-color: red; padding: 4px;';

    deleteButton.textContent = 'Delete';

    deleteButton.addEventListener('click', () => {
        newDiv.remove();
    } )

     //validate input

     if(!inputValue){
        alert('Invalid input: Enter a task!');
    }
    else{
        paragraph.textContent = inputValue; 

        newDiv.appendChild(paragraph);

        newDiv.appendChild(deleteButton);
    
        newDisplay.appendChild(newDiv);

    }
    //end of validation

  

    //Clear display
    document.getElementById('input').value = '';
}