/* function expression
   function anonymous

parametros da função (parameters)
const sum = function (number1, number2){
console.log(number1 + number2)
}

 pra chamar a função
sum(2, 3) // arguments = argumentos

    Posso fazer dessa forma:

const sum2= function (number1, number2){
    total = number1 + number2
    return total
    }
    
    let number1 = 34
    let number2 = 25

    console.log(`o número 1 é ${number1}`)
    console.log(`o número 2 é ${number2}`)
    console.log(`a soma é ${sum2(number1, number2)}`)

_________________________________________________________________________________________________________________________________

     função é como liquidificador

    function sucoFruta(fruta1, fruta2){
        return 'suco de ' + fruta1 + fruta2
    }

    const copo = sucoFruta(banana, maça)

    console.log(copo)
_______________________________________________________________________________________________________________________________________

    function scopo
    let subject = 'creat video'

    function creatThink(subject){
        subject = 'study'
        return subject
    }

    console.log(creatThink(subject))
    console.log(subject)

 _____________________________________________________________________________________________________________________________________

     O JavaScript possui function hoisting, permitindo que uma função seja declarada
     depois de ser utilizada, pois faz algo similar a elevar no código declarações de funções. 
    Porém isso não acontece dentro de variáveis.
    
    function hoisting

    sayMayName();

    function sayMayName(){
        console.log('Karen')
    }

    ______________________________________________________________________________________________________________________________

    Também podemos escrever funções expression de uma maneira mais compacta, desta maneira: () => { código a ser executado },
     chamada de Arrow Function.


    const sayMayName = (name) => {
        console.log(name)
    }

    sayMayName('Karen')

    ______________________________________________________________________________________________________________________________

    Uma callback function é uma função que está sendo passada para outra função como parâmetro.

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

    ___________________________________________________________________________________________________________________________________

    Funções construtoras são utilizadas para criar novos objetos e geralmente tem a sua primeira letra maiúscula, 
    todos com as mesmas características que são criadas na função, usando a palavra reservada this para se referir 
    ao objeto sendo criado, por exemplo:

    function Person(name) {
	    this.name = name
	    this.walk() = function() {
	    	return this.name + "está andando"
	    }
    }
    const mayk = new Person("Mayk")
    const joao = new Person("João")

 _____________________________________________________________________________________________________________________________________

 O JavaScript possui uma característica chamada Prototype, que é uma 
 série de funcionalidades e atributos que já existem nativamente em diversos tipos de dados, que são lidados como objetos.



Prototype

* prototype-base language
* prototype chain
* __proto__ 



Type conversion se trata de uma conversão de tipo feita pelo dev, explicitamente, e pode ser feita de diversas maneiras, 
por exemplo com o método Number(), já type coersion é uma mudança de tipos feita pelo próprio JavaScript, 
implicitamente, por exemplo quando você tenta somar um número na forma string com um número do tipo número.

Type conversion (typecasting) vs Type coersion


_____________________________________________________________________________________________________________________________________
function scope  

let subject = 'Create video'

function creatThink(subject) {
    subject = 'study'
    return subject
}

console.log(subject)
console.log(creatThink(subject)) 


__________________________________________________________________________________________________________________

Type conversion se trata de uma conversão de tipo feita pelo dev, explicitamente, e pode ser feita de diversas maneiras, 
por exemplo com o método Number(), já type coersion é uma mudança de tipos feita pelo próprio JavaScript, implicitamente, 
por exemplo quando você tenta somar um número na forma string com um número do tipo número.

    Type conversion (typecasting) vs Type coersion

    * Alteração de um tipo de dado para outro tipo

    Type coersion
    console.log('9' + 5) nesse caso o resultado é uma concatenação = 95

    Type conversion
    Quero mudar a string para tipo number
    console.log(Number('9') + 5) nesse caso o resultado será 14 porque houve transformação da string para número

   ______________________________________________________________________________________________________________________________
   Manipulação Strings e Números

    É possível transformar números em formato de string através do método Number() 
    e números em formato number em string usando o método String().

    Transformar String em Número 
    let string = "123"
    console.log(Number(string))

    e Número em String
    let number = 123
    console.log(String(number))

    ______________________________________________________________________________________________________________________________
        Manipulação Strings e Números
    
    Para contar a quantidade de caracteres em uma string é possível usar o método length(), também é possível 
    contar a quantidade de algarismos em um número transformando o número em string e usando o mesmo método.
    
    Contar quantos caracteres tem uma palavra e quantos dígitos tem um número

    let word = "paralelepipido"
    console.log(word.length)

    let number = 1234
    console.log(String(number).length) 

    Numero não recebe o length, mas se caso eu transformar o número em string, será possível fazer a contagem
    
    ______________________________________________________________________________________________________________________________
       Manipulação Strings e Números
    
    Para determinar uma quantia de casas decimais de um número pode-se usar o método toFixed() colocando como argumento 
    quantas casas decimais o número terá. Para mudar a formatação do número de separado por ponto para separado por 
    vírgula é possível usar o método replace(".", ","). O resultado final será do tipo string, e a conversão para o 
    tipo número não será possível por que a vírgula não é considerada parte de um número.

    Transformar um número quebrado com 2 casas decimais e trocar ponto por vírgula

    let number = 551.515615
    console.log(number.toFixed(2).replace(".", ",")) Resultado será 551,51

    ______________________________________________________________________________________________________________________________
        Manipulação Strings e Números

    Para transformar uma string em letras maiúsculas pode-se usar o método toUpperCase(), e ao contrário, 
    também é possível usar o toLowerCase() para transformar uma string em todas letras minúsculas.

    Transformar letras mínusculas em maiúsculas. Faça o contrário disso também

        let word = "Programar é muito bacana!"
        console.log(word.toUpperCase()) Resultado = PROGRAMAR É MUITO BACANA!

        Para deixar tudo em minúsculo:
         console.log(word.toLowerCase()) Resultado = programar é muito bacana!


    ______________________________________________________________________________________________________________________________
        Manipulação Strings e Números

       Para separar um texto por espaços, pode-se usar o método split(" "), que transforma o texto em um array de 
       strings baseado no argumento, que no caso são os espaços. Para juntar esse array é possível usar o método join('"), 
       que juntaria essas palavras sem nenhum separador, porém colocando um argumento, no caso um underscore ( join("_") ) 
       as palavras são juntadas com o argumento de separador. 

       Separe texto que contem espaços, em um novo array pnde cada texto é uma posição do array. Depois disso, transforme o array
       em um texto e onde eram espaços, coloque _

        let phrase = "Eu quero viver o Amor!"
        let myArray = phrase.split(" ") Resultado = Eu, quero, viver, o, Amor!
        console.log(myArray)

        let phraseWithUnderscore = myArray.joi("")
        console.log(phraseWithUnderscore) Resultado = EuqueroviveroAmor!

         let phraseWithUnderscore = myArray.joi("_")
        console.log(phraseWithUnderscore) Resultado = Eu_quero_viver_o_Amor!

    ______________________________________________________________________________________________________________________________
        Manipulação Strings 

        Para verificar se um texto possui uma palavra específica, podemos usar o método includes(), passando como argumento a 
        palavra a ser verificada, que retorna um valor true se encontrar a palavra, e falso se não, lembrando sempre que o método 
        é case sensitive.

        Verificar se o texto contém a palavra Amor

        let phrase = "Eu quero viver!"
        console.let(phrase.includes(Amor)) Resultado =  false

        let phrase = "Eu quero viver o amor!"
        console.let(phrase.includes(Amor)) Resultado =  false

        let phrase = "Eu quero viver o Amor!"
        console.let(phrase.includes(Amor)) Resultado =  true

    ______________________________________________________________________________________________________________________________
        Manipulação Arrays

     Para criar um array com um método construtor, usa-se new Array(args), passando como argumento o tamanho deste vetor ou os
     valores, por exemplo: const array = new Array("a", "b", "c").

     Array normal:

     let myArray = ['a', 'b', 'c']
     console.log(myArray) Resultado = ["a", "b", "c"]

     
     Criar array com construtor:

     let myArray = new Array ('a', 'b', 'c')
     console.log(myArray) Resultado = ["a", "b", "c"]

     
     Criar array com espaço vazio:

     let myArray = new Array (10)
     console.log(myArray) Resultado = (10) posições vazias

    ______________________________________________________________________________________________________________________________
        Manipulação Arrays

    Para contar a quantidade de elementos em um array pode-se usar o método length.

     let myArray = ['a', 'b', 'c']
     console.log(myArray.length) Resultado = 3 

     Se eu quero acessar um array específico
    let myArray = ['a', 'b', 'c']
     console.log(myArray.length[2]) Resultado = "c" (O elemento a é igual a 0)

    ______________________________________________________________________________________________________________________________
        Manipulação Arrays

     Para transformar uma string em um array, pode-se usar o objeto Array com o método from(), passando como argumento a string
     a ser transformada em array. Por exemplo console.log(Array.from("developer").

        Transformar uma cadeia de caracteres em elementos de um array
    
    let word = "manipulação"
    console.log(Array.from(word)) Resultado: (11)["m","a","n","i","p","u","l","a","ç","ã","o"]
                                        0: "m"
                                        1: "a"
                                        2: "n"
                                        3: "i"
                                        4: "p"
                                        5: "u"
                                        6: "l"
                                        7: "a"
                                        8: "ç"
                                        9: "ã"
                                        10: "o"


    ______________________________________________________________________________________________________________________________
        Manipulação Arrays

    Existem várias maneiras de manipular arrays, como: o método push(), que adiciona um elemento no final do array, 
    o método unshift(), que adiciona um elemento no começo do array, o método pop(), que retira um elemento do final 
    do array, o método shift(), que retira um elemento do começo do array, o método slice(), que recebe como argumentos
    a posição de início e a posição do fim da parte que você quer selecionar, e retorna os valores destas posições,
    o método splice(), que recebe como argumentos a posição de início e a quantidade de elementos que você quer remover
     e o método indexOff(), que encontra o index do valor que recebe como argumento em um array.

    let techs = ["html", "css", "js"]

    Adicionar um item no fim
    techs.push("nodejs") Resultado = ["html", "css", "js", "nodejs"]

    Adicionar um item no começo
    techs.unshift("sql") Resultado = ["sql", html", "css", "js", "nodejs"]

    Remover do fim
    techs.pop() Resultado = ["sql", html", "css", "js"]

    Pegar somente alguns elementos do array
    techs.shift() Resultado = [html", "css", "js"]

    Remove 1 ou mais items em qualquer posição do array
    console.log(techs.slice(1, 3)) Resultado = ["css", "js"]
        console.log(techs.slice(1, 2)) Resultado = ["css"]
        console.log(techs.slice(1, 1)) Resultado = []

    Retirar a posição de um elemnto no array
    techs.splice(1, 1) Resultado = ["html", "js"]
    techs.splice(1, 2) Resultado = ["html"]

    Se eu não lembro da posição do elemento que eu quero retirar do array
    let index = techs.indexOf('css')
         console.log(index) Resultado = 2 (posição 2)
          techs.splice(index, 2) Resultado = ["html", "js"]


    console.log(techs)

    ______________________________________________________________________________________________________________________________
        Expressões e operadores 
        
    Nas próximas aulas, falaremos sobre expressões e operadores.

    Expresssões são bem tranquilas, porque expressões são qualquer linha de código que resolve alguma coisa no JavaScript, um exemplo 
    é a expressão:

    let number

    Isso é uma expressão, já que estamos declarando uma váriavel, nesse caso com o valor de undefined.

    Toda expressão do Javascript pode ou não terminar com ; (ponto e vírgula), o final de uma expressão é facultativa, mas em 
    algumas outras linguagens é obrigatório o uso de ; (ponto e vírgula).

    Em alguns casos é necessário o uso de ; (ponto e vírgula), como numa função auto-executável, é um dos poucos 
    casos onde faz falta, e é em um cenário como o seguinte:

    let number = 1;

        (function(){
         console.log('alo')
        })()    Resultado: alo

    Caso você tente executar esse código, ele vai tentar atribuir essa função ao valor 1, onde o Javascript vai tentar executar o 1, 
    passar uma função como argumento, e o 1 vai receber uma outra função. Um dos pouquíssimos casos onde o ; (ponto e vírgula) faz falta.

    Veremos também sobre operadores, nesse exemplo temos o binário, unário e ternário.

     unário 
    let number = 1 
    console.log(++number) Resultado = 2

     binário 
    let number = 1
    console.log(number + 1) Resultado = 2

     ternário 
    console.log(true ? 'alo' : 'nada') Resultado = alo

    Como você pode observar, temos no unário um elemento, no binário dois elementos e no ternário três elementos.
   
    ______________________________________________________________________________________________________________________________
        New

    A expressão new, também denominada como left-hand-side expression, serve para criar um novo objeto usando as 
    funções construtoras que temos por padrão no JavaScript.

    Um exemplo de seu uso é:

    let date = new Date('2020-12-01')
    console.log(date.__proto__) 

    Outro exemplo:
    let name = new String("Karen")
    let age = new number("37")
    console.log(name, age)
    Resultado (Karen, 37)


 ______________________________________________________________________________________________________________________________
    Typeof delete

    Em operadores unários, os mais comuns são o typeof e o delete, onde o typeof serve para saber o tipo de dado que temos na expressão, 
e o delete vai deletar alguma propriedade de um objeto, desde que ela exista.


    Exemplos de uso:

    DELETE
    
    const person = {
    name: 'Mayk',
    age: 25,
    }
    delete person.age

    console.log(person) Resultado = Mayk

Nesse caso estamos deletando a propriedade age do objeto person.

    console.log(tyepof "mayk")

Aqui vemos qual o tipo de dado que temos, nesse caso uma string.

 ______________________________________________________________________________________________________________________________
    Operadores aritméticos

Falaremos nessa aula sobre operadores aritméticos, que nos possibilitam fazer cálculos matemáticos.

O operador de multiplicação é o * (asterisco);
console.log(3 * 5) Resultado = 15

O operador de divisão é a / (barra);
console.log(12 / 2)  Resultado = 6

O operador de soma é o + (positivo);
console.log(34 + 37)  Resultado = 101

O operador de subtração é o - (negativo).
console.log(34 - 23)  Resultado = 11

Outros operadores aritméticos incluem o resto de divisão, incremento, decremento e exponencial, com exemplos a seguir:

Resto da divisão: sinal % 

    let remainder
    remainder = 11 % 11
    console.log(remainder) Resultado = 0


Incremento: sinal ++

    let increment = 0
    increment++
    console.log(increment) Resultado = 1 (0+1 significa adicionar mais um número para somar)

    Posso fazer dessa forma também:
    let increment = 0
    console.log(increment++) incrementar a o valor depois
    console.log(increment)  Resultado = 1 (só vai somar a partir da segunda impressão)

    console.log(++increment) incremento o valor antes, aqui mostraria o valor de 1

Decremento: sinal --

    let decrement = 0
    decrement--
    console.log(decrement)   Resultado = -1
    Funciona como o increment acima podendo decrementar antes ou depois

Exponencial: sinal **

    console.log(3 ** 3) Resultado = 27 (Três elevado a três)


 ______________________________________________________________________________________________________________________________
    Grouping operator

Vamos falar sobre um operador que agrupa expressões, os parênteses.

Na matemática, temos uma noção de precedência, onde certos operadores têm de ser realizados primeiro, 
e não é diferente para um computador, porém, podemos utilizar os parênteses para realizar o agrupamento de alguns operadores, 
que moverá a precedência do cálculo.

let total = 2 + 3 * 5 (calcula primeiro a divisão e depois a soma)
console.log(total)
Resultado é 17.

let total = (2 + 3) * 5 (calcula o que está em parenteses primero (no caso a soma) e depois a divisão)
console.log(total)
// o cálculo mudou a precedência, fazendo nosso resultado tornar-se 25.

 ______________________________________________________________________________________________________________________________
    Operadores de comparação igual a e diferente de

Irá comparar valores e retornar um Boolean como resposta à comparação

    let one = 1
    let two = 2

    == igual a
    console.log( two == 1) Resultado = false
    console.log( one == "1") Resultado = true

    != diferente de
    console.log(one != two) Resultado = true
    console.log(one != 1) Resultado = false
    console.log(one != "1") Resultado = false


Existem dois tipos de comparações para verificar se um valor é igual ao outro, uma forma é '==' 
que significa que o valor é o mesmo, por exemplo 1 == '1', esse será true pois ele só verificar o valor em si. 
Já o '===' que faz a comparação de igualdade estrita, pois verifica o valor e o tipo se são o mesmo, por exemplo 
usando os valores que você informou 1==='1', retornaria false, pois o valor é o mesmo, porém são de tipos diferentes. 
Aconselho e o recomendado é usar o '===' pois deixa a aplicação melhor estruturada.

 ______________________________________________________________________________________________________________________________
    Operadores de comparação igual a e diferente de

Operadores de comparação estritamente igual e estritamente diferente

    let one = 1
    let two = 2

    == igual a
    console.log( two === 1) Resultado = false
    console.log( one === 1) Resultado = true

    != diferente de
    console.log(one !== two) Resultado = true
    console.log(one !== 1) Resultado = false
    console.log(one !== "1") Resultado = true

 ______________________________________________________________________________________________________________________________
    Operadores de comparação maior e menor (igual)

    let one = 1
    let two = 2

    >       Marior que
    console.log(one > two) Resultado = false

    >=      Maior igual a
    console.log(one >= 1) Resultado = true
    console.log(two >= 1) Resultado = true

    <       Menor que
   console.log(one < two) Resultado = true


    <=      Menor igual que
    console.log(one <= two) Resultado = true
    console.log(one <= 1) Resultado = true
    console.log(one <= 0) Resultado = false

 ______________________________________________________________________________________________________________________________
    Operadores de atribuição (Assignement)

    Veremos nesta aula sobre operadores de atribuição. Quando falamos em atribuição, queremos na verdade dizer assignment, 
    que já vimos bastante, mas podemos também realizar diferentes tipos de atribuição, usando operadores aritméticos.

    Exemplos:

        Operadores de atribuição (Assignment)

        let x

        assignment normal:

        x = 1

         console.log(x) Resultado = 1

        addition assignment (adição):
        
        x += 2

            console.log(x) Resultado = 3 (x = x + 2 = 3)

        subtraction assignment (subtração):
        
        x -= 1

            console.log(x) Resultado = 2  (x = x - 1 = 2)

        multiplication assignment (multiplacação):
        
        x *= 2

        console.log(x) Resultado = 4  (x = x * 2 = 4)

        division assignment (divisão):

        x /= 2

         console.log(x) Resultado = 2  (x = x / 2 = 2)

        exponetiation assignment (exponenciação):

        x **= 2

         console.log(x) Resultado = 4  (x = x * x2 = 4)

        remainder assignment (resto de divisão):

        x %= 2

        console.log(x) Resultado = 0 (x = x / 4 = 2 com resto 0)

 ______________________________________________________________________________________________________________________________
    Operadores lógicos

    2 valores booleanos, quando verificados, resultará em verdadeiro ou falso

    let pao = true
    let queijo = true

    Gosto desse café?

    AND &&
    console.log(pao && queijo) ((quero pão E café) os dois são verdadeiros, a respostá será true(será falso se não tiver um dos dois))

    OR ||
    console.log(pao || queijo) ((quero pão OU café) os dois são verdadeiros, a respostá será true (só será falso se não tiver os dois))

    NOT !
    console.log(pao ! queijo) ((NÃO quero pão) o valor será trocado, se o pão é true, a negação torna ele false))

 ______________________________________________________________________________________________________________________________
    Operador Condicional (Ternário)

    Os operadores ternários, conhecidos como operadores de condição, como o nome sugere, são dependentes de condições 
    e podem entregar valores diferentes com base nelas.

    Funciona da seguinte forma;

    condição ? valor1 : valor2

    CAFÉ DA MANHÃ TOP
    let pao = false
    let queijo = false

    CONDIÇÃO É QUE  O PÃO E QUEIJO ENTÃO CAFÉ TOP SE NÃO CAFÉ RUIM

    const niceBreakfast = pao && queijo ? 'Café top' : 'Café ruim'
    console.log(niceBreakfast)
    RESULTADO = Café top (porque tem pão e queijo)

    const niceBreakfast = pao || queijo ? 'Café top' : 'Café ruim'
    console.log(niceBreakfast)
    RESULTADO = Café top (porque tem pão ou queijo) Sendo um verdadeiro o café é top

    OUTRO EXEMPLO

    let age = 16
    const canDrive = age >= 18 ? 'can drive' : 'cannot drive' 
    console.log(canDrive)
    RESULTADO  = cannot drive

 ______________________________________________________________________________________________________________________________
    Operador Condicional (Ternário)

    Temos também os string operators, os operadores de string, e nós até já vimos um desses antes, o comparison operator, ou ==, para os mais íntimos.

    Agora vamos ver sobre a concatenação, que é o retorno da união de duas strings.

    Seu símbolo é o de + (positivo), e seu uso é simples, algo próximo de:

    console.log('a' + 'a')
    RESULTADO, o retorno da string seria aa (contatenação).

 ______________________________________________________________________________________________________________________________
    Falsy e truthy

    O falsy é quando um valor é considerado falso em contextos que onde um booleano é obrigatório (condicionais e loops), 
    exemplo a seguir:

   
	Todos os valores abaixo seriam representados como false em um boolean.
		false
    0
    -0
    ""
    null
    undefined
    NaN
  

        console.log( NaN ? 'verdadeiro' : 'falso' )


    já o truthy é o oposto, quando um valor é considerado verdadeiro (true) em contextos onde um booleano é obrigatório 
    (condicionais e loops), exemplo a seguir:

    
	Todos os valores abaixo seriam representados como false em um boolean.
		true
    {}
    []
    1
    3.23
    "0"
    "false"
    -1
    Infinity
    -Infinity


    console.log( Infinity ? 'verdadeiro' : 'falso' )


























*/  