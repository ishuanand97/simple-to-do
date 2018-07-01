window.onload = function () {
    let button = document.querySelector('#btn');
    let input = document.querySelector('#inp');
    let output = document.querySelector('#result');
    let totPendingItems = 0;
    let totCompletedItems = 0;


    let value = "";
    //    let todoList = [];
    button.onclick = function () {
        if (input.value == "")
            window.alert("Enter something first");
        else {

            // creating a new li
            var tag = document.createElement("li");
            tag.append(input.value);
            var but = document.createElement("div");
            but.setAttribute("class", "buttons");
            tag.classList.add("active");



            // appending edit button attributes and sub class i
            var edit = document.createElement("button");
            edit.setAttribute("class", "listbuttons edit");
            var i_edit = document.createElement("i");
            i_edit.setAttribute("class", "material-icons");
            i_edit.setAttribute("id", "edit");
            i_edit.append("edit");
            i_edit.onclick = edit_li;
            edit.appendChild(i_edit);


            // appending check button attributes and sub class i
            var check = document.createElement("button");
            check.setAttribute("class", "listbuttons check");
            var i_check = document.createElement("i");
            i_check.setAttribute("class", "material-icons");
            i_check.setAttribute("id", "check");
            i_check.append("check_circle");
            i_check.onclick = check_li;
            check.appendChild(i_check);


            // appending delete button attributes and sub class i
            var del = document.createElement("button");
            del.setAttribute("class", "listbuttons delete");
            var i_delete = document.createElement("i");
            i_delete.setAttribute("class", "material-icons");
            i_delete.setAttribute("id", "delete");
            i_delete.append("delete");
            i_delete.onclick = del_li;
            del.appendChild(i_delete);

            // appending all buttons to buttons class
            but.appendChild(edit);
            but.appendChild(check);
            but.appendChild(del);

            // appending main li to Ul
            tag.appendChild(but);


            // li tree

            //     <li id="element">
            //          Hello Ishu this side
            //          <div class="buttons">
            //             <button class="listbuttons edit">
            //               <i class="material-icons" id="edit">edit</i></button>
            //             <button class="listbuttons check"><i class="material-icons" id="check">check_circle</i></button>
            //             <button class="listbuttons delete"><i class="material-icons" id="delete">delete</i></button>
            //         </div>
            //   </li>

            document.getElementById("form").reset();
            if (totPendingItems == 0) {
                var elem = document.getElementById("n");
                // elem.parentNode.removeChild(elem);
                elem.innerHTML = "";
            }
            output.appendChild(tag);
            totPendingItems++;
            console.log(totCompletedItems);
            console.log(totPendingItems);
            update();
        }
    };

    // edit function    

    function edit_li() {

        var new_string = window.prompt("Edit Task:", this.parentNode.parentNode.parentNode.firstChild.nodeValue);
        if (new_string != "") {
            this.parentNode.parentNode.parentNode.firstChild.nodeValue = new_string;
            console.log(this.parentNode.parentNode.parentNode.firstChild.nodeValue);

        }
    };


    function del_li() {
        if (this.parentNode.parentNode.parentNode.classList.contains("active"))
            totPendingItems--;
        if (this.parentNode.parentNode.parentNode.classList.contains("inactive"))
            totCompletedItems--;
        this.parentNode.parentNode.parentNode.parentNode.removeChild(this.parentNode.parentNode.parentNode);

        if (totPendingItems == 0) {
            var elem = document.getElementById("n").innerHTML = "-----There's nothing in your list yet-----";
        }
        update();
    };

    function check_li() {
        
        if (this.parentNode.parentNode.parentNode.classList.contains("active")){
            totPendingItems--;
            totCompletedItems++;
        }
            
        if (this.parentNode.parentNode.parentNode.classList.contains("inactive")){
            totPendingItems++;
            totCompletedItems--;
        }
           
            this.parentNode.parentNode.parentNode.classList.toggle("active");
            this.parentNode.parentNode.parentNode.classList.toggle("inactive");
        
        update()
    };

    function update() {
        document.querySelector(".pending").innerHTML = totPendingItems;
        document.querySelector(".completed").innerHTML = totCompletedItems;
    }
};