
# JAVASCRIPT CORE

* Linguagem de programação que roda no navegador do usuário (front-end)
  * Se você clicar em algum botão da página e aparece uma janela. Isso é o JAVASCRIPT
  * Alteração do site ou aplicativo, condorma a interação do usuário

  ## O que podemos fazer?

  * Podemos criar aplicações web, mobile (React Native), descktop (Electron)
  * Empresas famosas que usam:
        * Facebook (Instagram, WhatsApp)
        * Google (Youtube, Gmail, Drive)
        * Uber
        * Netflix
        * TikTok
        * ...

    * 99.99% dos sites na web usam JavaScript
    * Linguafem obrigatória para quem programa Front-end Web

    Sintaxe se refere à estrutura gramatical e regras de formação corretas que precisam ser seguidas ao escrever um código em uma linguagem de programação, como JavaScript. É essencialmente o conjunto de regras que governa como você deve organizar palavras-chave, operadores, variáveis, funções e outros elementos para criar um código válido e funcional.

Em outras palavras, a sintaxe define como você deve escrever seu código para que o interpretador ou compilador da linguagem de programação possa entender e executar suas instruções corretamente. Aqui estão alguns exemplos de conceitos de sintaxe em JavaScript:

1. **Declaração de Variáveis:**
   Para declarar uma variável em JavaScript, você usa a palavra-chave `var`, `let` ou `const`, seguida pelo nome da variável. Por exemplo:
   
   ```javascript
   var idade = 25;
   let nome = "João";
   const pi = 3.14159;
   ```

2. **Estruturas de Controle:**
   Estruturas como `if`, `else`, `for`, `while` e `switch` têm uma sintaxe específica para definir as condições e os loops. Por exemplo:
   
   ```javascript
   if (idade >= 18) {
     console.log("Você é maior de idade.");
   } else {
     console.log("Você é menor de idade.");
   }
   
   for (let i = 0; i < 5; i++) {
     console.log(i);
   }
   ```

3. **Funções:**
   A declaração de uma função também segue uma sintaxe específica, com o nome da função, parâmetros e corpo da função. Por exemplo:
   
   ```javascript
   function saudacao(nome) {
     return "Olá, " + nome + "!";
   }
   ```

4. **Objetos e Propriedades:**
   A criação de objetos e o acesso às suas propriedades também possuem uma sintaxe definida:
   
   ```javascript
   let pessoa = {
     nome: "Maria",
     idade: 30,
     profissao: "Engenheira"
   };
   
   console.log(pessoa.nome); // Acessando a propriedade "nome"
   ```

5. **Chamada de Funções:**
   A sintaxe para chamar funções é simples, onde você usa o nome da função seguido por parênteses:
   
   ```javascript
   let saudacaoFinal = saudacao("Carlos");
   console.log(saudacaoFinal);
   ```

Esses são apenas alguns exemplos de como a sintaxe é aplicada em JavaScript. É importante seguir as regras de sintaxe da linguagem para que seu código seja interpretado corretamente e funcione conforme o esperado. Erros de sintaxe podem levar a falhas na execução do código.

## COMENTÁRIOS

Em JavaScript, você pode usar dois tipos de comentários para adicionar notas explicativas ou informações ao seu código. Comentários não são executados pelo interpretador, então eles não afetam o funcionamento do programa, mas são muito úteis para documentar o código e fazer anotações para você mesmo ou para outros desenvolvedores que possam revisar seu código. Os dois tipos de comentários em JavaScript são:

1. **Comentários de Linha Única:**
   Comentários de linha única são usados para adicionar informações em uma única linha do código. Eles começam com `//` e abrangem o restante da linha após o `//`.

```javascript
// Isso é um comentário de linha única
var nome = "Alice"; // Isso é um comentário em linha de código
```

2. **Comentários de Múltiplas Linhas:**
   Comentários de múltiplas linhas são usados para comentar várias linhas de código. Eles são delimitados por `/*` no início e `*/` no final. Eles podem abranger várias linhas.

