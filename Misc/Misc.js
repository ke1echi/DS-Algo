function insertionSort(arr) {
  for (let i = 1, len = arr.length; i < len; i++) {
    let temp = arr[i];
    let j = i-1;
    while (j >= 0 && arr[j] > temp) {
      arr[j+1] = arr[j];  
      j--;
    }
    arr[j+1] = temp;
  }  
  return arr;
}
insertionSort([5, 4, 10, 1, 6, 2]);