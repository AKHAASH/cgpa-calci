<<<<<<< HEAD
let rollNumber={rollNo:""};

document.querySelector('.js-enter').addEventListener('click',()=>{
  rollNumber.rollNo=document.querySelector('.js-login-input').value;
  localStorage.setItem("rollNumber",JSON.stringify(rollNumber));
=======
let rollNumber={rollNo:""};

document.querySelector('.js-enter').addEventListener('click',()=>{
  rollNumber.rollNo=document.querySelector('.js-login-input').value;
  localStorage.setItem("rollNumber",JSON.stringify(rollNumber));
>>>>>>> 1c2f4018b2884894636f943ed634cd545a999687
})