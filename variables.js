// 1. Declare uma variável de nome weight

let weight;

// 2. Que tipo de dado é a variável acima?

/* undefined */

/*
 3. Declare uma variável e atribua valores para cada um dos dados:
    * name: String
    * age: Number (integer)
    * stars: Number (float)
    * isSubscribed: Boolean
*/

        let name = "Henrique";
        let age = 24;
        let stars = 4.83;
        let isSubscribed = true;

   

    // 4. A variável student abaixo é de que tipo de dado? É um object;

    // 4.1 Atribua a ela as mesmas propriedades e valores do exercício 3;

    let student = {
        name: "Henrique",
        weight: 85,
        age: 24,
        stars: 4.83,
        isSubscribed: true
    };

    /*Mostre no console a seguinte mensagem:
    <name> de idade <age> pesa <weight> kg.
    */
    console.log(`${student.name}, de ${student.age} anos, pesa ${student.weight}kg`);

    // 5.Declare uma variável do tipo Array, de nome students e atribua a ela nenhum valor, ou seja, somente o Array vazio.

    let students = [];

    // 6. Reatribua valor para a variável acima, colocando dentro dela o objeto student da questão 4. (não copiar e colar o objeto, mas usar o objeto criado e inserir ele no Array)

    students = [student];

    // 7. Coloque no console o valor da posição 0 do Array acima.

    console.log(students[0]);

    // 8. Crie um novo student e coloque na posição 1 do Array students

    const newStudent = {
        name: 'Arthur',
        age: 20,
        weight: 74.3,
        starts: 4.9,
        isSubscribed: false
    };

    students[1] = newStudent;

    console.log(students);

    // 9. Sem rodar o código responda qual é a resposta do código abaixo e por que? Após sua resposta, rode o código e veja se você acertou.

    console.log(a);
    var a = 1;

    // A resposta no console é > undefined, pois a variavel var, por ser uma variável obrigatoriamente global, passa por um processo chamado HOISTING (elevação), onde não interessa em qual scope ela é declarada, o JS declara ela de início e com alta prioridade. Porém, não atribui valor a ela até passar pela linha onde o valor é atribuído.