window.onload = function () {
    const users = ["9330","2177","6842","1244","4043","0311","6220","5598","7464","5287","4354","5909","8708","4665",
        "1866","7153","8397","0622","7775","1555","6531","9952","9641","3421","3732","0933","9019","8086","2488","2799",
        "3110","4976","JAD2"]
    const userID_area = document.querySelector('input[name="userid"]')
    const form = document.getElementById("UserValidation")

    form.onsubmit = validate;

    function validate(event) {
        event.preventDefault()
        let userID = userID_area.value;
        let right = users.includes(userID)
        if (right === true) {
            submit();
        } else {
            userID_area.setAttribute("aria-invalid", "true")
            document.getElementById("errors").innerHTML = ""
            if (userID === "") {
                document.getElementById("errors").innerHTML = "Enter a user ID"
            }
            else {
                document.getElementById("errors").innerHTML = "Invalid user ID"
            }
        }
    }

    function submit() {
        window.location = "trainer2.html"
    }
}
