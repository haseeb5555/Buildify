let weeklyTemperatures = [72, 68, 75, 80, 82, 78, 73];


let sum = weeklyTemperatures.reduce((acc, temp) => acc + temp);
let averageTemperature = sum / weeklyTemperatures.length;
console.log(averageTemperature);



  