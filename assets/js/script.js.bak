
function adicionarMusic(){
	
	var myMusicInput = document.getElementById("linkMusic").value;
	var myMusicInputId = myMusicInput.substr(17);
	var linkMusicNaTela = document.getElementById("video");
	
	var linkIframe = `<iframe width="670" height="640" src="https://www.youtube.com/embed/${myMusicInputId}" title="player" frameborder="0" allow="autoplay; clipboard-write;"></iframe>`;

	var linkArtista = `<h1><font color="white">YouTube Radio</font><h1><h2><font color="gray">Reproduzindo agora</font></h2>`;
	
	var linkFinal = linkIframe + linkArtista;

	linkMusicNaTela.innerHTML = linkFinal;

	document.getElementById("linkMusic").value = " ";

}




