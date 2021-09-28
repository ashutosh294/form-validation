var emailPattern = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;
var Phoneno = /^\d{10}$/;



function validateEmail(){  
    console.log('hello world')   
    // let added = false; 
    // var emailPattern = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;
    // if(elementValue.match(emailPattern)){
    //     added = true;
    //     return added
    // }else{
    //     let result = document.getElementById("email_error").innerHTML = "Please fill the valid Email";
    //     return added
    // }
  }

function validationForm() {
    let firstname = document.getElementById("firstname").value;
    let lastname = document.getElementById("lastname").value;
    let gender = document.myForm.gender.value;
    let city = document.getElementById("city").value;
    let email = document.getElementById("email").value;
    let phoneno = document.getElementById("phoneno").value;
    let l1 = document.getElementById("reading");  
    let l2 = document.getElementById("dancing");  
    let l3 = document.getElementById("sports");  
    let l4 = document.getElementById("singing");
    console.log('form work' , email , phoneno)
    console.log('email validation', emailPattern.test(email)) 



if(firstname == undefined || firstname == null || firstname == ""){
    let result = document.getElementById("fname").innerHTML = "Please fill the firstname";
}
if(lastname == undefined || lastname == null || lastname == ""){
    let result = document.getElementById("lname").innerHTML = "Please fill the lastname";
}
    var ele=[]
     var reading = document.getElementById("reading")
     if(reading.checked){
           ele.push(reading.value);
    }
    var dancing = document.getElementById("dancing")
     if(dancing.checked){
           ele.push(dancing.value);
    }
    var singing = document.getElementById("singing")
     if(singing.checked){
           ele.push(singing.value);
    }
    var sports = document.getElementById("sports")
     if(sports.checked){
           ele.push(sports.value);
    }
      if(ele.length>0){
       document.getElementById("hobbies").innerHTML = ele;
      }
      else{
      document.getElementById("hobbies").innerHTML = "You Dont have any thing";
      }
        if(email == undefined || email == null || email == ""){
            let result = document.getElementById("email_error").innerHTML = "Please fill the Email Id";
        }
        if(!emailPattern.test(email)){
            let result = document.getElementById("email_error").innerHTML = "Please fill the valid Email";
        }
        if(phoneno == undefined || phoneno == null || phoneno == ""){
            let result = document.getElementById("phone_error").innerHTML = "Please fill the Phone Number";
        }
        if(!Phoneno.test(phoneno)){
            let result = document.getElementById("phone_error").innerHTML = "Phone Number should be 10 digits";
        }

        return false;

} 

// function getValue() {
    
//     }
    