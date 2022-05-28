let button = document.querySelector("#enter");
let userInput = document.querySelector("#userInput");
let ul = document.querySelector("ul");
let i = document.querySelectorAll("i");

function createLi(){
	let li = document.createElement("li");
	li.innerHTML = (`<i class="fas fa-trash-alt"></i> ${userInput.value}`);
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

function cross(item){
	//For HTML documents, the returned tag name is always upper-case.
	if (item.target.tagName === "LI"){
		item.target.classList.toggle("cross");
	}
}

function trash(item) {
	if (item.target.tagName === "I"){
		item.target.parentElement.remove();
	}
}

function ulEvents(item){
	trash(item);
	cross(item);
}

ul.addEventListener("click", ulEvents);



