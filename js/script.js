// write a function that takes the input string and reverses it
function reverseThisString(string) {
    var temp = '';
    for (var i = string.length; i >= 0; i--) {
        temp = temp + string.charAt(i);
    }
    string = temp;
    console.log(string);
}

//const hello = 'This is my story';
//reverseThisString(hello);


//write a function that takes the input string and switches all uppercase characters to lowercase and lowercase charcaters to uppercase
function swapCase(string) {
    nextcharacter = '';
    for (var i = 0; i <= string.length; i++) {
        if (string.charAt(i) === string.charAt(i).toUpperCase()) {
            nextcharacter += string.charAt(i).toLowerCase();
        } else if (string.charAt(i) === string.charAt(i).toLowerCase()) {
            nextcharacter += string.charAt(i).toUpperCase();
        }
    }
    string = nextcharacter;
    console.log(string);
}

//const string = 'Change My Capitalization';
//swapCase(string);

//convert array of numbers from farenheit to celcius
function toCelcius(array) {
    temparray = [];
    for (var i = 0; i < array.length; i++) {
        temp = (array[i] - 32) * (5 / 9);
        temparray.push(temp);
    }
    array = temparray;
    console.log(array);
}


//  array = [
//     57,
//     60,
//     50,
//     40
// ]
// toCelcius(array);


//write a function that takes an input array and returns an array of booleans (>=75) or fail (<75)
function passOrFail(array) {
    temparray = [];
    for (var i = 0; i < array.length; i++) {
        if (array[i] >= 75) {
            temparray.push(true);
        } else if (array[i] < 75) {
            temparray.push(false);
        }
    }

    return temparray;
}

//array2 = [50, 40, 80, 90]
//console.log(passOrFail(array2));


//write code that loops through the two variables returns an array ['2 is zwei', '3 is drei', '4 is vier', '5 is fünf', '6 is sechs']
function germanNumbers() {
    var cardinalNumbers = [2, 3, 4, 5, 6];
    var germanNumbers = ['zwei', 'drei', 'vier', 'fünf', 'sechs'];
    var temparray = [];
    for (var i = 0; i < cardinalNumbers.length; i++) {
        temparray.push(`${cardinalNumbers[i]} is ${germanNumbers[i]}`)
    }
    return temparray;
}

//console.log(germanNumbers());


// write code that returns an array of ONLY prime numbers that are in the array numbers
function returnPrimeNumbers() {
    const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15];
    temparray = [];

    for (var i = 0; i < numbers.length; i++) {
        if (numbers[i] == 2) {
            temparray.push(numbers[i]);
        }
            for (var j = 2; j < numbers[i]; j++) {
                if ((numbers[i] % j) == 0) {
                    break;
                } else (temparray.push(numbers[i]));
                    break;
            }
    }
    console.log(temparray);
}

//returnPrimeNumbers();

// Write a function that loops through and console.log's the numbers from 1 to 100, except multiples of three, log (without quotes) "CSC225 RULES" instead of the number, for the multiples of five, log (without quotes) "I LOVE JAVASCRIPT". For numbers which are multiples of both three and five, log (without quotes) "CSC225 RULES I LOVE JAVASCRIPT" 
function csc225Rules() {
 for (var i = 1; i <= 100; i++) {
     if ((i % 3 === 0) && (i % 5 === 0)) {
         console.log('CSC225 RULES I LOVE JAVASCRIPT');
     }else if (i % 3 === 0) {
         console.log('CSC225 RULES')
     }else if (i % 5 === 0) {
         console.log('I LOVE JAVASCRIPT');
     }else (console.log(i));
 }
}

//csc225Rules();