```javascript
/*
Isso é um comentário de múltiplas linhas.
Ele pode abranger várias linhas do código.
*/

var idade = 30;

/*
Comentários de múltiplas linhas também são úteis para
comentar grandes blocos de código temporariamente.
*/
```

Lembre-se de que comentários são uma prática recomendada para tornar o seu código mais legível e compreensível. Eles são particularmente úteis para documentar a funcionalidade complexa, fornecer informações sobre o propósito de variáveis ou funções, ou explicar decisões de design.

## TIPAGE JS

O JavaScript é uma linguagem de programação de tipagem dinâmica e fraca. Isso significa que a tipagem é determinada em tempo de execução e as variáveis não precisam ter um tipo especificado quando são declaradas. Além disso, a linguagem é considerada fraca porque permite operações entre diferentes tipos de dados sem a necessidade de conversões explícitas.

Aqui estão algumas características importantes da tipagem no JavaScript:

1. **Tipagem Dinâmica:**
   As variáveis em JavaScript podem mudar de tipo durante a execução do programa. Isso ocorre porque a linguagem determina o tipo da variável com base no valor que ela contém.

   ```javascript
   var idade = 25;  // Aqui, "idade" é um número inteiro
   idade = "vinte e cinco"; // Agora, "idade" é uma string
   ```

2. **Tipos de Dados:**
   JavaScript possui vários tipos de dados básicos, como números, strings, booleanos, objetos, arrays, funções, etc. Os tipos de dados são inferidos automaticamente.

   ```javascript
   var numero = 42;         // Número inteiro
   var texto = "Olá";       // String
   var ativo = true;        // Booleano
   var objeto = { prop: 42 }; // Objeto
   var lista = [1, 2, 3];    // Array
   ```

3. **Conversão Implícita:**
   O JavaScript tenta converter automaticamente tipos de dados quando necessário. Isso pode levar a resultados inesperados em alguns casos, especialmente quando se tratam de operações entre tipos diferentes.

   ```javascript
   var resultado = 5 + "10"; // "510", porque a operação de concatenação de string é realizada
   ```

4. **Operações com Tipos Diferentes:**
   JavaScript permite operações entre diferentes tipos de dados, mesmo que isso não faça sentido do ponto de vista lógico. Isso pode levar a comportamentos inesperados e erros.

   ```javascript
   var soma = 5 + "5"; // "55" (concatenação de string)
   var subtracao = "10" - 5; // 5 (conversão implícita de string para número)
   ```

Devido à natureza dinâmica e fraca da tipagem no JavaScript, é importante entender bem como os tipos de dados funcionam e como as conversões automáticas podem afetar o comportamento do seu código. O uso cuidadoso de operações entre tipos diferentes e a compreensão da tipagem dinâmica são essenciais para evitar erros e garantir que seu código se comporte conforme o esperado.

## TIPOS PRIMITIVOS NO JS

No JavaScript, existem seis tipos de dados primitivos, também conhecidos como tipos básicos. Esses tipos de dados são os blocos fundamentais de construção de qualquer programa JavaScript. Aqui estão os seis tipos de dados primitivos no JavaScript:

1. **Número (Number):**
   Representa números, sejam eles inteiros ou de ponto flutuante.

   ```javascript
   var idade = 25;       // Inteiro
   var altura = 1.75;    // Ponto flutuante (float) ou reais
   ```

    ```javascript
    //NaN - Not a Number - usado para representar um dado que não é número. Exemplo:
    let notANumber = (25 * "casa")
    // notANumber = NaN, pois é impossível multiplicar um número por uma string alfanumérica
   ```

    ```javascript
    //Infinity é um valor simbólico que representa o inifinito. Precisa ser declarado com o ‘I’ maiúsculo
   let numberInfinity = (42 / 0)
    // numberInfinity = Infinity
   ```

