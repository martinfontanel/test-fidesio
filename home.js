accordion = document.getElementById("accordion").children;

function closeAccordionItem(nbr){
	/*for (i=0; i<accordion.length; i++){
		if (accordion[i].getAttributeNode("aria-id").value == nbr) accordion[i].setAttribute("aria-expanded", false);
	}*/
	accordion[nbr].setAttribute("aria-expanded", false);
}

function openAccordionItem(nbr){
	/*for (i=0; i<accordion.length; i++){
		if (accordion[i].getAttributeNode("aria-id").value == nbr) accordion[i].setAttribute("aria-expanded", true);
	}*/
	accordion[nbr].setAttribute("aria-expanded", true);

}