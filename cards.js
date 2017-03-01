var addButton = document.getElementById('addCard');
var cardHolder = document.getElementById('cards');


function deleteCard(event){
	if(event.target.className === 'delete'){
		event.target.parentNode.remove();
	}
}

function addCard(event){
	if (event.target.className === 'addCard') {
		var userInput = document.getElementById("userInput").value;
		cardHolder.innerHTML += `<div class="dream-card">${userInput}<button class="delete">Take this nightmare!</button><div>`;
	}
}

document.body.addEventListener("click", addCard);
document.body.addEventListener("click", deleteCard);