# Types Conversion VS Types Coresion

## Types Conversion: 
    Poder do programador de alterar o tipo de dado tratado.

- **Exemplo:**
~~~js
console.log(Number("9") + 5);
// print: 14, transformamos o 9 em uma variável do tipo number
~~~
_____

## Types Coersion:
    JS força a alteração do dado para tornar o código coerente.

- **Exemplo:**
~~~js
console.log("9" + 5);
// print: 95, transformou o 5 em uma variável do tipo string. 95 agora é uma só string;
~~~