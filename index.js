// declarando variavel e seleciando a classe duvida
var elementosDuvida = document.querySelectorAll('.duvida')

// função
elementosDuvida.forEach(function (duvida) {
    duvida.addEventListener('click', function () {
        duvida.classList.toggle('ativa')
    })
})

