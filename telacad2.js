let logname = document.querySelector('#logname')
let labellogname = document.querySelector('#labellogname')
let validNome = false

let logpass = document.querySelector('#logpass')
let validSenha = false
let labellogpass = document.querySelector('#labellogpass')

let logemail = document.querySelector('#logemail')
let validEmail = false
let labellogemail = document.querySelector('#labellogemail')

logname.addEventListener('keyup', () =>{
    if(logname.value.length <= 4){
labellogname.setAttribute('style', 'color: red')
labellogname.innerHTML = 'Usuário *Insira no mínimo 5 caracteres'
logname.setAttribute('style', 'border-color: red')
validNome = false
    } else{ 
        labellogname.setAttribute('style', 'color: green')
        labellogname.innerHTML = 'Nome'
        logname.setAttribute('style', 'border-color: green')

    }
})
logpass.addEventListener('keyup', () =>{
    if(logpass.value.length <= 7){s
labellogpass.setAttribute('style', 'color: red')
labellogpass.innerHTML = 'Usuário *Insira no mínimo 8 caracteres'
logpass.setAttribute('style', 'border-color: red')
validSenha = false
    } else{ 
        labellogname.setAttribute('style', 'color: green')
        labellogname.innerHTML = 'Senha'
        logname.setAttribute('style', 'border-color: green')

    }
})


 function cadastrar(){
    if(validNome || validSenha || validEmail){

    } else{
        alert('Ta tudo vazio')
    }
 }



















let btn = document.querySelector()

btn.addEventListener('click', ()=>{

    if(logpass.getAttribute('type') == 'password'){
        
       logpass.settAttribute('type', 'text') 
    } else{
        logpass.settAttribute('type', 'password')
    }
})

function entrar(){
    let logemail = document.querySelector('#logemail')
    let logpass = document.querySelector('#logpass')
   

    let msgError = document.querySelector('#msgError')
    let listaUser = []

    let userValid = {
        nome: '',
        user: '',
        senha: ''
    }

listaUser = JSON.parse(localStorage.getItem('listaUser'))

listaUser.forEach((item) => {
    if(logname.value == item.userCad){

    }
})

}