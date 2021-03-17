window.onload = function() {
    document.getElementById("continueButton").onclick = function() {
        finish()
    }

    document.getElementById("finished").onclick = function() {
        end()
    }

    function finish(){
        window.location = "long_auth.html"
    }

    function end(){
        window.location.href = "https://forms.office.com/Pages/ResponsePage.aspx?id=i9hQcmhLKUW-RNWaLYpvlHgTT4tRTI1Ii-xvWCaMLylURFFYVEY3OEM0QzVPMEw5SVY1WVhBQU42Ti4u"
    }
}