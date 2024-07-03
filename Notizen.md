# Game - Schiffe versenken

## 1. Spielbrett erstellen

/ 1 2 3 4 5 6 7 8 9 10 
A ~ ~ ~ ~ ~ ~ ~ ~ ~ ~
B ~ ~ ~ ~ ~ ~ ~ ~ ~ ~
C ~ ~ ~ ~ ~ ~ ~ ~ ~ ~
D ~ ~ ~ ~ ~ ~ ~ ~ ~ ~
E ~ ~ ~ ~ ~ ~ ~ ~ ~ ~
F ~ ~ ~ ~ ~ ~ ~ ~ ~ ~
G ~ ~ ~ ~ ~ ~ ~ ~ ~ ~
H ~ ~ ~ ~ ~ ~ ~ ~ ~ ~
I ~ ~ ~ ~ ~ ~ ~ ~ ~ ~
J ~ ~ ~ ~ ~ ~ ~ ~ ~ ~

```js
board: [
//    0    1    2    3    4    5    6    7    8    9
    ['~', '~', '~', '~', '~', '~', '~', '~', '~', '~'],  // A  Index 0
    ['~', '~', '~', '~', '~', '~', '~', '~', '~', '~'],  // B        1
    ['~', '~', '~', '~', '~', '~', '~', '~', '~', '~'],  // C        2
    ['~', '~', '~', '~', '~', '~', '~', '~', '~', '~'],  // D        3
    ['~', '~', '~', '~', '~', '~', '~', '~', '~', '~'],  // E        4
    ['~', '~', '~', '~', '~', '~', '~', '~', '~', '~'],  // F        5
    ['~', '~', '~', '~', '~', '~', '~', '~', '~', '~'],  // G        6 
    ['~', '~', '~', '~', '~', '~', '~', '~', '~', '~'],  // H        7
    ['~', '~', '~', '~', '~', '~', '~', '~', '~', '~'],  // I        8
    ['~', '~', '~', '~', '~', '~', '~', '~', '~', '~'],  // J        9
]
```

Schiffe sollen zufällig plaziert werden Länge mit 3 Feldern horizontal oder vertikal.

- Treffer mit "X" darstellen.
- keine Treffer, Versenker mit "o" darstellen
- jeder Versuch wird gezählt egal ob man richtig oder falsche Eingaben macht.
- das Spielfeld hat insgesammt 100 Felder umd die schwierigkeit zu erhöhen hat man die hälfte an Versuchen (50).
- jeder Treffer gibt einen Punkt
- am Ende werden Punkte (Treffer) mit der Anzahl der Restversuche multipliziert