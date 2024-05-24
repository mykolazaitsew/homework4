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