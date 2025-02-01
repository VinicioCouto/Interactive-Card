const nomeTitular = document.querySelector('.nome')
const numeroCartao = document.querySelector('.numero')
const dataExpd = document.querySelector('.data-expd')
const cvc = document.querySelector('.cvc')

const inputNome = document.querySelector('#nome')
const inputNumero = document.querySelector('#numero')
const inputMes = document.querySelector('#mes')
const inputAno = document.querySelector('#ano')
const inputCvc = document.querySelector('#cvc')

function formatarNumeroCartao(valor) {
    valor = valor.replace(/\s/g, '')
    return valor.replace(/(\d{4})/g, '$1 ').trim()
}

inputNome.addEventListener('input', function () {
    let nome = inputNome.value
    if (nome === '') {
        nomeTitular.textContent = 'Nome do Titular'
    } else {
        nomeTitular.textContent = nome
    }
    
})

inputNumero.addEventListener('input', function () {
    let valor = inputNumero.value.replace(/\D/g, '')
    valor = valor.slice(0, 16)

    if (valor === '') {
        numeroCartao.textContent = '0000 0000 0000 0000'
    } else {
        const valorFormatado = formatarNumeroCartao(valor)
    numeroCartao.textContent = valorFormatado
    } 
})

inputMes.addEventListener('input', function(){
    const mes = inputMes.value || '00'
    const ano = inputAno.value || '00'
    dataExpd.textContent = `${mes}/${ano}`
})

inputAno.addEventListener('input', function() {
    const mes = inputMes.value || '00'
    const ano = inputAno.value || '00'
    dataExpd.textContent = `${mes}/${ano}`
})

inputCvc.addEventListener('input', function(){
    let tcvc = inputCvc.value || '000'
    tcvc = tcvc.replace(/\D/g, '')
    tcvc = tcvc.slice(0, 3)
    cvc.textContent = `${tcvc}`
})