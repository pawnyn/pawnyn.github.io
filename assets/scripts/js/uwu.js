var err = `Oy mate, are ye really that stewpid? Blimey when I say that I 'ave never seen sumeone as stewpid as you. I bet you don't even 'ave free 'elfcare. Now fill out the fields corretly, will ya? Ain't that hard, innit?`

function owo(hisName, hisForm, hisCrime, yourName) {
	hisName = document.getElementById('who').value
	hisForm = document.getElementById('what').value
	hisCrime = document.getElementById('done').value
	yourName = document.getElementById('you').value

	if (hisName === '' || hisName == undefined) {
		document.getElementById('sp').innerHTML = err
	} else {
		hisName = hisName
	}

	if (hisForm === '' || hisForm == undefined) {
		document.getElementById('sp').innerHTML = err
	} else if (hisForm.startsWith())
		if (hisCrime === '' || hisCrime == undefined) {
			document.getElementById('sp').innerHTML = err
		} else {
			hisCrime = hisCrime
		}

	if (yourName === '' || yourName == undefined) {
		document.getElementById('sp').innerHTML = err
	} else {
		yourName = yourName
	}

	var r = `${yourName} said to him: “There’s this one guy I know, ${hisName} is his name, if I remember correctly. I mean, sure, he’s a ${hisForm} but apart from that... he’s pretty alright.<br/><br/>Sure, he has his ups and downs as well, but none of us is really perfect, right? There was this one time where he committed ${hisCrime}. I thought it was pretty dope and brave (but also a bit disturbing). He also met Travis Scott is Walmart once... walked up to him and said, ‘Yo, why don’t you go sicko mode for me?’ Dude, I never wanted to die more than when ${hisName} did that... so cringey. I had the big LOLZ last week when Striker and I went to Taco Bell and french-kissed in the toilet cabin – was we gayin’ around? Bro, I do think so, yeah. The manager found us and said in his Mexican accent: “${hisName} and ${yourName} are officially banned form ever coming into this Taco Bell Restaurant again. Damn, I miss my tacos.<br><br><br>“That’s cool, I guess,” said <i>The Man Behind the Slaughter</i>.`

	document.getElementById('sp').innerHTML = r
}
