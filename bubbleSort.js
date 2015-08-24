function bubbleSort(arr){
  var wrk = arr.slice();
  var swapped = true;

  while(swapped) {
    swapped = false;
    for (var i = 0; i < wrk.length-1; i++) {
      if (wrk[i] > wrk[i+1]) {
        var tmp = wrk[i];
        wrk[i] = wrk[i+1];
        wrk[i+1] = tmp;
        swapped = true;
      }
    }
  }

  return wrk;
}

module.exports = bubbleSort;
