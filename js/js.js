let newItem = document.getElementById ('newitem');
let list = document.getElementById("list");

newItem.onkeypress = function (event) {
    event = event || window.event;
    let charCode = event.charCode || event.which;
    if (charCode == 13) {
        if (event.preventDefault) {
            event.preventDefault ();
        }
        event.returnValue = false;

        let input = document.createElement ('input');
        input.setAttribute ('type', 'checkbox');
        input.setAttribute ('name', 'todo');
        input.setAttribute ('value', list.getElementsByTagName("li").length + 1);
        input.setAttribute ('onclick', 'checkboxChecked ()');

        let li = document.createElement ("li");
        li.appendChild (input);
        li.appendChild (document.createTextNode (newItem.value));
        list.appendChild(li);

        newItem.value = '';        
    }
}

function checkboxChecked () {
    let checkboxList = document.getElementsByName("todo")
    for (let i = 0; i < checkboxList.length; i++) {
        if (checkboxList[i].checked) {
            checkboxList[i].parentElement.classList.add ('done');
        } else {
            checkboxList[i].parentElement.classList.remove ('done');
        }
    }
}