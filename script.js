

alert("You must be over the age of 14 to purchase or operate a motorcycle");

function ageCheck(){
   let age = prompt("Are you over the age of 14? Yes or No"); 

  if (age.toLowerCase() == "yes") {

  } else { 
    ageCheck();
   console.log(age);
   return age;
  }
}

ageCheck();



function userGreeting(){
    userName = prompt("Welcome to Top Performance Motors! What is your name?");
    console.log(userName);
    document.write("Thank you for shopping with us today " + userName);
    return userName;
}

userGreeting();



//document.write
//prompt
//alert