2. **String:**
   Representa uma sequência de caracteres (texto) entre aspas simples ou duplas.
    Para atribuir uma string a uma variável, você pode usar:
    Você pode declarar da seguinte forma:
    ' ' // aspas simples / posso colocar aspas duplas dentro de aspas simples: 'Olá "ok"'
    " " // aspas duplas
    ` ` // template literals, para incluir outras variáveis e expressões dentro da própria string. Posso quebrar linha sem erro com aspas simples
   
   ```javascript
    let name = "Mayk Brito"
    let name = 'Mayk Brito'
    let name = `Mayk ${ 1 + 1 }` // aqui o resultado é Mayk 2
      ```

   ```javascript
   var nome = "Alice";
   var mensagem = 'Olá, mundo!';
   ```

3. **Booleano (Boolean):**
   Representa um valor lógico, verdadeiro (`true`) ou falso (`false`).

   ```javascript
   var ativo = true;
   var desligado = false;
   ```

4. **Nulo (Null):**
   Representa um valor nulo ou vazio.

   ```javascript
   var valorNulo = null;
   ```

5. **Indefinido (Undefined):**
   Undefined é algo que não existe e null é algo que existe mas é vazio.

   ```javascript
   var valorIndefinido;
   //como nenhum valor for atribuído, appointment recebe undefined
   ```

6. **Símbolo (Symbol):**
   Introduzido no ECMAScript 6 (ES6), os símbolos são valores únicos e imutáveis que podem ser usados como chaves de propriedades de objetos.

   ```javascript
   var id = Symbol("id");
   ```

Esses tipos primitivos são os blocos básicos de construção em JavaScript. Além dos tipos primitivos, o JavaScript também possui objetos, que são coleções de propriedades e valores. Objetos podem conter propriedades que são do tipo primitivo ou outras propriedades que também são objetos. Entender a diferença entre tipos primitivos e objetos é fundamental para uma programação eficiente e bem-sucedida em JavaScript.

## TIPOS ESTRUTURAIS

O JavaScript também possui tipos estruturais ou complexos, que são usados para agrupar e organizar dados de maneira mais complexa. Aqui estão alguns dos principais tipos estruturais no JavaScript:

1. **Objeto (Object):**
   Um objeto é uma coleção não ordenada de pares chave-valor, onde cada chave é uma string (ou símbolo) que identifica uma propriedade e cada valor pode ser de qualquer tipo de dado, incluindo outros objetos.

   ```javascript
   // aqui criamos um Object copo
    const copo = {
    material: "vidro", //atributo String
    capacidade: 250, // atributo Number
    cheio: function() {
    // aqui podemos declarar uma função/método que será atribuído ao Object
   ```

2. **Array:**
   Um array é uma coleção ordenada de valores, geralmente do mesmo tipo de dado, acessados por meio de um índice numérico (começando em 0).

   ```javascript
   var cores = ["vermelho", "verde", "azul"];
   var numeros = [1, 2, 3, 4, 5];
   ```

3. **Função (Function):**
   Funções em JavaScript são objetos especiais que podem ser chamados para executar um bloco de código. Elas podem aceitar parâmetros e retornar valores.

   ```javascript
   function saudacao(nome) {
     return "Olá, " + nome + "!";
   }
   ```

4. **RegExp (Expressão Regular):**
   Expressões regulares são usadas para fazer correspondências de padrões em strings. Elas permitem realizar manipulações de texto avançadas, como busca e substituição.

   ```javascript
   var padrao = /[0-9]+/; // Encontra sequências de números
   ```

5. **Date (Data):**
   O tipo `Date` é usado para trabalhar com datas e horários. Ele permite representar e manipular informações de data e hora.

   ```javascript
   var dataAtual = new Date();
   ```

6. **Map e Set (ECMAScript 6):**
   Introduzidos no ECMAScript 6 (ES6), o Map é uma coleção de pares chave-valor, semelhante a um objeto, mas com maior flexibilidade nas chaves. O Set é uma coleção de valores únicos.

   ```javascript
   var mapa = new Map();
   var conjunto = new Set();
   ```

Esses tipos estruturais permitem que você organize e manipule dados de maneira mais complexa em comparação com os tipos primitivos. Cada tipo tem suas próprias características e métodos para trabalhar com os dados contidos neles.

# RESUMO DOS TIPOS DE DADOS

Conforme o ECMAScript standard temos 9 tipos de dados:

