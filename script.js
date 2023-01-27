
//THIS IS MY ALERT

alert("You must be over the age of 14 to purchase or operate a motorcycle");


// THIS IS MY FUNCTION PROMPT

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

// THIS IS MY GREETING FUNCTION

    function userGreeting() {
        userName = prompt("Welcome to Top Performance Motors! What is your name?");
        console.log(userName);
        document.write("Thank you for shopping with us today " + userName);
        return userName;
    }

    userGreeting();




// //CREATING THE FUNCTION FOR DISPLAYING PICTURES
function popupPicture() {
    let number = prompt("Pick a number between 1 and 3");
    console.log(number);

    if (number == 1 || number == 2 || number == 3) {
        console.log(number);
    } else {
        popupPicture();
    }

    for (let i = 0; i < number; i++) {
        document.write("<img src='./streetbike.jpg' width = '350px'></img>");
        console.log(number);
        console.log(i);
    }
}

popupPicture();

    //     if (number == 1) {
    //         document.write("<img src='./streetbike.jpg' width = '350px'></img>");
    //         console.log(number);

    //     } else if (number == 2) {
    //         document.write("<img src='./streetbike.jpg' width = '350px'></img>");
    //         document.write("<img src='./streetbike.jpg' width = '350px'></img>");
    //         console.log(number);

    //     } else if (number == 3) {
    //         document.write("<img src='./streetbike.jpg' width = '350px'></img>");
    //         document.write("<img src='./streetbike.jpg' width = '350px'></img>");
    //         document.write("<img src='./streetbike.jpg' width = '350px'></img>");
    //         console.log(number);

    //     } else { 
    //         popupPicture();
    //         console.log(number);
    //     }
        
    // }