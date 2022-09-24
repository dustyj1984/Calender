var importantIcon = "fas fa-star";
var nonImportantIcon = "far fa-star";
var isImportant = false;
var isVisable=true;


function saveTask(){


let title= $("#txtTitle").val();
let dueDate= $("#txtDescription").val();
let description= $("#txtdueDate").val();
let tag= $("#txtTag").val();
let color= $("#txtColor").val();
let category= $("#txtCategory").val();


let task= new Task(title, description, dueDate, tag, color,category);

dispayTask(task);
clearFrom();

}

function clearFrom(){
    $("#txtTitle").val('');
    $("#txtDescription").val('');
    $("#txtdueDate").val('');
    $("#txtTag").val('');
    $("#txtColor").val('');
    $("#txtCategory").val('');
}
function dispayTask(task){
    let syntax=
    `<div class="task">
        <div class = "info">
            <h3>${task.title}</h3>
            <p>${task.description}</p>
        </div>

        <label class="date">
            ${task.dueDate}
        </label>

        <div class= "extra">
            <label>${task.category}</label>
            <label>${task.tag}</label>
            
        </div>
    </div>`;

    $("#taskList").append(syntax);
}



function changeIcon(){
    if(isImportant == false){
        //change to important
    $('#iImportant').removeClass(nonImportantIcon).addClass(importantIcon);
    isImportant = true;
}
else{
    $('#iImportant').removeClass(importantIcon).addClass(nonImportantIcon); isImportant= false;
    }
}
function hideList(){

    if(isVisable){
    $(".info").hide();
    isVisable = false;
    }
    else{
    $(".info").show();
    isVisable = true;
    }
}

function init() {
    console.log("Task Manager");

    //load prev data

    //catch events
    $("#btnSave").click(saveTask);//jQuery
    $("#iImportant").click(changeIcon);

    
    $("#btnToggle").click(hideList);
}

window.onload = init;