* Data types
     * Primitive / Primitive value
     * Structural
     * Structural Primitive

# Primitivos:

* String
* Number
* Boolean
* underfined
* Symbol
* BigInt

# Estruturais:

* Object
    * Arrays
    * Map
    * Set
    * Date
    * ...
* Function

# Primitivos Estruturais / Structural Root Primitive

* null

# VARIÁVEIS

Para entender variáveis podemos pensar nelas como nomes simbólicos para algum valor, atalhos de código ou identificadores. Para criar uma variável, podemos usar uma das palavras reservadas: var, let e const, por exemplo: var clima = "quente", onde var é a palavra que simboliza a criação da variável, clima é o nome da variável, o sinal de igual denota que a variável está recebendo um valor e "quente" é a string que está sendo recebida. As variáveis declaradas com "var" e "let" podem ter seu valor mudado, já a const não.

* Nomes simbólicos para receber algum valor
* Atalhos de código
* Identificadores
* Palavras reservadas para criar uma variável
    * var
    * let
    * const

`var`, `let` e `const` são palavras-chave usadas para declarar variáveis em JavaScript, mas cada uma delas possui características e escopos diferentes. Aqui está a diferença entre elas:

1. **var:**
   - Escopo de Função: Variáveis declaradas com `var` têm escopo de função ou escopo global, dependendo de onde são declaradas. Isso significa que elas são acessíveis dentro da função em que foram definidas ou globalmente, se forem declaradas fora de qualquer função.
   - Hoisting: As declarações de variáveis `var` são movidas para o topo do seu escopo durante a fase de compilação, o que significa que você pode acessar uma variável antes de ela ser declarada sem receber um erro (ela terá o valor `undefined`).
   - Redeclaração: É possível redeclarar uma variável com `var` no mesmo escopo sem gerar erros.

```javascript
var idade = 25;
function exemplo() {
   var nome = "Alice";
   console.log(idade); // Acesso a variável global
}
console.log(nome); // Erro: nome is not defined (fora do escopo da função)

// Mudar a variável
var clima = "Quente"
clima = "Frio"
console.log(clima)
```

2. **let:**
   - Escopo de Bloco: Variáveis declaradas com `let` têm escopo de bloco, o que significa que elas são limitadas ao bloco em que foram declaradas (dentro de chaves `{}`).
   - Hoisting: Assim como `var`, as declarações de variáveis `let` também são movidas para o topo do seu escopo, mas ao contrário do `var`, você não pode acessar a variável antes de ela ser declarada.
   - Redeclaração: Não é possível redeclarar uma variável com `let` no mesmo escopo.

```javascript
let idade = 25;
if (idade > 18) {
   let status = "Maior de idade";
   console.log(status); // "Maior de idade"
}
console.log(status); // Erro: status is not defined (fora do escopo de bloco)
```

3. **const:**
   - Escopo de Bloco: Variáveis declaradas com `const` também têm escopo de bloco e funcionam da mesma forma que `let` neste aspecto.
   - Atribuição: Uma vez que uma variável é atribuída usando `const`, seu valor não pode ser alterado. No entanto, para objetos e arrays, o conteúdo interno ainda pode ser modificado.
   - Hoisting: As declarações `const` também são movidas para o topo do escopo, mas como `let`, você não pode acessar a variável antes de ela ser declarada.
   - Redeclaração: Não é possível redeclarar uma variável com `const` no mesmo escopo.

```javascript
const PI = 3.14159;
PI = 3.14; // Erro: Assignment to constant variable
```

Recomendação: Dê preferência ao uso de `let` e `const`, pois eles oferecem escopo mais previsível e evitam problemas comuns associados ao `var`. O uso de `const` é especialmente útil quando você quer garantir que o valor de uma variável não seja reatribuído acidentalmente.

O JavaScript é uma linguagem fracamente tipada e dinâmica, ou seja, ao declarar uma variável não é necessário estabelecer um tipo específico e o tipo do valor da variável pode mudar conforme o código.

