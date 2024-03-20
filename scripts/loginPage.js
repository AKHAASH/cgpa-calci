let rollNumber={rollNo:""};

document.querySelector('.js-enter').addEventListener('click',()=>{
  rollNumber.rollNo=document.querySelector('.js-login-input').value;
  localStorage.setItem("rollNumber",JSON.stringify(rollNumber));
})