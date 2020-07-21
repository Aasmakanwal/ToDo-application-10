
 var  condition = "edit"
function addEvents(){
    if (condition == "edit"){
    var taskInput = document.getElementById("task-input")
    var ul = document.getElementById("list")
    var val = taskInput.value
    var li = document.createElement("li")
    var span = document.createElement("span")
    var editButton = document.createElement("button")
    var dltButton = document.createElement("button")
    editButton.innerHTML = "Edit"
    dltButton.innerHTML = "Remove"
    editButton.setAttribute("class" , "edit")
    dltButton.setAttribute("class" , "remove")
    editButton.setAttribute("onclick" , "edit(this)")
    dltButton.setAttribute("onclick" , "remove(this)")
    li.setAttribute("class" , "list-items")
    if (val == ""){
        alert("Enter What Do you Want to Do....")
    }else {
    ul.appendChild(li)
    span.innerHTML = val
    li.appendChild(span)
    li.appendChild(editButton)
    li.appendChild(dltButton)
    taskInput.value = ""
    }
}
}
function removeAll(){
    var ul = document.getElementById("list")
    ul.innerHTML = ""
}
function remove(r){
    var remove = r.parentElement.remove()
}
function edit(e){
   
    if (e.innerHTML == "Edit" & condition == "edit"){
       var edit = e.parentElement.firstChild
       var editInput = document.createElement("input")
       editInput.setAttribute("class" , "item-input")
       var val = edit.innerHTML
       edit.innerHTML = ""
       edit.appendChild(editInput)
       editInput.value = val
       e.innerHTML = "Update"
       condition = "update"
    }else if (e.innerHTML == "Update" & condition == "update"){
        var edit = e.parentElement.firstChild
        var val = edit.firstChild.value
        edit.innerHTML = val
        e.innerHTML = "Edit"
        condition = "edit"
     }
  
}