# Scope
O Scope ou Escopo determina a visibilidade de uma variável em um código, e para entender scope precisamos primeiramente entender block statement, que é o código presente dentro de chaves. O escopo do var é global, ou seja, uma variável declarada com var poderá ser usada em todo o código.

O "escopo" em programação se refere à região de um programa onde uma variável é válida e pode ser acessada. Em outras palavras, o escopo determina onde uma variável pode ser usada e onde ela não pode. Isso ajuda a evitar conflitos de nomes e a gerenciar o acesso às variáveis de forma organizada. Existem diferentes tipos de escopos em JavaScript:

1. **Escopo Global:**
   Variáveis declaradas fora de qualquer função ou bloco têm escopo global. Elas são acessíveis de qualquer lugar no código, incluindo dentro de funções e blocos. // Hoisting (ele eleva a variável sem ver)

```javascript
var globalVar = "Variável global";

function exemplo() {
    console.log(globalVar); // Acesso à variável global
}

console.log(globalVar); // Acesso à variável global
```

2. **Escopo de Função:**
   Variáveis declaradas dentro de uma função têm escopo de função. Elas são acessíveis apenas dentro dessa função e não podem ser acessadas fora dela.

```javascript
function exemplo() {
    var localVar = "Variável local";
    console.log(localVar); // Acesso à variável local
}

console.log(localVar); // Erro: localVar is not defined (fora do escopo da função)
```

3. **Escopo de Bloco (let e const):**
   Variáveis declaradas com `let` e `const` têm escopo de bloco. Isso significa que elas são `limitadas ao bloco de código` em que foram definidas.

```javascript
if (true) {
    let blockVar = "Variável de bloco";
    console.log(blockVar); // Acesso à variável de bloco
}

console.log(blockVar); // Erro: blockVar is not defined (fora do escopo de bloco)
```

4. **Escopo de Bloco (const com objetos e arrays):**
   Quando você usa `const` para declarar uma variável que armazena um objeto ou um array, o identificador da variável não pode ser reatribuído a um novo objeto ou array. No entanto, o conteúdo interno do objeto ou array ainda pode ser modificado.

```javascript
const pessoa = { nome: "Alice" };
pessoa.nome = "Bob"; // Conteúdo interno do objeto pode ser modificado
pessoa = { nome: "Charlie" }; // Erro: Assignment to constant variable
```

É importante entender bem os conceitos de escopo para escrever código mais organizado, evitar bugs e compreender onde as variáveis podem ou não ser acessadas. A escolha das palavras-chave `var`, `let` e `const` também afeta o escopo das variáveis, como mencionado anteriormente.

# CRIAR NOMES NO JS

Para nomearmos variáveis corretamente e de um jeito inteligente, precisamos saber de algumas coisas, como: JavaScript é case-sensitive (sensível à letras maiúsculas e minúsculas) e aceita a cadeia de caracteres Unicode, podendo receber acentuações. Em um nome de variável em JS você pode: Iniciar com caracteres especiais, iniciar com letras e colocar acentos, lembrando sempre que letras maiúsculas e minúsculas fazem a diferença. Em contraste, você não pode: Iniciar com números e colocar espaços vazios. Idealmente você deve colocar nomes significativos, que fazem sentido na aplicação, explicando o que a variável é, usando camel case, onde a primeira palavra de uma frase é toda minúscula, e as subsequentes não se separam por espaço e tem a primeira letra maiúscula, por exemplo: oNomeDessaVariável, e usar nomes em inglês.

* Escolha um Nome Descritivo:
Escolha um nome que descreva claramente o propósito ou conteúdo da variável. Use nomes significativos que ajudem a entender o que a variável representa.

* Escolha Convenções de Nomenclatura:
Siga as convenções de nomenclatura para escrever seu nome de variável. Em JavaScript, geralmente segue-se o padrão "camelCase", onde as palavras são escritas juntas e cada palavra subsequente começa com letra maiúscula, exceto a primeira.

* Escolha Identificadores Válidos:
Certifique-se de que o nome escolhido seja um identificador válido em JavaScript. Isso significa que ele não deve começar com um número, deve conter apenas letras, números, sublinhados (_) ou cifrões ($), e não deve ser uma palavra reservada da linguagem.

