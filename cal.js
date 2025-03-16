let inputfield = document.querySelector("#main");
let buttons = document.querySelectorAll("button");
let result = null;
let currentinput = "";
buttons.forEach(button => {
    button.addEventListener("click", () => {
        const text = button.textContent;

        if (text == "C") {
            inputfield.value = "";
            currentinput = "";
        } else if (text == "=") {
            try {
                result = eval(inputfield.value);
                inputfield.value = result;
                currentinput = result.toString();
            } catch (e) {
                inputfield.value = "Error";
                currentinput = "";
            }
        } else {
            currentinput += text;
            inputfield.value = currentinput;
        }
    });
});
