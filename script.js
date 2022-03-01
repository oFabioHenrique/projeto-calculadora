function cacularEq(a, b, c) {       
    let NumberA = Number(a)
    let NumberB = Number(b)
    let NumberC = Number(c)

    if ( NumberA == '0' && NumberB > '0' && NumberC > '0') {
        alert(`Impossível efetuar operação com X² vazio` )    
    } else if ( NumberA == '0' &&  NumberB == '0' &&  NumberC == '0') {
        alert(`Impossível efetuar operação com campos vazios` )    
    }
    else {
    let delta = Math.pow(NumberB, 2) - (4 * NumberA * NumberC)
    
    if (delta < 0 ) {
        document.getElementById('resultadoEq').innerHTML = `Equação de Segundo Grau Indefinida`
    } 
    if (delta == 0) {
        let resultado = ( - NumberB + Math.sqrt(delta)) / (2 * NumberA)
        document.getElementById('resultadoEq').innerHTML = `Resultado Exato da Equação: ${resultado}` 
    }
    if (delta > 0) {
        let x1 = ( - NumberB + Math.sqrt(delta)) / (2 * NumberA)
        let x2 = ( - NumberB - Math.sqrt(delta)) / (2 * NumberA)
        document.getElementById('resultadoEq').innerHTML = `Dois resultados existentes:<br>[1º: ${x1} | 2º: ${x2}]`
    }
   
    }  
}
function calcularSoma(number1, number2) {
    let NumberSoma1 = Number(number1)
    let NumberSoma2 = Number(number2)
    if ( NumberSoma1 == '0' &&  NumberSoma2 == '0') {
        alert(`Impossível efetuar operação com campos vazios` )    
    } else{
    let resultado = NumberSoma1 + NumberSoma2
    document.getElementById('resultadoSoma').innerHTML = `Resultado da soma é: [${resultado}]`
    }
}
function calcularSub(sub1, sub2) {
    let NumberSub1 = Number(sub1)
    let NumberSub2 = Number(sub2)
    if ( NumberSub1 == '0' &&  NumberSub2 == '0') {
        alert(`Impossível efetuar operação com campos vazios` )    
    } else {   
    let resultado = (NumberSub1) - (NumberSub2)
    document.getElementById('resultadoSub').innerHTML = `Resultado da subtração é: [${resultado}]`
    }
}
function calcularMulti(multi1, multi2) {
    let NumberMulti1 = Number(multi1)
    let NumberMulti2 = Number(multi2)
    if (NumberMulti1 == '0' && NumberMulti2 == '0')
    alert(`Impossível efetuar operação com campos vazios`)
    else {
        let resultado = NumberMulti1 * NumberMulti2
        document.getElementById('resultadoMulti').innerHTML = `Resultado da multiplicação é: [${resultado}]`
    }
}
function calcularDiv(div1, div2) {
    let NumberDiv1 = Number(div1)
    let NumberDiv2 = Number(div2)
    if (NumberDiv1 == '0' && NumberDiv2 == '0'){
        alert(`Impossível efetuar operação com campos vazios`)
     } else if (NumberDiv2 == '0') {
        alert(`Impossível efetuar divisão por 0`)
     }
    else {
        let resultado = NumberDiv1 / NumberDiv2
        document.getElementById('resultadoDiv').innerHTML = `Resultado da divisão é: [${resultado}]`
    }
}
// add classe para aumentar botão menor
const pegarBotao = document.querySelector('.btnMenor')

const  btnAumentarLento = () => {
    if (pegarBotao.classList.contains('buttonDiminuirLento')){
        pegarBotao.classList.remove('buttonDiminuirLento')
        pegarBotao.classList.add('buttonAumentarLento')
    } else {
        pegarBotao.classList.add('buttonAumentarLento')
    }
}
pegarBotao.addEventListener('mouseover', btnAumentarLento)
// remove classe aumentar e add classe diminuir
const btnDiminuirLento = () => {
    if ( pegarBotao.classList.contains('buttonAumentarLento')) {
        pegarBotao.classList.remove('buttonAumentarLento')
    }
    pegarBotao.classList.add('buttonDiminuirLento')
}
pegarBotao.addEventListener('mouseout', btnDiminuirLento)

// voltar ao topo 

function voltarAoTopo() {
    window.scrollTo({
        top: 0, behavior: 'smooth'
    })
}

