var globalButton = document.getElementById("enter");
var globalInput = document.getElementById("userinput");
var globalUnsortedListItem = document.querySelector("ul");
var globalListItems = document.querySelectorAll("li");

function inputLength() {
	return globalInput.value.length;
}

function createListElement() {
	var localListItem = document.createElement("li");
	localListItem.appendChild(document.createTextNode(globalInput.value + " "));
	globalUnsortedListItem.appendChild(localListItem);
	globalInput.value = "";
	createListButton(localListItem); // "Delete" Button for new List Item
}

function createListButton(element) {
	var listButton = document.createElement("button");
	listButton.appendChild(document.createTextNode("Delete"));
	element.appendChild(listButton);
	addListner(listButton);
}

function addListAfterClick() {
	if (inputLength() > 0) {
		createListElement();
	}
}

function addListAfterKeypress(event) {
	if (inputLength() > 0 && event.keyCode === 13) {
		createListElement();
	}
}

function toggleDelete() {
	globalUnsortedListItem.removeChild(this.parentNode);
}

function addListner(button){
	button.addEventListener("click", toggleDelete);
}


globalButton.addEventListener("click", addListAfterClick);
globalInput.addEventListener("keypress", addListAfterKeypress);

globalListItems.forEach(createListButton);
