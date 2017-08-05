var fibonaccilist = [1,2];
var fibonaccisum = 0;
function fibonacci (number) {
  for (var i = 0; fibonaccilist[fibonaccilist.length - 1] < number; i++) {
      fibonaccilist.push(fibonaccilist[i]+fibonaccilist[i+1]);
  }
}
function sumEvenNumbers () {
  for (var i=0; i<fibonaccilist.length -1; i++) {
    if (fibonaccilist[i] % 2 === 0) {
      fibonaccisum = fibonaccisum + fibonaccilist[i];
    }
  }
  return fibonaccisum;
}

fibonacci(4000000);
document.write('the sum is ' + sumEvenNumbers());
