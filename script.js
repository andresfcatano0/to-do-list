let button = document.querySelector("#enter");
let userInput = document.querySelector("#userInput");
let ul = document.querySelector("ul");
// let li = document.querySelectorAll("li");

// for (let i = 0; i < li.length; i++){
// 	li[i].addEventListener("click", function(event) {
// 		event.target.classList.toggle("done");
// 	});
// }


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


function done(item){
	//For HTML documents, the returned tag name is always upper-case.
	if (item.target.tagName === "LI"){
		item.target.classList.toggle("done");
	}
}

ul.addEventListener("click", done);


