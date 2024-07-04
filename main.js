import rls from "readline-sync";

const grafik1 = `


$$$$$$\\             $$\\       $$\\  $$$$$$\\   $$$$$$\\                                                                              $$\\                           
$$  __$$\\           $$ |      \\__|$$  __$$\\ $$  __$$\\                                                                             $$ |                          
$$ /  \\__| $$$$$$$\\ $$$$$$$\\  $$\\ $$ /  \\__|$$ /  \\__|$$$$$$\\        $$\\    $$\\  $$$$$$\\   $$$$$$\\   $$$$$$$\\  $$$$$$\\  $$$$$$$\\  $$ |  $$\\  $$$$$$\\  $$$$$$$\\  
\\$$$$$$\\  $$  _____|$$  __$$\\ $$ |$$$$\\     $$$$\\    $$  __$$\\       \\$$\\  $$  |$$  __$$\\ $$  __$$\\ $$  _____|$$  __$$\\ $$  __$$\\ $$ | $$  |$$  __$$\\ $$  __$$\\ 
\\____$$\\ $$ /       $$ |  $$ |$$ |$$  _|    $$  _|   $$$$$$$$ |       \\$$\\$$  / $$$$$$$$ |$$ |  \\__|\\$$$$$$\\  $$$$$$$$ |$$ |  $$ |$$$$$$  / $$$$$$$$ |$$ |  $$ |
$$\\   $$ |$$ |      $$ |  $$ |$$ |$$ |      $$ |     $$   ____|        \\$$$  /  $$   ____|$$ |       \\____$$\\ $$   ____|$$ |  $$ |$$  _$$<  $$   ____|$$ |  $$ |
\\$$$$$$  |\\$$$$$$$\\ $$ |  $$ |$$ |$$ |      $$ |     \\$$$$$$$\\          \\$  /   \\$$$$$$$\\ $$ |      $$$$$$$  |\\$$$$$$$\\ $$ |  $$ |$$ | \\$$\\ \\$$$$$$$\\ $$ |  $$ |
\\______/  \\_______| \\__|  \\__|\\__|\\__|      \\__|      \\_______|          \\_/     \\_______|\\__|      \\_______/  \\_______|\\__|  \\__|\\__|  \\__| \\_______|\\__|  \\__|
                                                                                                                                                               


****************************************************************************************************************************************************************
*                                                                                                                                                              *
*                                                                                                                                                              *
*                                                                                         | _.-.___/)                                                          *
*                                                                                         +[__===_==/                                                          *
*                                                                                         |                                                        _\\/_        *
*                    __/___                                                                . '                                                     //o\\   _\\/_ *
*              _____/______|                                                             -                                                           |    /o\\\\ *
*      _______/_____\\_______\\_____                                         <--=   . . '                                                         ,---'|"'"-"-|-,*
*      \\              < < <       |                                                                                                            /            |  *
*~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~*
*   ~    ~          ~     ~     ~        ~ ~ ~    ~     ~       ~~          ~      ~ ~                 ~  ~            ~             ~  ~   ~  ~   ~~ ~      ~ *
*     ~ ~  ~    ~     ~      ~ ~  ~       ~           ~    ~   ~       ~ ~            ~    ~  ~           ~   ~  ~    ~  ~     ~   ~  ~          ~   ~    ~ ~  *
*         ~ ~ ~           ~~             ~  ~    ~          ~             ~    ~ ~                 ~           ~          ~           ~       ~~        ~      *
****************************************************************************************************************************************************************
`;
const grafikInfo = `
     __________________________________________________    ___________________________________________________
 ___/                                               2   \\ /   3                                               \\_____
/| ----------------------------------------------------- |                                                       |\\\\
||| ---------------------------------------------------- |                                                       |||
||| ---------------------------------------------------- |                                                       |||
||| ---------------------------------------------------- |  -> Es befinden sich 3 Schiffe auf dem Spielfeld.     |||
||| ---------------------------------------------------- |                                                       |||
||| ---------------------------------------------------- |  -> Die Größe bzw. Länge der Schiffe sind: entweder   |||
||| ---------------------------------------------------- |     3 Felder horizontal oder 3 Felder vertikal.       |||
||| ---------------------------------------------------- |                                                       |||
||| --------                                ------------ |  -> Ein Treffer wird mit "X" dargestellt.             |||
||| --------        Informationen           ------------ |     Kein Treffer mit "o".                             |||
||| --------                                ------------ |                                                       |||
||| --------            ____                ------------ |  -> Du hast 50 Schuss, somit 50 Versuche.             |||
||| --------           /  __\\               ------------ |                                                       |||
||| --------           \\( oo                ------------ |  -> Je weniger Versuche du benötigst um so höher      |||
||| --------           _\\_o/                ------------ |     ist deine Punktzahl.                              |||
||| --------           / \\|/ \\              ------------ |                                                       |||
||| --------          / / __\\ \\_            ------------ |  -> Gibst du falsche Werte ein, zählt dieses als      |||
||| --------         \\ \\|   |__/_)          ------------ |     Versuch!                                          |||
||| --------          \\/_)  |               ------------ |                                                       |||
||| --------           ||___|               ------------ |  -> Ebenso wenn du ein bereits beschossenes Feld      |||
||| --------           | | |                ------------ |     erneut auswählst!                                 |||
||| --------           | | |                ------------ |                                                       |||
||| --------           |_|_|_               ------------ |  -> Einzugeben sind die Koordinaten um ein Feld       |||
||| --------           [__)__)              ------------ |     zu definieren, wie z.B. A1, A5, D6, I10 usw.      |||
||| ---------------------------------------------------- |                                                       |||
||| ---------------------------------------------------- |                                                       |||
||| ---------------------------------------------------- |                                                       |||
||| ---------------------------------------------------- |                                                       |||
||| ---------------------------------------------------- |                                                       |||
||| ---------------------------------------------------- |                                                       |||
||| ---------------------------------------------------- |                                                       |||
|||____________________________________________________  |  _____________________________________________________|||
L/__________________________________/------------------\\\\_//------------------\\___________________________________\\J

`;

