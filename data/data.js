export let allSemPapers;
export function setAllsemPapers(){
  const rollNumber=JSON.parse(localStorage.getItem("rollNumber"));
  allSemPapers=JSON.parse(localStorage.getItem(rollNumber.rollNo))||[
    {
      subject:'Basic Electrical, Electronics and Measurement Engineering',
      credits:3,
      grade:''
    },
    {
      subject:'Communicative English',
      credits:3,
      grade:''
    },
    {
      subject:'Engineering Chemistry',
      credits:3,
      grade:''
    },
    {
      subject:'Engineering Physics',
      credits:3,
      grade:''
    },
    {
      subject:'Mathematics - I',
      credits:4,
      grade:''
    },
    {
      subject:'Problem Solving and Fundamentals of C Programming',
      credits:3,
      grade:''
    },
    {
      subject:'C Programming Laboratory',
      credits:1.5,
      grade:''
    },
    {
      subject:'Physics and Chemistry Laboratory',
      credits:1.5,
      grade:''
    },
    {
      subject:'Technical English',
      credits:3,
      grade:''
    },
    {
      subject:'Mathematics - II',
      credits:4,
      grade:''
    },
    {
      subject:'Physics for Information Science',
      credits:3,
      grade:''
    },
    {
      subject:'Introduction to Artificial Intelligence',
      credits:3,
      grade:''
    },
    {
      subject:'Computational Thinking Using Python',
      credits:3,
      grade:''
    },
    {
      subject:'Engineering Graphics',
      credits:4,
      grade:''
    },
    {
      subject:'Engineering Practice Laboratory',
      credits:1.5,
      grade:''
    },
    {
      subject:'Python Programming Laboratory',
      credits:1.5,
      grade:''
    },
    {
      subject:'Professional Skill - I',
      credits:1,
      grade:''
    },
    {
      subject:'Transforms and Partial Differencial Equations',
      credits:4,
      grade:''
    },
    {
      subject:'Data Structures and Algorithms',
      credits:4,
      grade:''
    },
    {
      subject:'Fundamentals of OS',
      credits:4,
      grade:''
    },
    {
      subject:'Object Oriented Programming',
      credits:3,
      grade:''
    },
    {
      subject:'Database Management System',
      credits:3,
      grade:''
    },
    {
      subject:'Data Structures and Algorithms Laboratory',
      credits:2,
      grade:''
    },
    {
      subject:'Object Oriented Programming Laboratory',
      credits:1.5,
      grade:''
    },
    {
      subject:'Database Management System Laboratory',
      credits:1.5,
      grade:''
    },
    {
      subject:'Professional Skills - II',
      credits:1,
      grade:''
    },
    {
      subject:'Heritage of Tamil',
      credits:1,
      grade:''
    }
  ];
}
export const gradePoints={
  'o':10,
  'a+':9,
  'a':8,
  'b+':7,
  'b':6,
  'c':5,
  'u':0
};

export function save(allSemPapers,start){
  const inputs=document.querySelectorAll('input');
  let i=start;
  inputs.forEach((input)=>{
    const grade=input.value;
    allSemPapers[i].grade=grade;
    i++;
  });
  const rollNumber=JSON.parse(localStorage.getItem("rollNumber"));
  localStorage.setItem(rollNumber.rollNo,JSON.stringify(allSemPapers));
  alert('Successfully Saved !');
}

export function setGrades(allSemPapers,start){
  const inputs=document.querySelectorAll('input');
  let i=start;
  inputs.forEach((input)=>{
    input.value=allSemPapers[i].grade;
    i++;
  });
}