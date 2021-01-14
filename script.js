const title = new String(document.querySelector("h1").textContent);

console.log(title);

let tech = {
  name:'JS',
  type:'object oriented',
  language:'prototype'
}

for(let blabla in tech){
  console.log(blabla);
  console.log(tech[blabla])
}