/* ### Transformar notas escolares 

Crie um algoritmo que transforme as notas do sistema numérico para o sistema de notas em caracteres tipo A B C

  * de 90 pra cima  -  A
  * entre 80 - 89   -  B
  * entre 70 - 79   -  C 
  * entre 60 - 69   -  D
  * menor que 60    -  F

*/

let addGrade = document.querySelector("#calcGrade");
let math = document.querySelector("#math");
let lang = document.querySelector("#language");
let science = document.querySelector("#science");
let table = document.querySelector("#table");
let bodyT = document.querySelector("bodyT");



addGrade.addEventListener("click", function(event){
  event.preventDefault();

  let form = document.querySelector(".studentGrade");
  let span = document.querySelector("#invisible")
  let learner = createStudent(form);  
  let test = verifyStudent(learner);  
  let empty = filled(learner);
  
  if(test == false || empty == true){
    span.classList.remove("invisible");
  }  else{
      span.classList.add("invisible");
      table.classList.remove("table");
      cleanerStats(learner);
      let conceptMath = gradeConverter(learner.math);
      let conceptLang = gradeConverter(learner.lang);
      let conceptScience = gradeConverter(learner.science);
      inputName(learner.name);
      inputTable(conceptMath, "#mathTr");
      inputTable(conceptLang, "#langTr");
      inputTable(conceptScience, "#scienceTr");
      form.reset();
  }

})

function createStudent(form) {
  const student =  {
    name: form.name.value,
    math: form.math.value,
    lang: form.language.value,
    science: form.science.value
} 
  return(student);
}

function verifyStudent(learner) {

  if(learner.name.length > 0) {

    let testNotes = notesVerify(Number(learner.math), Number(learner.lang), Number(learner.science))
    return(testNotes);  
  }else{
    alert("nome invalido!");
  }
  function notesVerify(subject1, subject2, subject3) {
      if(subject1 >= 0 && subject1 <= 100 && subject2 >= 0 && subject2 <= 100 && subject3 >= 0 && subject3 <= 100){
        return(true);
      }else{
        return(false);
      }
  }
}

function filled(learner){
  let empty=false;
  if(learner.math == ""){
    math.classList.add("invalid");
    empty=true;
  } 
  if(learner.lang == ""){
    lang.classList.add("invalid");
    empty=true;
  }
  if(learner.science == ""){
    science.classList.add("invalid");
    empty=true;
  }
  console.log(empty)
  return(empty);
}

function cleanerStats(learner) {
  
  if(learner.math.length > 0){
    math.classList.remove("invalid");
    test = verifyStudent(learner);
  } 
  if(learner.lang.length > 0){
    lang.classList.remove("invalid");
    test = verifyStudent(learner);
  }
  if(learner.science.length > 0){
    science.classList.remove("invalid");
    test = verifyStudent(learner);
  }
}

function inputTable(lesson, id) {
  let makeTd = document.querySelector(id);
  let note = document.createElement("td");
  note.textContent = lesson;
  makeTd.appendChild(note);
}

function inputName(name) {
  let makeTh = document.querySelector("#nameTh")
  makeTh.textContent = name;

}

function gradeConverter(grade) {
  let concept;

  if(grade < 60){
    concept = "F";
  }else if(grade >= 60 && grade < 70) {
    concept = "D";
  }else if(grade >= 70 && grade < 80) {
    concept = "C";
  }else if(grade >= 80 && grade < 90) {
    concept = "B";
  }else {
    concept = "A";
  }

  return(concept);
}