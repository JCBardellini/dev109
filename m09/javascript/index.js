// let  myButton = document.querySelector("button");

// myButton.addEventListener("click", function(e) {
//     let element = document.getElementsByTagName("div");
//     for (index = element.length - 1; index >= 0; index--) {
//         element[index].parentNode.removeChild(element[index]);
//     }
//     // Let us stop the propagation of events
//     e.stopPropagation();
// });

// document.addEventListener("click", function(e) {
//     if (e.target.tagName !== "BUTTON" && e.target.tagName !== "SELECT") {
//         // Retrieve color and size values from form
//         let color = document.getElementById("dotColor").value;
//         let size = document.getElementById("dotSize").value;
        
//         // Create dot element
//         let dot = document.createElement("div");
//         dot.className = "dot";
        
//         // Apply styles
//         dot.style.backgroundColor = color;
//         dot.style.width = size * 2 + "px";
//         dot.style.height = size * 2 + "px";
        
        
//         // Calculate dot position
//         dot.style.left = (e.pageX - parseInt(size) / 2) + "px";
//         dot.style.top = (e.pageY - parseInt(size) / 2) + "px";
        
//         // Append dot to the body
//         document.body.appendChild(dot);
//     }
// });

// arrow functions 

const clearScreen = (e) => {
    let dots = document.getElementsByTagName("div");
    for (i = dots.length - 1; i >= 0; i--) {
        dots[i].parentNode.removeChild(dots[i]);
    }
    // Let us stop the propagation of events
    e.stopPropagation();
}

const createDot = (e) => {
    if (e.target.tagName !== "BUTTON" && e.target.tagName !== "SELECT") {

        let color = document.getElementById("dotColor").value;
        let size = document.getElementById("dotSize").value;
        
        // Create dot element
        let dot = document.createElement("div");
        dot.className = "dot";
        
        dot.style.backgroundColor = color;
        dot.style.width = size * 2 + "px";
        dot.style.height = size * 2 + "px";
        

        dot.style.left = (e.pageX - parseInt(size) / 2) + "px";
        dot.style.top = (e.pageY - parseInt(size) / 2) + "px";
        
        document.body.appendChild(dot);
    }
}

let myButton = document.querySelector("button");
myButton.addEventListener("click", clearScreen);
document.addEventListener("click", createDot);
