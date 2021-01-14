# Tipos de Funções

- Função standard:
    ~~~js
    //declarando uma função:
    function anyone(/*parâmetros or parameters*/) {
        //código do scope da função
    }
    
    // Run this function
    anyone (/*argumentos or arguments*/);
    ~~~

    **Os argumentos viram os parâmetros na função;**

______

- Arrow function 
    ~~~js
    // Declara-se a função em uma variável;

    const anyone = (/*parameters*/) => {
        // Code this function  
    }
    
    //run this function
     anyone(/*arguments*/);
    ~~~

- Callback function
    _Forma de usar uma função como parâmetro de outra;_
    ~~~js
    function main(child) {
    child()
    }

    function callBack() {
    thing = "I'm a callback function!"
    console.log(thing)
    }      

    main(callBack);
    ~~~

- Function constructor

    _Funções construtoras de objetos._

    ~~~js
    //Criando a função com a primeira letra maiúscula por convenção.
    function Student(name) {
    this.name = name;
    }
    const henr = new Student("Henrique");
    const art = new Student("Arthur");
    console.log(henr, art);
    //Esse código vai criar um objeto Student com   uma propriedade name = "Henrique";
    ~~~
 




