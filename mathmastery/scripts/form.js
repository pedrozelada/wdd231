const topicsArray = [
    { name: "Basic Arithmetic" },
    { name: "Pre-Algebra" },
    { name: "Algebra" },
    { name: "Geometry" },
    { name: "Trigonometry" },
    { name: "Pre-Calculus" },
    { name: "Calculus" },
    { name: "Statistics" },
    { name: "Probability" },
    { name: "Linear Algebra" },
    { name: "Differential Equations" },
    { name: "Discrete Mathematics" },
    { name: "Number Theory" },
    { name: "Topology" },
    { name: "Fractions" },
    { name: "Decimals" },
    { name: "Percentages" },
    { name: "Ratios and Proportions" },
    { name: "Measurement" },
    { name: "Basic Geometry" }
];


const productList = document.getElementById('topic');

topicsArray.forEach(topic => {
    const option = document.createElement('option');
    option.id = topic.name;
    option.value = topic.name;
    option.textContent = topic.name;
    productList.appendChild(option);
});

document.addEventListener("DOMContentLoaded", function() {
    var timestampField = document.getElementById('timestamp');
    var now = new Date();
    timestampField.value = now.toISOString();
});
