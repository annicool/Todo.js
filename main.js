let myForm = document.querySelector("form");
let myInput = document.querySelector("input");
let listGroup = document.querySelector("ul");
let DleteAll = document.querySelector ("button")


const saveTodo = (e) => {
    e.preventDefault();
    let newLi = document.createElement("li");
    newLi.innerText = myInput.value;
    newLi.classList = "list-group-item rounded-0"
    listGroup.appendChild(newLi);
    let delBtn = document.createElement("button");
    delBtn.innerText = "Delete";
    delBtn.className = "btn btn-sm btn-danger float-end";
    newLi.appendChild(delBtn);
    myForm.reset();
};


myForm.addEventListener("submit", saveTodo);

const deleteTodo = (e) => {
if (e.target.className.includes("btn-danger")){
    let li = e.target.parentElement;
    if(window.confirm("Are You Sure..."))
    listGroup.removeChild(li);
};
    
}

listGroup.addEventListener ("click" , deleteTodo)