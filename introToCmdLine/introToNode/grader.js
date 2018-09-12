const average = testScore => {
    let result = Math.round(testScore.reduce((a,b) => a + b, 0) / testScore.length);
    console.log(result);
};

const scores = [90, 98, 89, 100, 100, 86, 94];
average(scores);
const scores2 = [40, 65, 77, 82, 80, 54, 73, 63, 95, 49];
average(scores2);