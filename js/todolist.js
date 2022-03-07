const todoInput = document.querySelector("#memo-form input");
const todoButton = document.querySelector("#todo-button");

const todoBoard = document.querySelector("#todo-board");
const complete = document.querySelector("#complete");

todoButton.addEventListener("click",todoFormButton);
let count = 1;
function todoFormButton() {
   
    const li = document.createElement("li");
   
    const checkbox = document.createElement("input");
    checkbox.type = "checkbox";
  
    checkbox.addEventListener("click", todoCheck);
    const text = document.createTextNode(todoInput.value);

    
    const button = document.createElement("button");
    button.textContent ="X";
    button.addEventListener("click", todoDelete);
    li.appendChild(checkbox);
    li.appendChild(text);
    li.appendChild(button);
    todoBoard.appendChild(li);
    

  
}

function todoCheck(event) {
  
    // console.log(event.target)
    const checkbox = event.target;
    if (checkbox.checked) {
        checkbox.parentNode.style.color="lightgray";
    }
    else {
        checkbox.parentNode.style.color="black";
    }
    complete.textContent = `오늘 완료 할일 : ${count}개`;
    count++;
    
}

function todoDelete(event) {
    event.target.parentNode.remove();
}


