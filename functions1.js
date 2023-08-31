// function expression
// function anonymous

//parametros da função (parameters)
const sum = function (number1, number2){
console.log(number1 + number2)
}

// pra chamar a função
sum(2, 3) // arguments = argumentos

// posso fazer dessa forma:
const sum2= function (number1, number2){
    total = number1 + number2
    return total
    }
    
    let number1 = 34
    let number2 = 25

    console.log(`o número 1 é ${number1}`)
    console.log(`o número 2 é ${number2}`)
    console.log(`a soma é ${sum2(number1, number2)}`)


    // função é como liquidificador

    function sucoFruta(fruta1, fruta2){
        return 'suco de ' + fruta1 + fruta2
    }

    const copo = sucoFruta(banana, maça)

    console.log(copo)


    //function scopo
    let subject = 'creat video'

    function creatThink(subject){
        subject = 'study'
        return subject
    }

    console.log(creatThink(subject))
    console.log(subject)

    // O JavaScript possui function hoisting, permitindo que uma função seja declarada
    // depois de ser utilizada, pois faz algo similar a elevar no código declarações de funções. Porém isso não acontece dentro de variáveis.
    
    //function hoisting

    sayMayName();

    function sayMayName(){
        console.log('Karen')
    }

    //Também podemos escrever funções expression de uma maneira mais compacta, desta maneira: () => { código a ser executado },
    // chamada de Arrow Function.


    const sayMayName = (name) => {
        console.log(name)
    }

    sayMayName('Karen')

    //Uma callback function é uma função que está sendo passada para outra função como parâmetro.

    function sayMayName(name){
        console.log('antes de executar uma função callback')

        name()

        console.log('depois de executar uma função callback')
    }

    sayMayName(
        () => {
            console.log('estou em uma callback')
        }
    )

    //Funções construtoras são utilizadas para criar novos objetos e geralmente tem a sua primeira letra maiúscula, 
    //todos com as mesmas características que são criadas na função, usando a palavra reservada this para se referir 
    //ao objeto sendo criado, por exemplo:

function Person(name) {
	this.name = name
	this.walk() = function() {
		return this.name + "está andando"
	}
}
const mayk = new Person("Mayk")
const joao = new Person("João")

