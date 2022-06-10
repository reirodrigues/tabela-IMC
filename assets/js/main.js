function main() {
  const form = document.querySelector('.form')
  const resposta = document.querySelector('.resposta')

  function recebeEventoForm(evento) {
    evento.preventDefault()

    const peso = form.querySelector('#peso')
    const altura = form.querySelector('#altura')

    const resultado = peso.value / (altura.value * altura.value)

    function green() {
      resposta.classList.add('green')
    }
    function red() {
      resposta.classList.add('red')
    }
    function yellow() {
      resposta.classList.add('yellow')
    }

    function removeGreen() {
      resposta.classList.remove('green')
    }
    function removeRed() {
      resposta.classList.remove('red')
    }
    function removeYellow() {
      resposta.classList.remove('yellow')
    }

    if (
      peso.value === 0 ||
      peso.value === '' ||
      peso.value === null ||
      peso.value === NaN
    ) {
      resposta.innerHTML = `<p>Peso invalido</p>`
      red()
      removeGreen()
      removeYellow()
      return
    } else if (
      altura.value === 0 ||
      altura.value === '' ||
      altura.value === null ||
      altura.value === NaN
    ) {
      resposta.innerHTML = `<p>Altura invalido</p>`
      red()
      removeGreen()
      removeYellow()
      return
    }

    if (resultado < 18.5) {
      green()
      removeRed()
      removeYellow()
      resposta.innerHTML = `<p>Seu IMC é ${resultado.toFixed(
        2
      )} (Abaixo do peso)</p>`
    } else if (resultado <= 24.9) {
      green()
      removeRed()
      removeYellow()
      resposta.innerHTML = `<p>Seu IMC é ${resultado.toFixed(
        2
      )} (Peso normal)</p>`
    } else if (resultado <= 29.9) {
      yellow()
      removeRed()
      removeGreen()
      resposta.innerHTML = `<p>Seu IMC é ${resultado.toFixed(
        2
      )} (Sobrepeso)</p>`
    } else if (resultado <= 34.9) {
      red()
      removeGreen()
      removeYellow()
      resposta.innerHTML = `<p>Seu IMC é ${resultado.toFixed(
        2
      )} (Obesidade grau 1)</p>`
    } else if (resultado <= 39.9) {
      red()
      removeGreen()
      removeYellow()
      resposta.innerHTML = `<p>Seu IMC é ${resultado.toFixed(
        2
      )} (Obesidade grau 2)</p>`
    } else {
      red()
      removeGreen()
      removeYellow()
      resposta.innerHTML = `<p>Seu IMC é ${resultado.toFixed(
        2
      )} (Obesidade grau 3)</p>`
    }
  }
  form.addEventListener('submit', recebeEventoForm)
}

main()
