
function adicionarMusic(){
	
	var myMusicInput = document.getElementById("linkMusic").value;
	var myMusicInputId = myMusicInput.substr(17);
	var linkMusicNaTela = document.getElementById("video");
	
	var linkIframe = `<iframe width="670" height="640" src="https://www.youtube.com/embed/${myMusicInputId}" title="player" frameborder="0" allow="autoplay; clipboard-write;"></iframe>`;

	var linkArtista = `<h1><font color="white">YouTube Radio</font><h1><h2><font color="gray">Reproduzindo agora</font></h2>`;
	
	var linkFinal = linkIframe + linkArtista;

	linkMusicNaTela.innerHTML = linkFinal;

	document.getElementById("linkMusic").value = "";

}

var listaMusic = [ "https://www.youtube.com/embed/ieWe5AW1uNY",
	"https://www.youtube.com/embed/EL2R3vszMPQ",
	"https://www.youtube.com/embed/qO2dR1tXGTY",
	"https://www.youtube.com/embed/pWX4OzyGo5w",
	"https://www.youtube.com/embed/UgfsbL-uHOA",
	"https://www.youtube.com/embed/k1JHlNIZo74",
	"https://www.youtube.com/embed/JKPp3Kshb7c",
	"https://www.youtube.com/embed/sje0ZZZwJaA",
	"https://www.youtube.com/embed/OcnrboRX0lQ",
	"https://www.youtube.com/embed/7MhCwXstCRM"
];

var listaArtista = ["Justin Bieber - MY Word",
"MUSE - Greatest Hits ",
"G̲uns N Roses - Greatest Hit",
"Coldplay - Greatest Hit",
"Top 100 Best Classic Rock Of All Time",
"Wesley Safadão - Atualizado",
"Justin Bieber - Justice",
"Natta - Atualizado",
"Justin Bieber - Change",
"Justin Bieber - freedom"
];




function musicAleatoria(){
	var musicEscolhida = Math.floor(Math.random() * 11)
	console.log(musicEscolhida)

	var linkMusicNaTela = document.getElementById("video");

	var linkIframe = `<iframe width="670" height="640" src="https://www.youtube.com/embed/${listaMusic[musicEscolhida]}" title="player" frameborder="0" allow="autoplay; clipboard-write;"></iframe>`;

	var linkArtista = `<h1><font color="white"> ${listaArtista[musicEscolhida]}</font><h1><h2><font color="gray">Reproduzindo agora</font></h2>`;
	var linkFinal = linkIframe + linkArtista;

	linkMusicNaTela.innerHTML = linkFinal;



}



