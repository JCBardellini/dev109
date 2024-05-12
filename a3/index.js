const createRhombus = () => {
    // user inputs
    const height = parseInt(document.getElementById("height").value);
    const oddColor = document.getElementById("oddColor").value;
    const evenColor = document.getElementById("evenColor").value;
    const symbol = document.getElementById("symbol").value;

    const upperRhombus = generateRhombus(height, oddColor, evenColor, symbol, 'upperPart');
    const lowerRhombus = generateRhombus(height, oddColor, evenColor, symbol, 'bottomPart');

    // Update the rhombus display areas 
    document.getElementById("upperPart").innerHTML = upperRhombus;
    document.getElementById("bottomPart").innerHTML = lowerRhombus;
    
}

// generate the rhombus HTML for bottom and top
const generateRhombus = (height, oddColor, evenColor, symbol) => {
    let rhombusBuild = '';

    for (let i = 1; i <= height; i++) {
        rhombusBuild += '&nbsp;&nbsp;'.repeat(height - i);
        for (let j = 1; j <= 2 * i - 1; j++) {
            const currentColor = i % 2 !== 0 ? oddColor : evenColor;
            rhombusBuild += `<span style="color: ${currentColor};">${symbol}</span>`;
        }
        rhombusBuild += '<br>'; // Move to the next row
    }
    return rhombusBuild;
};

