//import "streetbike.jpg";
//ALERT

alert("You must be over the age of 14 to purchase or operate a motorcycle");

function ageCheck() {
    let age = prompt("Are you over the age of 14? Yes or No");

    if (age) {
        while (age.toLowerCase() !== "yes") {
            ageCheck();
            console.log(age);
            return age;
        }
    } else { 
        ageCheck();
    }
}
    ageCheck();

// GREETING FUNCTION

    function userGreeting() {
        userName = prompt("Welcome to Top Performance Motors! What is your name?");
        console.log(userName);
        document.write("Thank you for shopping with us today " + userName);
        return userName;
    }

    userGreeting();

    //PICTURE FUNCTION

    function popupPicture() {
        let number = prompt("Pick a number between 1 and 3");

        if (number == 1 || number == 2 || number == 3) {

            document.write("<img src='./streetbike.jpg' width = '350px'></img>");
            document.write("<img src='./streetbike.jpg' width = '350px'></img>");

        } else { 
            popupPicture();
            console.log(number);
        }
        
    }

    popupPicture();



//document.write
//prompt
//alert