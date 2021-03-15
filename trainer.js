let traverse_code = false
let current_cell = "A1"
let row = 1
let column = 1
let sr = true
let vis = true
let traversed = ["A1"]

window.onload = function() {
    document.getElementById("startButton").onclick = function () {
        traverse()
    };

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
    let last_cell = current_cell
    let alpha = ["A", "B", "C", "D", "E", "F"]
    let alpha_col = alpha[column-1]
    current_cell = alpha_col + row.toString()
    traversed.push(current_cell)
    console.log(traversed)
    if (vis === true) {
        document.getElementById(last_cell).style.background = "blue";
        document.getElementById(current_cell).style.background = "aqua";
    }
    if (sr === true) {
        let p = document.getElementById("SR-update")
        let add = document.createTextNode(" " + current_cell)
        p.append(add)
    }
}

function reset(){
    row = 1
    column = 1
    current_cell = "A1"
    document.getElementById("SR-update").innerText = ""
    var i;
    for (i = 0; i < traversed.length; i++) {
        let traversed_cell = traversed[i];
        document.getElementById(traversed_cell).style.background = "#ccc";
    }
    traversed = []

}

function refresh() {
    if (traverse_code === true) {
        window.addEventListener("keydown", function (event) {
            if (event.defaultPrevented) {
                return; // Do nothing if event already handled
            }
            switch (event.code) {

                case "KeyS":
                    // Handle "down"
                    if (row < 6) {
                        row += 1
                    } else {
                        row = 1
                    }
                    break;
                case "KeyW":// Handle "up"
                    if (row > 1) {
                        row -= 1
                    } else {
                        row = 6
                    }
                    break;
                case "KeyA":// Handle "left"
                    if (column > 1) {
                        column -= 1
                    } else {
                        column = 6
                    }
                    break;
                case "KeyD":// Handle "right"
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
            update_position(row, column)
            refresh()
            // Consume the event so it doesn't get handled twice
            event.preventDefault()
            event.stopPropagation();}, true);
    }
    else{
        document.getElementById("A1").style.background = "aqua";
    }
}
