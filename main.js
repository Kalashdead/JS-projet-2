
const tab = [
    {
        question: "Question 1 : Quel est le développeur du jeu Rocket League? : ",
        reponses: ["A) PSYONIX", "B) EPIC GAMES", "C) UBISOFT", "D) ELECTRONIC ARTS"],
        bonnereponse: "A",
    },
    {
        question: "Question 2 : Quel est le mode de jeu principal de Rocket League? : ",
        reponses: ["A) FOOTBALL AMERICAIN", "B) FOOTBALL ASSOCIATION", "C) HOCKEY SUR GLACE", "D) BASKET-BALL"],
        bonnereponse: "B",
    },
    {
        question: "Question 3 : Quel est le nom de la voiture de départ dans Rocket League? : ",
        reponses: ["A) OCTANE", "B) DOMINUS", "C) HOT ROD", "D) ROADSTER"],
        bonnereponse:"A",
    },
    {
        question: "Question 4 : Quel est le système de jeu en ligne utilisé par Rocket League? : ",
        reponses: ["A) STEAM", "B) ORIGIN", "C) BATTLE.NET", "D) XBOX LIVE"],
        bonnereponse:"A",
    },
    {
        question: "Question 5 : Quelle est la date de sortie initiale de Rocket League? : ",
        reponses: ["A) 7 JUILLET 2015", "B) 15 AOUT 2014", "C) 22 SEPTEMBRE 2013", "D) 1er NOVEMBRE 2012"],
        bonnereponse:"A",
    },
    {
        question: "Question 6 : Quel est le nom du premier restaurant McDonald's ouvert en France en 1972? : ",
        reponses: ["A) McDonald's Champs-Élysées", "B) McDonald's Opéra", "C) McDonald's Strasbourg", "D) McDonald's Lyon"],
        bonnereponse: "A",
    }, {
        question: "Question 7 : Quel est le nom du créateur de la célèbre sauce Big Mac? : ",
        reponses: ["A) Jim Delligatti", "B) Ray Kroc", "C) Maurice McDonald", "D) René Arend"],
        bonnereponse: "A",
    }, {
        question: "Question 8 : Dans quel pays a été créé le premier McDonald's McCafé en 1993? : ",
        reponses: ["A) Australie", "B) États-Unis", "C) Canada", "D) Royaume-Uni"],
        bonnereponse: "A",
    }, {
        question: "Question 9 : Quel est le nom du programme de fidélité lancé par McDonald's en 2007? : ",
        reponses: ["A) McDonald's Rewards", "B) McPoints", "C) Happy Meal Club", "D) McDonald's Privilege"],
        bonnereponse: "B",
    }, {
        question: "Question 10 : Quel est le nom du fournisseur de frites qui a fourni les pommes de terre à McDonald's pendant plus de 50 ans? : ",
        reponses: ["A) McCain Foods", "B) Lamb Weston", "C) J.R. Simplot", "D) ConAgra Foods"],
        bonnereponse: "A",
    },
    {
        question: "Question 11 : Quel est le peintre qui a créé la célèbre toile « La Joconde »? : ",
        reponses: ["A) Léonard de Vinci", "B) Michel-Ange", "C) Raphaël", "D) Caravage"],
        bonnereponse: "A",
    }, {
        question: "Question 12 : Quel est le roman de Victor Hugo qui se déroule en 1832? : ",
        reponses: ["A) Les Misérables", "B) Notre-Dame de Paris", "C) Les Travailleurs de la mer", "D) L'Homme qui rit"],
        bonnereponse: "A",
    }, {
        question: "Question 13 : Quel est le groupe de rock britannique qui a sorti l'album « Sgt. Pepper's Lonely Hearts Club Band » en 1967? : ",
        reponses: ["A) The Rolling Stones", "B) The Who", "C) The Beatles", "D) Pink Floyd"],
        bonnereponse: "C",
    }, {
        question: "Question 14 : Quel est le philosophe grec qui a enseigné que « le tout est dans le tout »? : ",
        reponses: ["A) Platon", "B) Aristote", "C) Épicure", "D) Anaxagore"],
        bonnereponse: "D",
    }, {
        question: "Question 15 : Quel est le fleuve qui traverse la ville de Paris? : ",
        reponses: ["A) La Seine", "B) La Marne", "C) L'Oise", "D) La Loire"],
        bonnereponse: "A",
    },
]
const prompt = require("prompt-sync")();
let reponse = ""
let count = 0


for (let i = 0; i < tab.length; i++) {
    console.log(tab[i].question);
    for (let j = 0; j < tab[i].reponses.length; j++) {
        console.log(tab[i].reponses[j])
    }
    reponse = prompt("Entrez la réponse ici : ").toUpperCase();
    while (reponse != "A" && reponse != "B" && reponse != "C" && reponse != "D") {
        reponse = prompt("Erreur ! Veuillez entrez la réponse ici : ").toUpperCase();
    }
    if (reponse === tab[i].bonnereponse) {
        console.log("Bonne réponse!");
        count++
    } else {
        console.log("Mauvaise réponse!");
    }
}

console.log(`Félicitations, votre score est de ${count}/15`)