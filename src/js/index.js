const listaSelecaoPokemons = document.querySelectorAll('.pokemon')
const pokemonCard = document.querySelector('.pokemon-card')

listaSelecaoPokemons.forEach(pokemon => {
    pokemon.addEventListener('click',() => {
        //pegando a class OPEN e removendo ela
        const cartaoPokemonAberto = document.querySelector('.open')
        cartaoPokemonAberto.classList.remove('open')

        const idPokemonSelecionado = pokemon.attributes.id.value

        const idDoCartaoParaAbrir = idPokemonSelecionado + '-card'
        const cartaoPokemonParaAbrir = document.getElementById(idDoCartaoParaAbrir)
        cartaoPokemonParaAbrir.classList.add('open')
        //fazendo a cor do menu trocar de acordo com o pokemon
        const pokemonAtivoNaListagem = document.querySelector('.ativo')
        pokemonAtivoNaListagem.classList.remove('ativo')

        const pokemonSelecionadoNaListagem = document.getElementById(idPokemonSelecionado)
        pokemonSelecionadoNaListagem.classList.add('ativo')
    })
}) 