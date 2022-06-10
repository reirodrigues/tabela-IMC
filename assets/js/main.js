function main() {
  // Capturando o form / div. por meio de id.
  const form = document.querySelector('#formulario')

  // Prevenção do envião do butão, com função anônima.
  form.addEventListener('submit', function (e) {
    e.preventDefault()
    // Pegando os eventos nos inputs
    const inputPeso = e.target.querySelector('#peso') // Ou form.querySelector('#peso');
    const inputAltura = e.target.querySelector('#altura') // Ou form.querySelector('#altura');
    // Pegando os valores dos inputs
    const peso = Number(inputPeso.value)
    const altura = Number(inputAltura.value)

    //Checando se são validos diferentes de Number
    if (!peso) {
      setResultado('Peso inválido', false)
      return
    }

    if (!altura) {
      setResultado('Altura inválido', false)
      return
    }

    const imc = getImc(peso, altura)
    const nivelImc = getNivelImc(imc)

    const msg = `Seu IMC é ${imc} (${nivelImc}).`

    setResultado(msg, true)
  })

  // Criando o Paragrafo
  function criaP() {
    const p = document.createElement('p')
    return p
  }

  // Função para setar o resultado na div
  function setResultado(msg, isValid) {
    const resultado = document.querySelector('#resultado')
    resultado.innerHTML = ''
    const p = criaP()
    p.innerHTML = msg
    resultado.appendChild(p)

    if (isValid) {
      p.classList.add('paragrafo-resultado')
    } else {
      p.classList.add('bad')
    }
  }

  // Calcular valor do imc
  function getImc(peso, altura) {
    const imc = peso / altura ** 2
    return imc.toFixed(2)
  }

  // Niveis do imc
  function getNivelImc(imc) {
    const nivel = [
      'Abaixo do peso',
      'Peso normal',
      'Sobrepeso',
      'Obesidade grau 1',
      'Obesidade grau 2',
      'Obesidade grau 3'
    ]

    if (imc >= 40) return nivel[5]
    if (imc >= 35) return nivel[4]
    if (imc >= 30) return nivel[3]
    if (imc >= 25) return nivel[2]
    if (imc >= 18.5) return nivel[1]
    if (imc < 18.5) return nivel[0]
  }
}

main()
