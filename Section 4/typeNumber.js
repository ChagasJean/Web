const weight1 = 1.0;
const weight2 = Number("2.0");

console.log("Weight 1: " + weight1);
console.log("Weight 2: " + weight2);

const assessment1 = 5.95;
const assessment2 = 7.85;
console.log("Assessment 1: " + assessment1);
console.log("Assessment 2: " + assessment2);

const total = assessment1 * weight1 + assessment2 * weight2;
const media = total / (weight1 + weight2);

console.log("Media: " + media.toFixed(2));

const radius = 5.6;
const area = Math.PI * Math.pow(radius, 2);

console.log(area.toFixed(2));