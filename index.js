function task1 (i) {
    let a = "є простим числом";
    let b = " ";
    for (let x = 2; x < i; x++) {
      if (i % x !== 0) continue;
      b = " не ";
    }
    if (i === 0) {
      a = "нейтральний елемент ";
    }
    if (i === 1) {
      a = "натуральне число ";
    }
    console.log(`Число ${i}${b}${a}`);
  }

task1(0);

function task2(n) {
    function arraySum(array) {
        let sum = 0;
        for (let element = 0; element < array.length; element++) {
            sum += array[element];
        }
        return sum;
    }

    for (let i = 1; i <= n; i++) {
        let nomberS = [];
        for (let x = 1; x < i; x++) {
            if (i % x === 0) {
                nomberS.push(x);
            }
        }
        if (arraySum(nomberS) === i) {
            console.log(`Число ${i} досконале`);
        }
    }
}
task2(10000);