const operations = [
    { name: 'Simplify', value: 'simplify', example: '2^2+2(2)' },
    { name: 'Factor', value: 'factor', example: 'x^2 + 2x' },
    { name: 'Derive', value: 'derive', example: 'x^2+2x' },
    { name: 'Integrate', value: 'integrate', example: 'x^2+2x' },
    { name: 'Find 0\'s', value: 'zeroes', example: 'x^2+2x' },
    { name: 'Find Tangent', value: 'tangent', example: '2lx^3' },
    { name: 'Area Under Curve', value: 'area', example: '2:4lx^3' },
    { name: 'Cosine', value: 'cos', example: 'pi' },
    { name: 'Sine', value: 'sin', example: '0' },
    { name: 'Tangent', value: 'tan', example: '0' },
    { name: 'Inverse Cosine', value: 'arccos', example: '1' },
    { name: 'Inverse Sine', value: 'arcsin', example: '0' },
    { name: 'Inverse Tangent', value: 'arctan', example: '0' },
    { name: 'Absolute Value', value: 'abs', example: '-1' },
    { name: 'Logarithm', value: 'log', example: '2l8' }
];

const url = 'https://newton.now.sh/api/v2/';

let operation = document.querySelector('#operation');
let expression = document.querySelector('#expression');
let result = document.querySelector('#result');
let example = document.querySelector('#example');
const button = document.querySelector('#button');


operations.forEach(operationN => {
    const option = document.createElement('option');
    option.id = operationN.name;
    option.value = operationN.value;
    option.textContent = operationN.name;
    operation.appendChild(option);
});


async function fetchNewtonAPI(operation, expression) {
    const urlc = `${url}${operation}/${encodeURIComponent(expression)}`;
    try {
        console.log(urlc)
        const response = await fetch(urlc);
        const data = await response.json();
        result.innerHTML = `${data.result}`;
        return data;
    } catch (error) {
        console.error('Error fetching data:', error);
        return null;
    }
}

operation.addEventListener('change', () => {
    const selectedOperation = operations.find(op => op.value === operation.value);
    if (selectedOperation) {
        example.innerHTML = `Example expression: ${selectedOperation.example}`;
    } else {
        example.innerHTML = '';
    }
});

button.addEventListener("click", () => {
    fetchNewtonAPI(operation.value, expression.value);
  });
  



