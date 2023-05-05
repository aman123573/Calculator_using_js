console.log("script file");

let buttons = document.querySelectorAll('.button');
let screen = document.getElementById('screen');
let string = "";
buttons.forEach((button) => {
    button.addEventListener('click', (e) => {

        try {

            if (e.target.innerHTML == '=') {
                string = eval(string);
                screen.value = string;
            }
            else if (e.target.innerHTML == 'C') {
                string = "";
                screen.value = string;
            }
            else if (e.target.innerHTML === "X") {
                // console.log("clicked");
                // let newString = string.replace(/.$/,'');
                let newString = string.slice(0,-1);
                screen.value = newString;
                string = newString;

            }
            else {
                string = string + e.target.innerHTML;
                // console.log(string);
                screen.value = string;

            }
        } catch (error) {
            alert(error);
            string = "";
            screen.value = string;
        }

    })

})