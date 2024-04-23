function ClickOnButton() {
    let choice = true;
    let name, surname;
    let age;

    while (choice == true) {
        name = prompt("Your name", 'Devid');
        surname = prompt("Your surname", 'Muller');
        age = prompt("Your age", 15);

        if (name !== null) {
            alert(`Your name is ${name}`)
        }
        else {
            alert('You didn`t enter any value')
        }
    
        if (surname !== null) {
            alert(`Your surname is ${surname}`)
        }
        else {
            alert('You didn`t enter any value')
        }

        if (age !== null) {
            alert(`You are ${age} y.o`)
        }
        else {
            alert('You didn`t enter any value')
        }

        choice = confirm("Do you want to fill this form again?");
    }

    compareStrings(name, surname)
}

function compareStrings(str1, str2) {
    if (str1 > str2) {
        alert("Your name is bigger: " + str1);
    } else if (str2 > str1) {
        alert("Your surname is bigger: " + str2);
    } else {
        alert("Strings are equal.");
    }
}