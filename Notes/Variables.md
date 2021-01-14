# Variáveis

* Nomes simbólicos para receber algum valor;
* Atalhos de código;
* Identificadores;
* 3 palavras reservadas para criar uma variável:
    * __var__; 
    ```js
    var Cafe = "cheio";
    Cafe = vazio;
    console.log(Cafe);
    ```
    **Console** -> vazio;
    
    * __let__;
    ```js
        let Cafe = "cheio";
        Cafe = vazio;
        console.log(Cafe);
    ```
    **Console** -> vazio;

    * __const__ (*_valores não podem ser alterados depois da declaração_*);
    ```js
    const Cafe = "cheio";
    Cafe = "vazio";
    console.log(Cafe);
    ```
    __Console__ -> _Uncaught TypeError: Assignment to constant variable._
    
    __________

    O JS é uma linguagem _fracamente_ tipada e dinâmica.

    - Variáveis não precisam ter um tipo previamente definido.

    - Podemos mudar o conteúdo da variável

    _Por exemplo:_
    ~~~js
    var variable = true; //boolean

    variable = ""; // string
    ~~~
    _____

    **Como ver o tipo de variável?**
    ~~~js
    console.log(typeof variable);
    ~~~ 
