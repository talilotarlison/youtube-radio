
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
// array com objetos dentro, fica mais clear e mais identificavel o codigo
var listaMusic = [ { id: "ieWe5AW1uNY", nome:"Justin Bieber - MY Word"},
	{ id:"EL2R3vszMPQ",nome:"MUSE - Greatest Hits"},
	{ id:"qO2dR1tXGTY",nome:"Guns N Roses - Greatest Hit"},
	{ id:"pWX4OzyGo5w",nome:"Coldplay - Greatest Hit"},
	{ id:"UgfsbL-uHOA",nome:"Top 100 Best Classic Rock Of All Time"},
	{ id:"k1JHlNIZo74",nome:"Wesley Safadão - Atualizado"},
	{ id:"JKPp3Kshb7c",nome:"Justin Bieber - Justice"},
	{ id:"sje0ZZZwJaA",nome:"Nattan - Atualizado"},
	{ id:"OcnrboRX0lQ",nome:"Justin Bieber - Change"},
	{ id:"7MhCwXstCRM",nome:"Justin Bieber - freedom"},
	{ id:"e6QhH3q-UJE",nome:"The Beatles - As melhores"},
	{id : "jCGPUycuKOk", nome: "Justin Bieber - Justice Full"},
{id:"gP9yCQf9x7M",nome:"Justin Bieber - As Melhores Full"},
{id:"T9yeAvJ3hQQ",nome:"Justin Bieber - TikTok"},
{id:"GpabipVtFSQ",nome:"Forro Atulizado 2022"},
{id:"GpabipVtFSQ",nome:"Forro Atulizado 2022"}  
];


function musicAleatoria(){
	var musicEscolhida = Math.floor(Math.random() * 15)
	console.log(musicEscolhida)

	var linkMusicNaTela = document.getElementById("video");

	var linkIframe = `<iframe width="670" height="640" src="https://www.youtube.com/embed/${listaMusic[musicEscolhida].id}" title="player" frameborder="0" allow="autoplay; clipboard-write;"></iframe>`;
	console.log(linkIframe);
	var linkArtista = `<h1><font color="white"> ${listaMusic[musicEscolhida].nome}</font><h1><h2><font color="gray">Reproduzindo agora</font></h2>`;
	var linkFinal = linkIframe + linkArtista;

	linkMusicNaTela.innerHTML = linkFinal;



}

