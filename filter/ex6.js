/* Array.prototype.filter - Exercice 6

Ecrire une fonction filterOffensiveComments, qui attend deux paramètres, tous deux
des tableaux de chaînes de caractères :
1. des commentaires sur un fil d'actualité ou une vidéo.
2. une liste de mots "grossiers" ou "offensifs" à bannir

La fonction doit éliminer les commentaires contenant au moins un des mots "bannis".

Exemple d'entrée:
1. des commentaires (on est resté soft pour ne pas heurter les oreilles chastes)
[
  "Very useful tutorial, thank you so much!",
  "React is not a damn framework, it's a LIBRARY"
  "Why you put bloody kitten pictures in a tech tutorial is beyond me!",
  "Which one is better, React or Angular?",
  'There is no "better", it depends on your use case, DAMN YOU'
]
2. mots à bannir: ['bloody', 'damn']

Sortie attendue:
[
  "Very useful tutorial, thank you so much!",
  "Which one is better, React or Angular?",
]

*/


//fonction avec FILTER
filterOffensiveComments = (censor, banned) => {
  for(let i = 0; i < banned.length; i++) {
      censor.filter((sentence, index) => { 
        if (sentence.toLowerCase().includes(banned[i]))
          censor.splice(index, 1);
      });
  }
  return censor;
}

//fonction avec MAP + FILTER
filterOffensiveComments3 = (censor, banned) => {
  banned.map((element) => {
    censor.filter((sentence, index) => { 
      if (sentence.toLowerCase().includes(element))
        censor.splice(index, 1);
    });
  });
  return censor;
}

/*
const comments = [
  "Very useful tutorial, thank you so much!",
  "React is not a damn framework, it's a LIBRARY",
  "Why you put bloody kitten pictures in a tech tutorial is beyond me!",
  "Which one is better, React or Angular?",
  'There is no "better", it depends on your use case, DAMN YOU'
];
const bannedWords = ['bloody', 'damn'];
//const bannedWords = ['damn'];




console.log(filterOffensiveComments(comments, bannedWords));
*/
// Ne pas modifier l'export
module.exports = filterOffensiveComments;
