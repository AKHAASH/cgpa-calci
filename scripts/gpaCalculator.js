import { allSemPapers, gradePoints, setAllsemPapers,setGrades,save } from "../data/data.js";


export function gpaCalci(start,end,semNO){

  setAllsemPapers();

  /******Generates HTML*******/

  let html='';
  html+=generateHTML(allSemPapers);
  document.querySelector('.js-gpa-calculator')
    .innerHTML=html+`
      <h1></h1>
      <button>Calculate_GPA</button>
      <h1></h1>
      <h1></h1>
      <button class="js-save">save</button>
      <h1></h1>
      <h1></h1>
      <p class="js-result"></p>
    `;
  setGrades(allSemPapers,start);


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

    for(let i=start;i<end;i++){
      let credit=allSemPapers[i].credits;
      denominator+=credit;
      numerator+=(credit*myGradePoints[i-start]);
    }
      
    result=numerator/denominator;
    document.querySelector('.js-result').
      innerHTML=`
        <div>
          <p>Numerator = ${numerator}</p>
          <p>Total credits = ${denominator}</p>
          <p>SEM-${semNO}-GPA = ${(result).toFixed(4)}</p>
        </div>
      `;
  });


  /******Required Functions******/

  function generateHTML(sem){
    let html='';
    for(let i=start;i<end;i++){
      html+=`
        ${i-start+1}. ${sem[i].subject} 
        <input type="text" placeholder="Grade"><p class="credits">${sem[i].credits}</p>
      `;
    }
    return html;
  }


  //******Saving To LocalStorage******/

  document.querySelector('.js-save').addEventListener('click',()=>{
    save(allSemPapers,start);
  });
}