'use strict'

function	add_list()
{
	const inputText = document.getElementById("add-text").value;

	document.getElementById("add-text").value = "";
	createIncompleteList(inputText);
}

const deleteFromIncompleteList = (targetId,target) => {
	document.getElementById(targetId).removeChild(target);
}

const createIncompleteList = (text) => {
	const div = document.createElement("div");
	div.className = "list-row";

	const li = document.createElement("li");

	const p = document.createElement("p");
	p.className = "paragraph";
	p.innerText = text;

	const completebutton = document.createElement("button");
	completebutton.innerText = "完了";
	completebutton.addEventListener("click", () => {
		deleteFromIncompleteList("incmplete-list", completebutton.parentNode.parentNode);
		const addTarget = completebutton.parentNode;
		const text = addTarget.firstElementChild.innerText;
		addTarget.textContent = null;
		const li = document.createElement("li");
		const p = document.createElement("p");
		p.innerText = text;
		p.className = "paragraph";
		const restoreButton = document.createElement("button");
		restoreButton.innerText = "戻す";
		restoreButton.addEventListener("click", () => {
			const deleteTarget = restoreButton.parentNode.parentNode;
			console.log(deleteTarget);
			deleteFromIncompleteList("complete-list", deleteTarget);
			//document.getElementById("complete-list").removeChild(deleteTarget);
			const text = restoreButton.parentNode.firstElementChild.innerText;
			createIncompleteList(text);
		});
		addTarget.appendChild(p);
		addTarget.appendChild(restoreButton);
		li.appendChild(addTarget);
		console.log(li);
		document.getElementById("complete-list").appendChild(li);
	});
	const deletebutton = document.createElement("button");
	deletebutton.innerText = "削除";
	deletebutton.addEventListener("click", () => {
		const deleteTaget = deletebutton.parentNode.parentNode;
		deleteFromIncompleteList("incmplete-list", deleteTaget);
	});
	div.appendChild(p);
	div.appendChild(completebutton);
	div.appendChild(deletebutton);
	li.appendChild(div);
	document.getElementById("incmplete-list").appendChild(li);
}

const onclickAdd = () => {
	const inputText = document.getElementById("add-text").value;
	if (inputText !== "")
		add_list();
}
const add_button = document.getElementById("add-button");
add_button.addEventListener("click", onclickAdd);
