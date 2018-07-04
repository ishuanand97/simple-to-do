window.onload = function () {

    // window.localStorage.clear();

    let button = document.querySelector('#btn');
    let input = document.querySelector('#inp');
    let output = document.querySelector('#result');
    let totPendingItems = 0;
    let totCompletedItems = 0;
    var toDoList = [];

    if (localStorage.getItem("toDoList") != null) {
        var retrievedObject = localStorage.getItem('toDoList');
        var neww = JSON.parse(retrievedObject);
        for (var i = 0; i < neww.length; i++) {
            var tag = document.createElement("li");
            tag.append(neww[i]["task"]);
            var but = document.createElement("div");
            but.setAttribute("class", "buttons");
            if (neww[i]["isActive"] == "true") {
                tag.classList.add("active");
                totPendingItems++;
            } else {
                tag.classList.add("inactive");
                totCompletedItems++;

            }

            tag.setAttribute("value", toDoList.length)

            console.log("t", tag)

            // appending edit button attributes and sub class i
            var edit = document.createElement("button");
            if (tag.classList.contains("inactive"))
                edit.setAttribute("disabled", "true");
            edit.setAttribute("class", "listbuttons edit");
            var i_edit = document.createElement("i");
            i_edit.setAttribute("class", "material-icons");
            i_edit.setAttribute("id", "edit");
            i_edit.append("edit");
            edit.onclick = edit_li;
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


            // appending settings button attributes and sub class i
            var settings = document.createElement("div");
            settings.setAttribute("class", "settings");
            var set = document.createElement("button");
            set.setAttribute("class", "listbuttons gear");
            var i_gear = document.createElement("i");
            i_gear.setAttribute("class", "material-icons");
            i_gear.setAttribute("id", "gear");
            i_gear.append("settings");
            i_gear.onclick = slide_li;
            set.appendChild(i_gear);
            settings.appendChild(set);

            // appending all buttons to buttons class
            but.classList.add("hide");
            but.appendChild(edit);
            but.appendChild(check);
            but.appendChild(del);
            // appending main li to Ul


            tag.appendChild(but);
            tag.appendChild(settings);


            // li tree

            //     <li id="element">
            //          Hello Ishu this side
            //          <div class="buttons">
            //             <button class="listbuttons edit">
            //               <i class="material-icons" id="edit">edit</i></button>
            //             <button class="listbuttons check"><i class="material-icons" id="check">check_circle</i></button>
            //             <button class="listbuttons delete"><i class="material-icons" id="delete">delete</i></button>
            //         </div>
            //          <div id="id"></div>
            //   </li>


            data = {
                "task": neww[i]["task"],
                "id": toDoList.length,
                "isActive": neww[i]["isActive"]
            };
            toDoList.push(data);

            if (totPendingItems != 0 || totCompletedItems != 0) {
                var elem = document.getElementById("n");
                // elem.parentNode.removeChild(elem);
                elem.innerHTML = "";
            }

            output.appendChild(tag);

            update();
        }
    }

    console.log('toDoList', toDoList);

    let value = "";
    //    let todoList = [];
    button.onclick = new_li;

    function new_li() {
        if (input.value == "")
            window.alert("Enter something first");
        else {

            // creating a new li
            var tag = document.createElement("li");
            tag.append(input.value);
            var but = document.createElement("div");
            but.setAttribute("class", "buttons");
            tag.classList.add("active");
            tag.setAttribute("value", toDoList.length)



            // appending edit button attributes and sub class i
            var edit = document.createElement("button");
            edit.setAttribute("class", "listbuttons edit");
            var i_edit = document.createElement("i");
            i_edit.setAttribute("class", "material-icons");
            i_edit.setAttribute("id", "edit");
            i_edit.append("edit");
            edit.onclick = edit_li;
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


            // appending settings button attributes and sub class i
            var settings = document.createElement("div");
            settings.setAttribute("class", "settings");
            var set = document.createElement("button");
            set.setAttribute("class", "listbuttons gear");
            var i_gear = document.createElement("i");
            i_gear.setAttribute("class", "material-icons");
            i_gear.setAttribute("id", "gear");
            i_gear.append("settings");
            i_gear.onclick = slide_li;
            set.appendChild(i_gear);
            settings.appendChild(set);

            // appending all buttons to buttons class
            but.classList.add("hide");
            but.appendChild(edit);
            but.appendChild(check);
            but.appendChild(del);
            // appending main li to Ul


            tag.appendChild(but);
            tag.appendChild(settings);


            // li tree

            //     <li id="element">
            //          Hello Ishu this side
            //          <div class="buttons">
            //             <button class="listbuttons edit">
            //               <i class="material-icons" id="edit">edit</i></button>
            //             <button class="listbuttons check"><i class="material-icons" id="check">check_circle</i></button>
            //             <button class="listbuttons delete"><i class="material-icons" id="delete">delete</i></button>
            //         </div>
            //          <div id="id"></div>
            //   </li>


            data = {
                "task": input.value,
                "id": toDoList.length,
                "isActive": "true"
            };
            toDoList.push(data);

            document.getElementById("form").reset();
            if (totPendingItems == 0) {
                var elem = document.getElementById("n");
                // elem.parentNode.removeChild(elem);
                elem.innerHTML = "";
            }


            output.appendChild(tag);
            totPendingItems++;
            update();
            populateStorage();
            console.log(toDoList);
        }
    };

    // edit function    

    function edit_li() {

        var new_string = window.prompt("Edit Task:", this.parentNode.parentNode.firstChild.nodeValue);
        if (new_string) {
            this.parentNode.parentNode.firstChild.nodeValue = new_string;
            // console.log(this.parentNode.parentNode.children);
            var isActive = this.parentNode.parentNode.getAttribute("value");
            toDoList[isActive]["task"] = new_string;
        }
        populateStorage();
        // this.parentNode.parentNode.parentNode.firstChild.setAttribute("contentEditable", true);
    };


    function del_li() {
        if (this.parentNode.parentNode.parentNode.classList.contains("active"))
            totPendingItems--;
        else if (this.parentNode.parentNode.parentNode.classList.contains("inactive"))
            totCompletedItems--;

        var isActive = this.parentNode.parentNode.parentNode.getAttribute("value");
        toDoList.splice(isActive, 1);
        var xyz = this.parentNode.parentNode.parentNode.parentNode;
        this.parentNode.parentNode.parentNode.parentNode.removeChild(this.parentNode.parentNode.parentNode);

        for (var i = 0; i < toDoList.length; i++) {
            toDoList[i].id = i;
            xyz.children[i + 1].setAttribute("value", toDoList[i].id)
        }

        if (totPendingItems == 0 && totCompletedItems == 0) {
            var elem = document.getElementById("n").innerHTML = "-----There's nothing in your list yet-----";
        }
        update();
        populateStorage();

    };

    function check_li() {
        var isActive = this.parentNode.parentNode.parentNode.getAttribute("value");
        if (this.parentNode.parentNode.parentNode.classList.contains("active")) {
            totPendingItems--;
            totCompletedItems++;
            this.parentNode.parentNode.children[0].setAttribute("disabled", "true");
            toDoList[isActive]["isActive"] = "false";

        }

        if (this.parentNode.parentNode.parentNode.classList.contains("inactive")) {
            totPendingItems++;
            totCompletedItems--;
            this.parentNode.parentNode.children[0].removeAttribute("disabled");
            toDoList[isActive]["isActive"] = "true";
        }

        this.parentNode.parentNode.parentNode.classList.toggle("active");
        this.parentNode.parentNode.parentNode.classList.toggle("inactive");

        // console.log(this.parentNode.parentNode.children[0])
        console.log(toDoList);
        update();
        populateStorage();
    };

    function update() {
        document.querySelector(".pending").innerHTML = totPendingItems;
        document.querySelector(".completed").innerHTML = totCompletedItems;


    }

    function slide_li() {

        if (this.classList.contains("change-set-black")) {
            this.classList.remove("change-set-black");
            this.classList.add("change-set-white");
            this.parentNode.parentNode.parentNode.children[0].classList.add("hide");
            this.parentNode.parentNode.parentNode.children[0].classList.remove("show");
            this.parentNode.parentNode.parentNode.classList.add("reset-li-pad");
            this.parentNode.parentNode.parentNode.classList.remove("set-li-pad");
            setTimeout(clearColor, 500);
            this.parentNode.classList.add("color-w");
            this.parentNode.classList.remove("color-b");
        } else {
            this.classList.remove("change-set-white");
            this.classList.add("change-set-black");
            this.parentNode.parentNode.parentNode.children[0].classList.add("show");
            this.parentNode.parentNode.parentNode.children[0].classList.remove("hide");
            this.parentNode.parentNode.parentNode.classList.add("set-li-pad");
            this.parentNode.parentNode.parentNode.classList.remove("reset-li-pad");

            setTimeout(clearColor, 500);
            this.parentNode.classList.add("color-b");
            this.parentNode.classList.remove("color-w");
            // this.parentNode.parentNode.parentNode.children[0].classList.toggle("hide");


        }

        function clearColor() {
            return;
        }
    }

    function populateStorage() {
        localStorage.setItem("toDoList", JSON.stringify(toDoList));
        console.log("update", JSON.stringify(toDoList));
    }
};