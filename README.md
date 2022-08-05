# Sorting-Algorithms-Vizualizer

## The contents of the repo:

 - sorting-algorithms/    - the sorting algorithms used for application
 - environment/         - engine-ul jocului
 - bots/                - folder cu botii pusi la dispozitie de echipa de PA

## Regulile jocului

Regulile jocului pot fi gasite [aici](https://2016.halite.io/rules_game.html)
 
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
