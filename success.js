window.onload = function() {
    document.getElementById("continueButton").onclick = function() {
        finish()
    }

    function finish(){
        window.location = "long_auth.html"
    }
}