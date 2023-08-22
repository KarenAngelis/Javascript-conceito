
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
   var altura = 1.75;    // Ponto flutuante
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
    ' ' // aspas simples
    " " // aspas duplas
    ` ` // template literals, para incluir outras variáveis e expressões dentro da própria string
   
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
   Representa uma variável que foi declarada, mas não foi atribuída com um valor.

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