* Declare a Variável:
Use uma das palavras-chave para declarar a variável: var, let ou const, seguida pelo nome que você escolheu.

* Atribua um Valor (opcional):
Se desejar, você pode atribuir um valor inicial à variável no momento da declaração. Caso contrário, a variável será inicializada com o valor undefined.

```javascript
// Passo 1 e 2: Escolhendo um nome descritivo e usando camelCase
let idadeDoUsuario;

// Passo 4: Declarando a variável usando 'let'
// Passo 5: Atribuindo um valor à variável
idadeDoUsuario = 25;

// Agora você pode usar a variável em seu código
console.log(idadeDoUsuario); // Saída: 25

```

## FUNCTION
Uma função em JavaScript é um bloco de código que pode ser chamado/executado para realizar uma tarefa específica. As funções ajudam a organizar o código, torná-lo mais legível e reutilizável. Aqui está a estrutura básica de uma função em JavaScript:

```javascript
function nomeDaFuncao(parametro1, parametro2) {
  // Corpo da função
  // Código a ser executado quando a função for chamada
  // Pode incluir declarações, expressões, lógica etc.
  
  return resultado; // Opcional: retorna um valor após a execução
}
```

Aqui estão alguns exemplos de como você pode usar funções em JavaScript:

1. **Função sem parâmetros e sem retorno:**

```javascript
function saudacao() {
  console.log("Olá! Bem-vindo!");
}

saudacao(); // Chamando a função
```

2. **Função com parâmetros e retorno:**

```javascript
function soma(a, b) {
  return a + b;
}

const resultado = soma(5, 3); // Chamando a função e armazenando o resultado
console.log(resultado); // Saída: 8
```

3. **Função anônima (atribuída a uma variável):**

```javascript
const multiplicacao = function(x, y) {
  return x * y;
};

const produto = multiplicacao(4, 6);
console.log(produto); // Saída: 24
```

4. **Arrow Function (forma concisa de criar funções):**

```javascript
const divisao = (a, b) => a / b;

const quociente = divisao(10, 2);
console.log(quociente); // Saída: 5
```

Lembre-se de que as funções em JavaScript podem ser chamadas e executadas com parâmetros, e muitas vezes retornam um valor após a execução. Elas são uma parte fundamental da programação em JavaScript e permitem que você organize e reutilize seu código de maneira eficiente.


# Precedência dos operadores

A precedência dos operadores no JavaScript determina a ordem em que eles são avaliados quando uma expressão é executada. Operadores com maior precedência são avaliados primeiro. Se dois operadores têm a mesma precedência, a associatividade determina a ordem de avaliação.

Aqui está uma tabela resumida da precedência dos operadores no JavaScript, do mais alto para o mais baixo:

1. `()`: Parênteses (grouping)
2. `.` e `[]`: Membro do objeto e índice de array
3. `++` e `--`: Pós-incremento e pós-decremento
4. `++` e `--`: Pré-incremento e pré-decremento
5. `!`, `~`, `-`, `+`, `typeof`, `void`, `delete`, `await`: Operadores unários
6. `*`, `/`, `%`: Multiplicação, divisão, módulo
7. `+` e `-`: Adição e subtração
8. `<<`, `>>`, `>>>`: Deslocamento de bits
9. `<`, `<=`, `>`, `>=`, `in`, `instanceof`: Operadores de comparação
10. `==`, `===`, `!=`, `!==`: Igualdade e desigualdade
11. `&`: Bitwise AND
12. `^`: Bitwise XOR
13. `|`: Bitwise OR
14. `&&`: Lógico AND
15. `||`: Lógico OR
16. `? :`: Operador condicional (ternário)
17. `=`, `+=`, `-=`, `*=`, `/=`, `%=` etc.: Atribuição

Lembre-se de que esta lista não é exaustiva e pode haver outros operadores que não estão incluídos aqui. Além disso, o uso de parênteses pode ser usado para alterar a ordem de avaliação conforme necessário.


