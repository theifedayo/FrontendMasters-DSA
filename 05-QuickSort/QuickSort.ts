export default function quick_sort(arr: number[], left = 0, right = arr.length - 1): void {
    if (left >= right) {
      return;
    }
  
    const pivot = arr[Math.floor((left + right) / 2)];
  
    const index = partition(arr, left, right, pivot);
  
    quick_sort(arr, left, index - 1);
    quick_sort(arr, index, right);
  }
  
  function partition(arr: number[], left: number, right: number, pivot: number): number {
    while (left <= right) {
      while (arr[left] < pivot) {
        left++;
      }
  
      while (arr[right] > pivot) {
        right--;
      }
  
      if (left <= right) {
        [arr[left], arr[right]] = [arr[right], arr[left]];
        left++;
        right--;
      }
    }
  
    return left;
  }
  