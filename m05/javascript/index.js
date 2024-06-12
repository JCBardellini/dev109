// Prompt the user for a number
let userPrompt = prompt('Enter a number from 0 to 10 for the multiplication table:'); 

let headline = '<h2>Multiplication Table</h2>';

if (userPrompt !== null && !isNaN(userPrompt) && userPrompt >= 0 && userPrompt <= 10) {
    let i = 1;  

    while (i <= 10) {
        headline += i + ' x ' + userPrompt + ' = ' + (i * userPrompt) + '<br />';
        i++;
    }
} else {
    headline = '<h2>Please enter a valid number between 0 and 10.</h2>';
}

// Write the message into the page
let el = document.getElementById('blackboard');
el.innerHTML = headline;
