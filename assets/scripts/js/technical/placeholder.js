// array for the placeholder content
let searchtermholder = new Array ();
	searchtermholder[0] = "How do I wash a fursuit?",
	searchtermholder[1] = "Am I allowed to reload while self-defending?",
	searchtermholder[2] = "Is Striker really a furry?",
	searchtermholder[3] = "When will the Heavy update go live?",
	searchtermholder[4] = "Is God really my father?"

// randomzie placeholder content
let size = searchtermholder.length
let rn = Math.floor(size*Math.random())
$('#term').attr('placeholder',searchtermholder[rn]);