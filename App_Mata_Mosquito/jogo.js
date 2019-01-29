//vars
var y = 0
var x = 0
var vidas = 1
var tempo = 15
var criaMosquitoTempo = 1700
var nivel = window.location.search

//Definindo dificuldade
nivel = nivel.replace('?', '')
if (nivel === 'facil') {
	criaMosquitoTempo = 1700
}else if (nivel === 'normal') {
	criaMosquitoTempo = 1100
}else if (nivel ==='dificil'){
	criaMosquitoTempo = 850
}else if (nivel === 'deus') {
	criaMosquitoTempo = 500
}

//funções
function ajustarTamanhoJogo()
{
	y = window.innerHeight
	x = window.innerWidth
}
ajustarTamanhoJogo()

var cronometro = setInterval(function()
{
	tempo -= 1
	if (tempo < 0) 
	{
		clearInterval(cronometro)
		clearInterval(criaMosquito)
		window.location.href = 'vitoria.html'
	} else{
		document.getElementById('cronometro').innerHTML = tempo
	}
	
}, 1000)

function posicaoRandomica()
{

	//remover o mosquito anterior (caso exista)
	if (document.getElementById('mosquito')) 
	{
		document.getElementById('mosquito').remove()
		//controle de vidas
		if (vidas > 3) 
		{
			window.location.href = 'fim_de_jogo.html'
		} else{
			document.getElementById('v' + vidas).src = "imagens/coracao_vazio.png"
			vidas++
		}
		
	}

	//posição
	var posicaoX = Math.floor(Math.random() * x) - 90
	var posicaoY = Math.floor(Math.random() * y) - 90

	posicaoX = posicaoX < 0 ? 0 : posicaoX
	posicaoY = posicaoY < 0 ? 0 : posicaoY

	//elemento html
	var mosquito = document.createElement('img')
	mosquito.src = 'imagens/mosca.png'
	mosquito.className = tamanhoAleatoro() + ' ' + ladoAleatorio()
	mosquito.style.left = posicaoX + 'px'
	mosquito.style.top = posicaoY + 'px'
	mosquito.style.position = 'absolute'
	mosquito.id = 'mosquito'
	mosquito.onclick = function()
	{
		this.remove()
	}

	document.body.appendChild(mosquito)
}

function tamanhoAleatoro()
{
	var classe = Math.floor(Math.random() * 3)

	switch(classe)
	{
		case 0:
			return 'mosquito1'

		case 1:
			return ' mosquito2'

		case 2:
			return 'mosquito3'

	}
}

function ladoAleatorio()
{
	var classe = Math.floor(Math.random() * 2)

	switch(classe)
	{
		case 0:
			return 'ladoA'

		case 1:
			return 'ladoB'
	}
}