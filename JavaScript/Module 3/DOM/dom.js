//You can use JavaScript to access the elements by their id attribute and store them in variables:

var title = document.getElementById("title")

var button = document.getElementById("change")

var para = document.getElementById("p")

//You can use JavaScript to change the text content of the title element:

title.textContent = "Welcome to js DOM manipulation"

//You can use JavaScript to change the style (CSS) of the title element:

title.style.color = "red"
title.style.fontSize = "36px"


para.style.color = "blue"
para.style.fontSize = "25px"


//You can use JavaScript to add an event listener to the button element, so that when it is clicked, it changes the color of the title element to a random color:

button.addEventListener("click", function () {
    var randomColor = "#" + Math.floor(Math.random() * 16777215).toString(16);
    title.style.color = randomColor;
})
