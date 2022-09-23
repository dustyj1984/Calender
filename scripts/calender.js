var importantIcon = "fas fa-star";
var nonImportantIcon = "far fa-star";
var isImportant = false;
var isVisable=true;


function saveTask(){
console.log("Button clicked");
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