# Controle de fluxo da aplicação


O controle de fluxo em uma aplicação se refere à direção em que o código é executado, dependendo de condições específicas. Em JavaScript, existem várias formas de controlar o fluxo da aplicação. Abaixo estão alguns dos principais construtos de controle de fluxo:

1. **Estrutura Condicional `if...else`:**
   ```javascript
   let idade = 20;

   if (idade >= 18) {
       console.log('Maior de idade');
   } else {
       console.log('Menor de idade');
   }

   ------------------------------------------------------

   let temperature = 36.9
   let highTemperature = temperature >= 37.5
   let mediumTemperature = temperature < 37.5 && temperature >= 37

   if(highTemperature) {
    console.log('Febre alta')
   } else if(mediumTemperature) {
    console.log('Febre moderada')
   } else {
    console.log('Saudável')
   }
   ```

2. **Operador Ternário:**
   ```javascript
   let idade = 20;
   let status = (idade >= 18) ? 'Maior de idade' : 'Menor de idade';
   console.log(status);
   ```

3. **Estrutura de Controle de Repetição `for`:**
   ```javascript
   for (let i = 0; i < 5; i++) {
       console.log(i);
   }
   ```

4. **Estrutura de Controle de Repetição `while`:**
   ```javascript
   let contador = 0;

   while (contador < 5) {
       console.log(contador);
       contador++;
   }
   ```

5. **Estrutura de Controle de Repetição `do...while`:**
   ```javascript
   let contador = 0;

   do {
       console.log(contador);
       contador++;
   } while (contador < 5);
   ```

6. **Estrutura de Controle de Fluxo `switch`:**
   ```javascript
   let diaSemana = 3;

   switch (diaSemana) {
       case 1:
           console.log('Segunda-feira');
           break;
       case 2:
           console.log('Terça-feira');
           break;
       // ... outros casos ...
       default:
           console.log('Dia não encontrado');
   }
   ```

Essas estruturas são usadas para tomar decisões, repetir tarefas e gerenciar o fluxo do programa. A escolha entre elas dependerá da situação específica e da lógica que você deseja implementar em sua aplicação.

`throw` e `try...catch` são construções fundamentais em JavaScript para lidar com exceções (erros) durante a execução de um programa.

1. **`throw`:**
   O operador `throw` é usado para lançar (gerar) uma exceção. Pode ser usado com qualquer valor, mas geralmente é usado com objetos de erro.

   ```javascript
   throw new Error('Isso é uma mensagem de erro');
   ```

   Aqui, estamos lançando uma exceção do tipo `Error` com uma mensagem associada.

2. **`try...catch`:**
   A estrutura `try...catch` permite que você lide com exceções de forma controlada. O bloco `try` contém o código que pode gerar uma exceção, e o bloco `catch` contém o código que será executado se uma exceção for lançada dentro do bloco `try`.

   ```javascript
   try {
       // Código que pode gerar uma exceção
       throw new Error('Isso é uma mensagem de erro');
   } catch (erro) {
       // Código para lidar com a exceção
       console.log('Ocorreu um erro:', erro.message);
   } finally {
       // Código opcional a ser executado independentemente de ocorrer ou não uma exceção
       console.log('Bloco finally');
   }

   --------------------------------------
   function sayMyName(name = '') {
    if (name === '') {
        throw 'Nome é obrigatório'
    }

    console.log(name)
   }

   try {
    sayMyName()
   } catch(e) {
    console.log(e)
   }

   console.log('após ao try/catch')


   ```

   - Se uma exceção ocorre no bloco `try`, o controle é transferido para o bloco `catch`, onde você pode lidar com a exceção.
   - O bloco `finally` é opcional e é executado independentemente de ocorrer ou não uma exceção. Ele é útil para ações que precisam ser realizadas, independentemente do fluxo normal ou de exceções.

Esses mecanismos são essenciais para lidar com erros de maneira adequada, melhorando a robustez e a confiabilidade do código. Eles permitem que você identifique, capture e trate erros de uma maneira controlada, evitando que eles interrompam completamente a execução do programa.

