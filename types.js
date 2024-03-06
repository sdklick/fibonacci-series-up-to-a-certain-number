// program to generate fibonacci series up to a certain number

let num = 15;
let fibo = [0, 1];
for (let i = 0; i < num; i++) {
  if (fibo.length < num && fibo[fibo.length - 1] < num) {
    let adddata = fibo[fibo.length - 1] + fibo[fibo.length - 2];
    fibo.push(adddata);
  } else if (fibo[fibo.length - 1] > num) {
    fibo.pop();
    break;
  } else {
    break;
  }
}
for (let z of fibo) {
  console.log(z);
}
