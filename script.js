let button = document.querySelector("#enter");
let userInput = document.querySelector("#userInput");
let ul = document.querySelector("ul");

function createLi(){
	let li = document.createElement("li");
	li.innerHTML = (`${userInput.value}`);
	ul.appendChild(li);
	userInput.value = "";
}

button.addEventListener("click", function() {
	if (userInput.value.length > 0) {
		createLi();
	}
})

userInput.addEventListener("keypress", function(event) {
	if (userInput.value.length > 0 && event.which === 13) {
		createLi();
	}
})



// let lis = document.querySelectorAll("li")

// lis.addEventListener("click", function() {
// 	lis.classList.toggle("done")
// });
