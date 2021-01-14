/* ### Sistema de gastos familiar

  Crie um objeto que posuirá 2 propriedades, ambas do tipo array:
  * receitas: []  
  * despesas: []
  
  Agora, crie uma função que irá caluclar o total de receitas e despesas e irá mostrar uma mensagem se a família está com saldo positivo ou negativo, seguido do valor do saldo.

*/

let control = {
  recipes: [],
  bills: []
}
control.recipes.push(1000, 650, 400);

control.bills.push(1560, 650, 400);

let recipe = addingRecipes(control.recipes)
let bills = addingBills(control.bills)

if(recipe > bills) {
  console.log("Seu saldo está positivo! -> " + `${recipe - bills}`);
} else if (recipe === bills) {
  console.log("Seu saldo está zerado! -> " + `${recipe - bills}`);
} else {
  console.log("Seu saldo está negativo! -> " + `${recipe - bills}`)
}


function addingRecipes(recipes){
  let x = recipes.length;
  let cont = 0;

  for(let i = 0; i <= x-1; i++){
    cont = cont + recipes[i];
  
  }
  return(cont);
}

function addingBills(bills){
  let x = bills.length;
  let cont = 0;

  for(let i = 0; i <= x-1; i++){
    cont = cont + bills[i];
  }
  return(cont);
}

