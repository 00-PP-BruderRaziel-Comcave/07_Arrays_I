"use strict";

/* Die Satzbau-Maschine | Arrays */

/**
 *   THEORIE
 * 
 */

/*** 02. Theorie: Array */
let arr;
// arr = new Array();  // Konstruktor-Schreibweise
arr = [];   // Literal-Schreibweise
arr = [2,7,11,4,8,10];

output(arr);
output(arr.length); //Anzahl der Elemente
output(arr[0]);     // Index 0 (1. Position im Array)
output(arr[4]);     // Letzte Position / konkret
output(arr[arr.length-1]);

/**
 *   PRAXIS
 * 
 */


/*** 01. Funktionalität mit Einzelparametern */
// --> "Ich bin Max Mütze."
// output(getSentence("Ich","bin","Max","Mütze"));
// output(getSentence("Ich","bin","die","coole","Maxine","Mützerich"));
function getSentence(word1,word2,word3,word4,word5,word6) {
    const GAP = " ";
    const PUNCT = ".";
    let str =   word1 + GAP +
                word2 + GAP +
                word3 + GAP +
                word4 + GAP +
                word5 + GAP +
                word6 +
                PUNCT;

    return str;
}




// Modul: Ausgabe in Konsole : Test
// output("hi"); 
function output(outputStr) {
    console.log(outputStr);
}


