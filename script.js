var email= document.getElementById('field1')
var err1= document.getElementById('err1')
var pwd= document.getElementById('field2')
var err2= document.getElementById('"showHide')
var number= document.getElementById('field3')
var err3= document.getElementById('err3')
var regex= /^([A-Z a-z 0-9 \-#_.]+)@([A-z a-z 0-9\-]+).([a-z]{2,3}).([a-z]{2,3})?$/
var phoneno = /^\(?([0-9]{3})\)?[-. ]?([0-9]{3})[-. ]?([0-9]{4})$/;
var pattern="(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{8,}"


function validateEmail(){
               // alert('hello')
               if(email.value.trim()==''){
                err1.innerText='Field cannot be empty';
                email.style.border= '1px solid red'
                return false
               }
               else if(!email.value.match(regex)){
                err1.innerText='Email is not in correct format';
                email.style.border= '1px solid red'
                return false
               }
               else {
                err1.innerText='';
                email.style.border= '3px solid green'
                return true
               }               

}
function validatemobilenumber()
{
    if(number.value.trim()==''){
        err3.innerText='Field cannot be empty';
        number.style.border= '1px solid red'
        return false
       }
  
       else if(!number.value.match(phoneno)) {
       err3.innerText='Phone Number is not in correct format';
       number.style.border= '1px solid red'
             
            return false;
              }
            else
              {
                err3.innerText='';
                number.style.border= '3px solid green'
              return true;
              }
      
      
}


function validatePass(){
    // alert('hello')
    if(pwd.value.trim()==''){
     err2.innerText='Field cannot be empty';
     pwd.style.border= '1px solid red'
     return false
    }
    else if (!pwd.value.match(pattern))
    {
        err2.innerText='Must contain at least one number and one uppercase and lowercase letter, and at least 8 or more characters';
     pwd.style.border= '1px solid red'
     return false
    }
    else{
        err2.innerText='';
     pwd.style.border= '3px solid green'  
     return true
    }
}
function verify(){
    if(!validateEmail()||!validatePass()){
        return false
    }
    else{
        return true
    }
}

let passwordInput = document.querySelector('#passwordInput input[type="password"]');
let passwordStrength= document.getElementById('passwordStrength');
let poor = document.querySelector('#passwordStrength #poor');
let weak = document.querySelector('#passwordStrength #weak');
let strong = document.querySelector('#passwordStrength #strong');
let passwordInfo = document.getElementById('passwordInfo');

let poorRegExp = /[a-z]/;
let weakRegExp = /(?=.*?[0-9])/;;
let strongRegExp = /(?=.*?[#?!@$%^&*-])/;
let whitespaceRegExp = /^$|\s+/;
passwordInput.oninput= function(){

     let passwordValue= passwordInput.value;
     let passwordLength= passwordValue.length;
     let poorPassword= passwordValue.match(poorRegExp);
     let weakPassword= passwordValue.match(weakRegExp);
     let strongPassword= passwordValue.match(strongRegExp);
     let whitespace= passwordValue.match(whitespaceRegExp);
if(passwordValue != ""){
 passwordStrength.style.display = "block";
 passwordStrength.style.display = "flex";
 passwordInfo.style.display = "block";
 passwordInfo.style.color = "black";
 if(whitespace)
 {
  passwordInfo.textContent = "whitespaces are not allowed";
 }else{
 poorPasswordStrength(passwordLength, poorPassword, weakPassword, strongPassword);
 weakPasswordStrength(passwordLength, poorPassword, weakPassword, strongPassword);
 strongPasswordStrength(passwordLength, poorPassword, weakPassword, strongPassword);
}
 
}else{
 
 passwordStrength.style.display = "none";
 passwordInfo.style.display = "none";

}
}
function poorPasswordStrength(passwordLength, poorPassword, weakPassword, strongPassword){
  if(passwordLength <= 3 && (poorPassword || weakPassword || strongPassword))
    {
   poor.classList.add("active");
   passwordInfo.style.display = "block";
   passwordInfo.style.color = "red";
   passwordInfo.textContent = "Your password is too Poor";
      
    }
}
function weakPasswordStrength(passwordLength, poorPassword, weakPassword, strongPassword){
if(passwordLength>= 4 && poorPassword && (weakPassword || strongPassword))
{
 weak.classList.add("active");
 passwordInfo.textContent = "Your password is Weak";
 passwordInfo.style.color = "orange";

}else{
 weak.classList.remove("active");
 
}
}
function strongPasswordStrength(passwordLength, poorPassword, weakPassword, strongPassword){
if(passwordLength >= 6 && (poorPassword && weakPassword) && strongPassword)
{
 poor.classList.add("active");
 weak.classList.add("active");
 strong.classList.add("active");
 passwordInfo.textContent = "Your password is strong";
 passwordInfo.style.color = "green";
}else{
 strong.classList.remove("active");
 
}
}
let showHide = document.querySelector('#passwordInput #showHide');
showHide.onclick = function(){
  showHidePassword()
}
function showHidePassword(){
if(passwordInput.type == "password"){
passwordInput.type = "text";
showHide.textContent = "HIDE";
showHide.style.color = "green";
}else{
passwordInput.type = "password";
showHide.textContent = "SHOW";
showHide.style.color = "red";
}
}
