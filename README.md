# Sorting-Algorithms-Vizualizer

##  Repository Content:

 - sorting-algorithms/    - the implementation of different algorithms used for the sorting process
 - script.ts/script.js    - the files that containt the main functionality of the project
 - index.html             - the html root file of the project
 - style.css              - the file that contains the style for the project

## The idea of the project

This project represent a web application created using TypeScript for visualization of different sorting algorithms. 
Among the algorithms implemented are Bubble Sort, Insertion Sort, Merge Sort, Quick Sort, Radix Sort. Within the project,
a series of functionalities were also created, such as changing the size of the array, increasing the specific speed of sorting
 
## Engine

Pentru a compila engine-ul jocului:

### Linux: 
```
cd environment
make
```

### Windows:

```
cd environment
make.bat
```

## Rularea agentilor

In interiorul starter packages veti gasi un runGame.sh / runGame.bat, cu ajutorul carora puteti rula un meci (nu uitati sa copiati engine-ul jocului).
Mai multe detalii despre engine cli gasiti [aici](https://2016.halite.io/advanced_command_line.html).
La finalul fiecarui meci, engine-ul va genera un replay. Il puteti vizualiza [aici](https://2016.halite.io/local_visualizer.html). In caz ca doriti sa va faceti ceva mai automat, care sa analizeze replay-urile, structura unui replay se gaseste [aici](https://2016.halite.io/advanced_replay_file.html).
