# Prototype
    - JavaScript considerada uma linguagem baseada em protótipos;
    - Prototype chain (cadeia de protótipos);
    - __ __proto__ __ ; 

Os protótipos são o cerne do JavaScript. Podemos manipular dados através de funções que foram **prototipadas** previamente. Como pro exemplo o proto lenght;

____

Para ativar alguma funcionalidade do proto, basta adicionarmos ".function"; _Exemplo_:

```js
"string qualquer".lenght;
//lenght conta quantos caracteres existem na string;
```

## Funcionamento

    Quando apresentamos algum tipo de dado para a linguagem, o dado é embrulhado em um objeto que recebe todas as funções __proto__;

- Prototype chain:
    Cadeia de protótipos significa que um objeto específico têm um protótipo que pode ter sido criado com *base* em outro protótipo, formando uma cadeia. E o **objeto** em questão têm acesso à todas as funcionalidades na cadeia.
