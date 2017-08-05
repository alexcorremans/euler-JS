var multipleSum = 0;
function findMultiples(number) {
  for (var i = 0; i < number; i++) {
    if (i % 3===0 || i % 5===0) {
      multipleSum = multipleSum + i;
    }
  }
  return multipleSum;
}
document.write('the sum is ' + findMultiples(1000));
