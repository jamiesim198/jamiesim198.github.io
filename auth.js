let traverse_code = false
let current_cell = "A1"
let row = 1
let column = 1
let sr = true
let vis = true
let passcode = []
let move = false

let validcells = ["A1","A2","A3","A4","A5","A6","B1","B2","B3","B4","B5","B6","C1","C2","C3","C4","C5","C6","D1","D2","D3"
    ,"D4","D5","D6","E1","E2","E3","E4","E5","E6","F1","F2","F3","F4","F5","F6"]

window.onload = function() {
    const cell_area = document.querySelector('input[name="start_cell"]')
    const form = document.getElementById("Cell_entry")

    form.onsubmit = validate;

    function checkalphabet(number){
        return
    }

    function validate(event) {
        event.preventDefault()
        let cell = cell_area.value.toUpperCase();
        row = parseInt(cell[1])
        let alpha = ["A", "B", "C", "D", "E", "F"]
        let column_a = cell[0]
        column = (alpha.indexOf(column_a)) + 1
        let right = validcells.includes(cell)
        if (right === true) {
            current_cell = cell
            traverse();
        } else {
            cell_area.setAttribute("aria-invalid", "true")
            document.getElementById("errors").innerHTML = ""
            if (cell === "") {
                document.getElementById("errors").innerHTML = "Enter a starting cell"
            }
            else {
                document.getElementById("errors").innerHTML = "Invalid starting cell, must be in the form XY " +
                    "where X is a letter from A to F and Y is a number 1 to 6"
            }
        }
    }

    document.getElementById("finishButton").onclick = function() {
        finish()
    }

    function traverse() {
        traverse_code = true
        refresh()
    }

    function finish(){
        window.location = "auth.html"
    }
}

function update_position(row, column){
    passcode.push(current_cell)
    console.log(passcode)
    let last_cell = current_cell
    let alpha = ["A", "B", "C", "D", "E", "F"]
    let alpha_col = alpha[column-1]
    current_cell = alpha_col + row.toString()
    if (vis === true) {
        document.getElementById(last_cell).style.background = "blue";
        document.getElementById(current_cell).style.background = "aqua";
    }
    if (sr === true) {
        let p = document.getElementById("SR-update")
        let add = document.createTextNode(" " + current_cell)
        p.append(add)
    }
    move = false
}

function reset(){
    row = 1
    column = 1
    current_cell = "A1"
    document.getElementById("SR-update").innerText = ""
    var i;
    for (i = 0; i < passcode.length; i++) {
        let traversed_cell = current_cell[i];
        document.getElementById(traversed_cell).style.background = "#ccc";
    }
    passcode = []

}

function refresh() {
    if (traverse_code === true) {
        window.addEventListener("keydown", function (event) {
            if (event.defaultPrevented) {
                return; // Do nothing if event already handled
            }
            switch (event.code) {
                case "KeyS":
                    move = true
                    if (row < 6) {
                        row += 1
                    } else {
                        row = 1
                    }
                    break;
                case "KeyW":// Handle "up"
                    move = true
                    if (row > 1) {
                        row -= 1
                    } else {
                        row = 6
                    }
                    break;
                case "KeyA":// Handle "left"
                    move = true
                    if (column > 1) {
                        column -= 1
                    } else {
                        column = 6
                    }
                    break;
                case "KeyD":// Handle "right"
                    move = true
                    // Handle "down"
                    if (column < 6) {
                        column += 1
                    } else {
                        column = 1
                    }
                    break;
                case "KeyM":
                    if (sr === true){
                        sr = false
                    }
                    else{
                        sr = true
                    }
                    break;
                case "KeyN":
                    if (vis === true){
                        vis = false
                    }
                    else{
                        vis = true
                    }
                    break;
                case "KeyR":
                    reset()
                    break;
            }
            if (move === true) {
                update_position(row, column)
            }
            refresh()
            // Consume the event so it doesn't get handled twice
            event.preventDefault()
            event.stopPropagation();}, true);
    }
}