console.log(`Hallo hier ist mein Spiel:\n${grafik1}\n\n`);

// Spielbrett erstellen
function createGameArea() {
    const board = [];
    const rows = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J"];
    const columns = 10;
    const header = ["/"];
    
    for (let i = 1; i <= columns; i++) {
        header.push(i.toString());
    }
    board.push(header);

    for (let i = 0; i < rows.length; i++) {
        let row = [rows[i]];
        for (let j = 0; j < columns; j++) {
            row.push("~");
        }
        board.push(row);
    }

    return board;
};

// Zur Darstellung in der Console, Umwandlung des Spielbretts in ein String
function convertToString(gameArea) {
    return gameArea.map(row => row.join(" ")).join("\n");
};


// Schiffe platzieren
function placeShip(board) {
    const rows = 10;
    const columns = 10;
    const ships = 3;
    const shipLength = 3;
    
    for (let setShip = 0; setShip < ships; setShip++) {
        let shipPlaced = false;
        let attempt = 0;
        let maxAttempts = 100;

        for (attempt = 0; attempt < maxAttempts && !shipPlaced; attempt++) {
            let vertical = Math.random() < 0.5;
            let row;
            let col;

            // Überprüfung ob die Felder frei sind, wenn ja dann Schiffe platzieren, erst vertical wenn nicht dann horizontal
            if (vertical) {
                row = Math.floor(Math.random() * (rows - shipLength + 1));
                col = Math.floor(Math.random() * columns);
                if (board[row + 1][col + 1] === "~" && board[row + 2][col + 1] === "~" && board[row + 3][col + 1] === "~") {
                    board[row + 1][col + 1] = "#";
                    board[row + 2][col + 1] = "#";
                    board[row + 3][col + 1] = "#";
                    shipPlaced = true;
                }
            } else {
                row = Math.floor(Math.random() * rows);
                col = Math.floor(Math.random() * (columns - shipLength + 1));
                if (board[row + 1][col + 1] === "~" && board[row + 1][col + 2] === "~" && board[row + 1][col + 3] === "~") {
                    board[row + 1][col + 1] = "#";
                    board[row + 1][col + 2] = "#";
                    board[row + 1][col + 3] = "#";
                    shipPlaced = true;
                }
            }
        }
    }
};

// Eingabe des Spielers überprüfen und auswerten

function checkAttack(board, gameArea, userInput) {
    const rows = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J"];
    const row = rows.indexOf(userInput.charAt(0).toUpperCase());
    const col = parseInt(userInput.slice(1)) - 1;

    if (row === -1 || isNaN(col) || col < 0 || col >= 10) {
        return `invalid`;
    }

    if (board[row + 1][col + 1] === "#") {
        board[row + 1][col + 1] = "X";
        gameArea[row + 1][col +1] = "X";
        return `hit`
    } else if (board[row + 1][col + 1] === "~") {
        board[row + 1][col + 1] = "o";
        gameArea[row + 1][col + 1] = "o";
        return `miss`
    } else {
        return `already`;
    }
};


