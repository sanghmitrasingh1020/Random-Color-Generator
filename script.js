const getColor = () => {
    //Hex Code
    const randomNumber = Math.floor(Math.random() * 16777215);
    const randomCode = "#" + randomNumber.toString(16);
    document.body.style.backgroundColor = randomCode;
    document.getElementById("color-code").innerText = randomCode;

    navigator.clipboard.writeText(randomCode); //when we click on "Click Me" then randomCode automatically copied
}

//event call
document.getElementById("btn")
    .addEventListener("click", getColor);

//initial call
getColor();