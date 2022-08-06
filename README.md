# Sorting-Algorithms-Vizualizer

https://dinuionica.github.io/Sorting-Vizualizer/
##  Repository Content:

 - sorting-algorithms/    - the implementation of different algorithms used for the sorting process
 - script.ts/script.js    - the files that containt the main functionality of the project
 - index.html             - the html root file of the project
 - style.css              - the file that contains the style for the project
 - tsconfig.js            - the file with all typescript setting for compile

## The idea of the project

This project represent a web application created using TypeScript for visualization of different sorting algorithms. 
Among the algorithms implemented are **Bubble Sort , Insertion Sort, Merge Sort, Quick Sort, Radix Sort**. Within the project,
a series of functionalities were also created, such as changing the size of the array, increasing the specific speed of sorting
 
## Run the application

To compile the main typescript file:

### Linux: 
```
tsc --module es2022 script.ts
```
## The Implementation

## Bubble Sort
Implemented the simplest sorting algorithms that works by swapping between two adjacent elements, if they are not in the desired order (ascending or descending). This algorithm is not suitable for large data sets.
#### Pseudocode: 
```
for step in array_size
  for j in array_size - i - 1
   if array[j] and array[j + 1] are not in the desired order
   swap array[j] with array[j + 1]
  
 return the final array
```
#### Complexity
* Time Complexity : O(n ^ 2)
* Space Complexity: O(1)

## Insertion Sort
Implemented another simplest sorting algorithms, an algorithm that works with two parts of the array : unosorted or sorted part. An element of
unsorted part is picked and then is inserted in the desired position of sorted part of the array.

#### Pseudocode: 
```
for i in array_size
  key is equal with array[i]
  j is i - 1
  while j is greater that 0 and key is small that array[j]
  array[j + 1] is equal with array[j]
  j is decrementing
  array[j + 1] is equal with the desired key
  
  return the final array
```

#### Complexity
* Time Complexity : O(n ^ 2)
* Space Complexity: O(1)

## Merge Sort
Implemented the merge sort algorithm witch is an efficient algorithms because it divides the inital array in two parts, it sorts every part,
the left and rigth part of the array and in the final it merges the two parts in the sorted result array.

#### Pseudocode: 
```
  if the left index is small that right index
  calculate the mid as (left + right) / 2
  call recursive mergeSort for the left part mergeSort(array, left, mid)
  call recursive mergeSort for the right part mergeSort(array, mid + 1, right)
  merge the two parts and return the final array
```

#### Complexity
* Time Complexity : O(n * log(n))
* Space Complexity: O(n)


## Quick Sort
Implemented the quick sort algorithm, the most used and efficient algorithm. The main idea of this algorithm is to pick an element as a pivot and partitions of the array around the picked pivot. The key of quick sort algorithm is, given an array of numbers and an element pi as the pivot, put pi in the desired position in the sorted array and put all smaller elements(smaller than pi) before pi, and put all greater elements(greater than x) after x.

#### Pseudocode for quick sort function: 
```
 if left is small than right
   pi is partitioning index
   pi = partition(array, left, right)
   call recursive quick sort for left part quickSort(array, left, pi - 1)
   call recursive quick sort for right part quickSort(array, pi + 1, right)
```
#### Pseudocode for partition: 
```
  pivot is equal with the last element
  i is equal left - 1, index of smaller element
  and indicates the right position of pivout found so far
  for j in (left, right - 1)
    if the current element is small than the pivot
     ++i, increment index of smaller element
     swap array[i] with array[j]
   
   swap array[i + 1] with array[right]
   return i + 1
```

#### Complexity
* Time Complexity : O(n * log(n))
* Space Complexity: O(1)

## Radix Sort
Implemented the Radix Sort that is a sorting algorithm that takes into account individual digits of the sorted elements. A simple version of radix sort is the one that uses 10 tails (one for each digit from 0 to 9). These queues will retain at each step the numbers that have the digit corresponding to the current rank. After this division, the elements are removed from the queues in the ascending order of the queue index (from 0 to 9), and are retained in a vector (which becomes the new sequence to be sorted).

#### Pseudocode: 
```
  find the maximum number of digits of array elements
  divisior is equal with 10
  while divisor is small than maximumNumber
   create a bucket arrays for each 0 - 9 -> queue
   get the current significant digit and push it in the desired bucket
   reconstruct the array by concatinating all the buckets
   divisior is equal to divisor * 10 -> acces the next digit
   
   return the final array
  
```

#### Complexity
* Time Complexity : O(n * K)
* Space Complexity: O(n + k)


