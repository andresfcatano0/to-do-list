let button = document.querySelector("#enter");
let userInput = document.querySelector("#userInput");
let ul = document.querySelector("ul");
let i = document.querySelectorAll("i");

const createLi = () => {
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
	//event.which === 13, refers to the "return" key.
	if (userInput.value.length > 0 && event.which === 13) {
		createLi();
	}
})

const cross = (item) => {
	//For HTML documents, the returned tag name is always upper-case.
	if (item.target.tagName === "LI"){
		//The .target element is used in order to implement event delegation.
		//.target refers to the clicked li element. 
		item.target.classList.toggle("cross");
	}
}

const trash = (item) => {
	//.target in this case "I", refers to the trash can icon.
	if (item.target.tagName === "I"){
		item.target.parentElement.remove();
	}
}

const ulEvents = (item) => {
	//This function contain both the strikethrough and delete event listeners.
	trash(item);
	cross(item);
}

ul.addEventListener("click", ulEvents);



