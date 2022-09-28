var importantIcon = "fas fa-star";
var nonImportantIcon = "far fa-star";
var isImportant = false;
var isVisable=true;


function saveTask(){


let title= $("#txtTitle").val();
let description= $("#txtDescription").val();
let dueDate= $("#txtdueDate").val();
let tag= $("#txtTag").val();
let color= $("#txtColor").val();
let category= $("#txtCategory").val();


let task= new Task(title, description, dueDate, tag, color,category);
//save on server

$.ajax({
    type: "POST",
    url: "https://fsdiapi.azurewebsites.net/api/tasks",
    data:JSON.stringify(task),
    contentType: "application/json",  
    succuss: function(response){     
        dispayTask(task);
        clearFrom();
       
    },
       
    
    error: function(details){
        console.log("Server says", details);
        alert("error, we cound not save your tasks");
    },
   
});


}

function clearFrom(){
    $("#txtTitle").val('');
    $("#txtDescription").val('');
    $("#txtdueDate").val('');
    $("#txtTag").val('');
    $("#txtColor").val('');
    $("#txtCategory").val('');
}
function displayTask(task){
    let syntax= `<div class="card" style="border-color:${task.color}">
   
        <div class = "card-body">
            <h3 class= "card-header">${task.title}</h3>
            <p class = "card-text">${task.description}</p>
        </div>

        <label class="date">
            ${task.dueDate}
        </label>

        <div class= "extra">
        <div>
            <label class="cat">${task.category}</label>
        </div>

            <label class="tag">${task.tag}</label>
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

function fetchTasks(){
    $.ajax({
        type: "GET",
        url: "https://fsdiapi.azurewebsites.net/api/tasks",
        success: function (response){
            let allTasks= JSON.parse(response);
            for(let i=0; i<allTasks.length; i++){
                let task= allTasks[i];
                if(task.name== "DustinJensen"){
                displayTask(task);
                }
            }
    },
        error: function (details){
            console.log("Error", details);
        },
    });
}
function testRequest(){
    $.ajax({
        type: "GET",
        url:"https://fsdiapi.azurewebsites.net",
        success: function(data){
            console.log(data);

        },
        error: function(details){
            console.log("error", details);
        },
    });
}

function init() {
    console.log("Task Manager");
   //load prev data
    fetchTasks();

    

    //catch events
    $("#btnSave").click(saveTask);//jQuery
    $("#iImportant").click(changeIcon);

    
    $("#btnToggle").click(hideList);
}

window.onload = init;