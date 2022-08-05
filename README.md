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

### Bubble Sort
Implemented the simplest sorting algorithms that works by swapping between two adjacent elements, if they are not in the desired order (ascending or descending). This algorithm is not suitable for large data sets.

#### Complexity
* Time Complexity : O(n ^ 2)
* Space Complexity: O(1)
