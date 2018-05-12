//Load function on pade load.
window.onload = function(){  

//Call 'rule-button' function when clicked.
document.getElementById("rule-button").onclick = function() {
	ruleButtonClicked()
};

//function called when 'awardButtonClicked' is clicked.
function ruleButtonClicked() {
/*List of rules*/
	var rules = [
	{
		icon: 'images/tempCard.png',
		name: 'Over Cautious',
		discription: 'The player must go prone for after every five kills, until the next kill occurs.',
	},
	{
		icon: 'images/tempCard.png',
		name: 'Never Right',
		discription: 'The player may only rotate the camera left. For example, if they want to look right they would have to 360.',
	},
	];

//End of Rules variable.
	var randomRule = [Math.floor(Math.random() * rules.length)];
	var selectedRule = rules[randomRule];

	document.getElementById("rule-icon").innerHTML = '<img src="'+selectedRule.icon+'" style="height: 100px;"">';
	document.getElementById("rule-title").innerHTML = selectedRule.name;
	document.getElementById("rule-discription").innerHTML = selectedRule.discription;
};
};
