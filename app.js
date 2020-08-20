
var condition = "edit"

firebase.database().ref('Todo').on('child_added', function (data) {

    // creat li
    var ul = document.getElementById("list")
    var val = data.val().value
    var li = document.createElement("li")
    var span = document.createElement("span")
    var editButton = document.createElement("button")
    var dltButton = document.createElement("button")

    // buttons
    editButton.innerHTML = "Edit"
    dltButton.innerHTML = "Remove"
    editButton.setAttribute("class", "edit")
    editButton.setAttribute("id", data.val().key)
    dltButton.setAttribute("class", "remove")
    dltButton.setAttribute("id", data.val().key)
    editButton.setAttribute("onclick", "edit(this)")
    dltButton.setAttribute("onclick", "remove(this)")
    li.setAttribute("class", "list-items")
    ul.appendChild(li)
    span.innerHTML = val
    li.appendChild(span)
    li.appendChild(editButton)
    li.appendChild(dltButton)
})

function addEvents() {
    if (condition == "edit") {
        var taskInput = document.getElementById("task-input")
        if (taskInput.value == ""){
            alert("Enter What Do You Want To Do...")
        }else {
        var key = firebase.database().ref('Todo').push().key
            var work = {
                key: key,
                value: taskInput.value
            }

            firebase.database().ref('Todo').child(key).set(work)
        }
            taskInput.value = ""
    }
}
function removeAll() {
    firebase.database().ref('Todo').remove()
    var ul = document.getElementById("list")
    ul.innerHTML = ""
}
function remove(r) {
    var remove = r.parentElement.remove()
    firebase.database().ref('Todo').child(r.id).remove()
}
function edit(e) {

    if (e.innerHTML == "Edit" & condition == "edit") {
        var edit = e.parentElement.firstChild
        var editInput = document.createElement("input")
        editInput.setAttribute("class", "item-input")

        var val = edit.innerHTML
        edit.innerHTML = ""
        edit.appendChild(editInput)
        editInput.value = val
        
        e.innerHTML = "Update"
        condition = "update"
    } else if (e.innerHTML == "Update" & condition == "update") {

        var edit = e.parentElement.firstChild
        var val = edit.firstChild.value
        if (val == "") {
            alert("Enter What Do You Want to Do...")
        } else {
            edit.innerHTML = val
            var editTodo = {
                key : e.id,
                value : val
            }
            firebase.database().ref('Todo').child(e.id).set(editTodo) 
            e.innerHTML = "Edit"
            condition = "edit"
        }
    }

}