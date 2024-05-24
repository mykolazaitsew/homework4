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


function task2(n) {
    function arraySum(array) {
        let sum = 0;
        for (let element = 0; element < array.length; element++) {
            sum += array[element];
        }
        return sum;
    }

    for (let i = 1; i <= n; i++) {
        let num = [];
        for (let x = 1; x < i; x++) {
            if (i % x === 0) {
                num.push(x);
            }
        }
        if (arraySum(num) === i) {
            console.log(`Число ${i} досконале`);
        }
    }
}


function task3(height) {
    let tree = "";
    for (let i = 1; i <= height; i++) {
        tree += " ".repeat(height - i);
        tree += "*".repeat(2 * i - 1);
         if (i < height) {
            tree += "\n";
        }
    }

    console.log(tree);
}


task1(0);
task2(10);
task3(5); 


