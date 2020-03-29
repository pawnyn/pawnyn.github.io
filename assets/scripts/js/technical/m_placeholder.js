/* MOH VERSION */

// array for the placeholder content
let searchtermholder = new Array ();
	searchtermholder[0] = "Is Moh the leader of TMP?",
	searchtermholder[1] = "Am I worth Moh's time?",
	searchtermholder[2] = "Where to report Moh haters?",
	searchtermholder[3] = "What colour is the Moh M?",
	searchtermholder[4] = "Difference: Moh and God?"

// randomzie placeholder content
let size = searchtermholder.length
let rn = Math.floor(size*Math.random())
$('#term').attr('placeholder',searchtermholder[rn]);