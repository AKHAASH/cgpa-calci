<<<<<<< HEAD
import { allSemPapers, gradePoints,setAllsemPapers,save,setGrades } from "../data/data.js";

setAllsemPapers();


/******Generates HTML*******/

let html='';
html+=generateHTML(allSemPapers);
document.querySelector('.js-cgpa-calculator')
  .innerHTML=html+`
    <h1></h1>
    <button class="js-calculate_cgpa">Calculate_CGPA</button>
    <h1></h1>
    <h1></h1>
    <button class="js-save">save</button>
    <h1></h1>
    <h1></h1>
    <p class="js-result"></p>
  `;
setGrades(allSemPapers,0);


/******Calculates CGPA*******/

document.querySelector('.js-calculate_cgpa').addEventListener('click',()=>{
  const inputs=document.querySelectorAll('input');
  let myGradePoints=[];
  let result;
  let numerator=0;
  let denominator=0;
  let i=0;

  inputs.forEach((input)=>{
    let grade=input.value;
    myGradePoints.push(gradePoints[(grade).toLowerCase()]);
  });

  allSemPapers.forEach((paper)=>{
    let credit=paper.credits
    denominator+=credit;
    numerator+=(credit*myGradePoints[i]);
    i++;
  });
  
  result=numerator/denominator;
  document.querySelector('.js-result').
    innerHTML=`
      <div>
        <p>Numerator = ${numerator}</p>
        <p>Total credits = ${denominator}</p>
        <p>CGPA = ${(result).toFixed(4)}</p>
      </div>
    `;
});


/******Required Functions******/

function generateHTML(sem){
  let html='';
  let i=1;
  sem.forEach((paper)=>{
    html+=`
      ${i}. ${paper.subject} 
      <input type="text" placeholder="Grade"><p class="credits">${paper.credits}</p>
    `;
    i++;
  });
    return html;
}


//******Saving To LocalStorage******/

document.querySelector('.js-save').addEventListener('click',()=>{
  save(allSemPapers,0);
});

=======
import { allSemPapers, gradePoints,setAllsemPapers,save,setGrades } from "../data/data.js";

setAllsemPapers();


/******Generates HTML*******/

let html='';
html+=generateHTML(allSemPapers);
document.querySelector('.js-cgpa-calculator')
  .innerHTML=html+`
    <h1></h1>
    <button class="js-calculate_cgpa">Calculate_CGPA</button>
    <h1></h1>
    <h1></h1>
    <button class="js-save">save</button>
    <h1></h1>
    <h1></h1>
    <p class="js-result"></p>
  `;
setGrades(allSemPapers,0);


/******Calculates CGPA*******/

document.querySelector('.js-calculate_cgpa').addEventListener('click',()=>{
  const inputs=document.querySelectorAll('input');
  let myGradePoints=[];
  let result;
  let numerator=0;
  let denominator=0;
  let i=0;

  inputs.forEach((input)=>{
    let grade=input.value;
    myGradePoints.push(gradePoints[(grade).toLowerCase()]);
  });

  allSemPapers.forEach((paper)=>{
    let credit=paper.credits
    denominator+=credit;
    numerator+=(credit*myGradePoints[i]);
    i++;
  });
  
  result=numerator/denominator;
  document.querySelector('.js-result').
    innerHTML=`
      <div>
        <p>Numerator = ${numerator}</p>
        <p>Total credits = ${denominator}</p>
        <p>CGPA = ${(result).toFixed(4)}</p>
      </div>
    `;
});


/******Required Functions******/

function generateHTML(sem){
  let html='';
  let i=1;
  sem.forEach((paper)=>{
    html+=`
      ${i}. ${paper.subject} 
      <input type="text" placeholder="Grade"><p class="credits">${paper.credits}</p>
    `;
    i++;
  });
    return html;
}


//******Saving To LocalStorage******/

document.querySelector('.js-save').addEventListener('click',()=>{
  save(allSemPapers,0);
});

>>>>>>> 1c2f4018b2884894636f943ed634cd545a999687
