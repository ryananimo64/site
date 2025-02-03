/**
 * @Author Ryan Rodrigues
 */

// INserindo o ano na tag <span>
let ano = document.getElementById('copyrightYear')
// a linha abaixo obtem o ano atual do sistema
let anoatual = new Date().getFullYear()
// a linha abaixo atribui o ano a tag <span>
ano.innerHTML = anoatual


//========================================================================================================================

//let indice = 0
//const imgs = document.getElementById('imagens')
//const imagem = document.querySelectorAll('#imagens img')

//function carrossel(){
   // indice++
    //if(indice >= imagem.length){
      //  indice = 0
 //}
//}
//setInterval(carrossel, 2000)