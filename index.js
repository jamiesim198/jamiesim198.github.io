window.onload = function () {
    const users = ["j"]
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
        window.location = "trainer.html"
    }
}