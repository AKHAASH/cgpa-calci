import { allSemPapers } from "../data/data.js";
import { gradePoints } from "../data/data.js";

/******Generates HTML*******/

let html='';
html+=generateHTML(allSemPapers);
document.querySelector('.js-gpa-calculator')
  .innerHTML=html+`
    <h1></h1>
    <button>Calculate_CGPA</button>
    <h1></h1>
    <h1></h1>
    <p class="js-result"></p>
  `;


  /******Calculates SEM-I-GPA*******/

  document.querySelector('button').addEventListener('click',()=>{
    const inputs=document.querySelectorAll('input');
    let myGradePoints=[];
    let result;
    let numerator=0;
    let denominator=0;
  
    inputs.forEach((input)=>{
      let grade=input.value;
      myGradePoints.push(gradePoints[(grade).toLowerCase()]);
    });

    for(let i=8;i<17;i++){
      let credit=allSemPapers[i].credits;
      denominator+=credit;
      numerator+=(credit*myGradePoints[i-8]);
    }
    
    result=numerator/denominator;
    document.querySelector('.js-result').
      innerHTML=`
        <div>
          <p>Numerator = ${numerator}</p>
          <p>Total credits = ${denominator}</p>
          <p>SEM-1-GPA = ${(result).toFixed(4)}</p>
        </div>
      `;
  });


/******Required Functions******/

function generateHTML(sem1){
  let html='';
  for(let i=8;i<17;i++){
    html+=`
      ${i-7}. ${sem1[i].subject} 
      <input type="text" placeholder="Grade"><h1></h1>
    `;
  }
  return html;
}