window.onload = function () {
    let button = document.getElementById('btn');
    let input = document.getElementById('inp');
    let output = document.getElementById('result');

    let value = "";
    //    let todoList = [];
    button.onclick = function () {
        if (input.value == "")
            window.alert("Enter the job first");
        else {
            value += `<li id="element">${input.value}<div class="buttons"><button class="listbuttons edit"><i class="material-icons" id="edit" style="">edit</i></button><button class="listbuttons check"><i class="material-icons" id="check" style="">check_circle</i></button><button class="listbuttons delete"><i class="material-icons" id="delete" style="">delete</i></button></div> </li>`;
            //        todoList.push(value);
            //        display();

            document.getElementById("form").reset();
            output.innerHTML = value;

        }
    };


};


//0
//    function display() {
//        let list = "";
//       for(let todo=0; todo<todoList.length; todo++) {
//          list += todoList[todo];
//       }