// Spielstart -----------------------------------------------------------------

function startGame(playerName) {
    const gameArea = createGameArea();
    const hiddenGameArea = createGameArea();
    placeShip(hiddenGameArea);

    console.clear();
    console.log(`\n${grafik1}\n\nSuper! Lass uns anfangen.\n\n\n\n${convertToString(gameArea)}\n`);


    // Interaktion mit Usereingaben

    let hits = 0;
    let attempts = 0;
    let maxAttempts = 50;

    while (hits < 9 && attempts < maxAttempts) {
        console.log(`\nVerbleibende Munition: ${maxAttempts - attempts}\n`);
        let userInput = rls.question(`\nBitte gib deine gewünschte Zielkoordinate ein:\n> `);
        let result = checkAttack(hiddenGameArea, gameArea, userInput);
        attempts++;
        console.clear();

        if (result === `hit`) {
            console.log(`\n${grafik1}\n\nTreffer!\nWeiter so. Du erhälst einen Punkt.\n`);
            hits++;
        } else if (result === `miss`) {
            console.log(`\n${grafik1}\n\nFehlschuss! Leider kein Treffer.\n\n`);
        } else if (result === `already`) {
            console.log(`\n${grafik1}\n\nDieses Feld hast du bereits getroffen!\n\n`);
        } else {
            console.log(`\n${grafik1}\n\nUngültige Koordinate! Versuche es erneut.\n\n`);
        }
        console.log(`\n${convertToString(gameArea)}\n`);
        // console.log(`\nAktueller Stand:\n\n${convertToString(hiddenGameArea)}\n`); // Dies dient nur zur Überprüfung!!!
    };


    // Punke, Auswertung des Spiels

    let remainingAttempts = maxAttempts - attempts;
    let score = (remainingAttempts > 0) ? hits * remainingAttempts : hits;

    if (hits === 9) {
        console.log(`\nHerzlichen Glückwunsch, ${playerName}! Du hast alle Schiffe versenkt.`);
        console.log(`
+++++++++++++++++++++++++++++++++++++++++++++++
        Deine Punktzahl beträgt: ${score}      
+++++++++++++++++++++++++++++++++++++++++++++++
`);
        
    } else {
        console.log(`\nSpiel vorbei. Du hast leider keine Munition mehr.`);
        console.log(`
+++++++++++++++++++++++++++++++++++++++++++++++
        Deine Punktzahl beträgt: ${score}      
+++++++++++++++++++++++++++++++++++++++++++++++
`);
        console.log(`\n\nDie Auflösung: \n\n${convertToString(hiddenGameArea)}`);
    }
    return score;
};

// Programmschleife

console.clear();
console.log(`${grafik1}\n\nWillkommen zum Spiel Schiffe versenken!\n`);
const inputName = rls.question(`Wie ist dein Name?\n> `);
const playerName = inputName[0].toUpperCase() + inputName.slice(1).toLowerCase();

console.clear();
console.log(`\nHallo ${playerName}, bevor es losgeht, hier ein paar Infos für dich:\n${grafikInfo}\nHast du die Spielregeln gelesen und verstanden? Dann lass uns beginnen.\n`);
let ready = rls.question(`${playerName}, bist du bereit? (ja/nein)\n> `);

while (ready.toLowerCase() !== "ja") {
    console.log(`\nOK, ich warte noch auf deine Bestätigung.\nSolltest du dich vertippt haben dann gib erneut "ja" ein wenn du bereit bist.\n`);
    ready = rls.question(`${playerName}, bist du bereit? (ja/nein)\n> `);
};

let totalScore = 0;

while(true) {
    totalScore += startGame(playerName);
    let playAgain = rls.question(`\n\n${playerName}, möchtest du eine neue Runde spielen? (ja/nein)\n> `);
    while (playAgain.toLowerCase() !== "ja" && playAgain.toLowerCase() !== "nein") {
        console.log(`Hoppla, vermutlich hast du dich vertippt. Bitte antworte mit "ja" oder "nein".\n`);
        playAgain = rls.question(`\n${playerName}, möchtest du eine neue Runde spielen? (ja/nein)\n> `);
    }
    if (playAgain.toLowerCase() === "nein"){
        console.clear();
        console.log(`
Vielen Dank fürs Spielen, ${playerName}!

++++++++++++++++++++++++++++++++++++++++++++++++++
    Deine Gesamtpunktzahl beträgt: ${totalScore}.      
++++++++++++++++++++++++++++++++++++++++++++++++++

Auf Wiedersehen!\n\n`);
        break;
    }
};