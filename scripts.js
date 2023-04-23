
var updating = false;
var rownumberforupdate = 0;

function onSubmit(){
    //Creation of Data
    var details = readform();
    document.getElementById("form").reset();

    let emptyfield = false;
    for (const key in details){
        if(details[key] == ""){
            emptyfield = true;
            break;
        }
    }

    if(!emptyfield){
        //Updating of Data
        if (updating){
            updateDetails(details);
        }
        //Reading of Data 
        else{   
            insertDetails(details);
        }
    }
    else (
        alert("Please Fill In All the Fields")
    )
}

//Creation of Data
function readform(){
var data = {};
data["fname"] = document.getElementById("fname").value
data["lname"] = document.getElementById("lname").value 
data["address"] = document.getElementById("address").value 
data["gender"] = document.getElementById("gender").value 
data["food"] = document.getElementById("food").value 
data["state"] = document.getElementById("state").value 
data["Country"] = document.getElementById("Country").value 
return data;
}

//Reading of Data 

function insertDetails(formdata){
    var table = document.getElementById("tablebody");
    var newrow = table.insertRow(table.children.length -1);

    var cell0 = newrow.insertCell(0);
    cell0.innerHTML = formdata.fname;

    var cell1 = newrow.insertCell(1);
    cell1.innerHTML = formdata.lname;

    var cell2 = newrow.insertCell(2);
    cell2.innerHTML = formdata.address;

    var cell3 = newrow.insertCell(3);
    cell3.innerHTML = formdata.gender;

    var cell4 = newrow.insertCell(4);
    cell4.innerHTML = formdata.food;

    var cell5 = newrow.insertCell(5);
    cell5.innerHTML = formdata.state;

    var cell6 = newrow.insertCell(6);
    cell6.innerHTML = formdata.Country;

    newrow.insertCell(7).innerHTML = `<a onClick = 'deleteRow(this)'>Delete</a>`
    newrow.insertCell(8).innerHTML = `<a onClick = 'editRow(this)'>Edit</a>`
}

//DELETE ROW

function deleteRow(anchor){
    var row = anchor.parentElement.parentElement;
    document.getElementById("formtable").deleteRow(row.rowIndex);
}

//EDITING THE FORM 
function editRow(anchor){
    var button = document.getElementById("submitbutton")
    button.setAttribute("value","Update");

    var row = anchor.parentElement.parentElement;

    var cell = document.getElementById("formtable").rows[row.rowIndex].cells;
    document.getElementById("fname").value = cell[0].innerHTML;
    document.getElementById("lname").value = cell[1].innerHTML;
    document.getElementById("address").value = cell[2].innerHTML;
    document.getElementById("gender").value = cell[3].innerHTML;
    document.getElementById("food").value = cell[4].innerHTML;
    document.getElementById("state").value = cell[5].innerHTML;
    document.getElementById("Country").value = cell[6].innerHTML;

    rownumberforupdate = row.rowIndex;
    updating = true;
}

//Update Details
 
function updateDetails(formdata){
    var cell = document.getElementById("formtable").rows[rownumberforupdate].cells;

    cell[0].innerHTML = formdata.fname;
    cell[1].innerHTML = formdata.lname;
    cell[2].innerHTML = formdata.address;
    cell[3].innerHTML = formdata.gender;
    cell[4].innerHTML = formdata.food;
    cell[5].innerHTML = formdata.state;
    cell[6].innerHTML = formdata.Country;
    
    var button = document.getElementById("submitbutton")
    button.setAttribute("value","Submit");
    
    updating = false;
}