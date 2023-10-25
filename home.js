accordion = document.getElementById("accordion").children;

function closeAccordionItem(nbr){
	for (i=0; i<accordion.length; i++){
		if (accordion[i].getAttributeNode("aria-level").value == nbr) accordion[i].setAttribute("aria-hidden", true);
	}
}

function openAccordionItem(nbr){
	for (i=0; i<accordion.length; i++){
		if (accordion[i].getAttributeNode("aria-level").value == nbr) accordion[i].setAttribute("aria-hidden", false);
	}

}