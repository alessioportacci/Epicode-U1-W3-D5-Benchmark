const movies = [
  {
    Title: 'The Lord of the Rings: The Fellowship of the Ring',
    Year: '2001',
    imdbID: 'tt0120737',
    Type: 'movie',
    Poster:
      'https://m.media-amazon.com/images/M/MV5BN2EyZjM3NzUtNWUzMi00MTgxLWI0NTctMzY4M2VlOTdjZWRiXkEyXkFqcGdeQXVyNDUzOTQ5MjY@._V1_SX300.jpg',
  },

  {
    Title: 'The Lord of the Rings: The Return of the King',
    Year: '2003',
    imdbID: 'tt0167260',
    Type: 'movie',
    Poster:
      'https://m.media-amazon.com/images/M/MV5BNzA5ZDNlZWMtM2NhNS00NDJjLTk4NDItYTRmY2EwMWZlMTY3XkEyXkFqcGdeQXVyNzkwMjQ5NzM@._V1_SX300.jpg',
  },
  {
    Title: 'The Lord of the Rings: The Two Towers',
    Year: '2002',
    imdbID: 'tt0167261',
    Type: 'movie',
    Poster:
      'https://m.media-amazon.com/images/M/MV5BNGE5MzIyNTAtNWFlMC00NDA2LWJiMjItMjc4Yjg1OWM5NzhhXkEyXkFqcGdeQXVyNzkwMjQ5NzM@._V1_SX300.jpg',
  },
  {
    Title: 'Lord of War',
    Year: '2005',
    imdbID: 'tt0399295',
    Type: 'movie',
    Poster:
      'https://m.media-amazon.com/images/M/MV5BMTYzZWE3MDAtZjZkMi00MzhlLTlhZDUtNmI2Zjg3OWVlZWI0XkEyXkFqcGdeQXVyNDk3NzU2MTQ@._V1_SX300.jpg',
  },
  {
    Title: 'Lords of Dogtown',
    Year: '2005',
    imdbID: 'tt0355702',
    Type: 'movie',
    Poster:
      'https://m.media-amazon.com/images/M/MV5BNDBhNGJlOTAtM2ExNi00NmEzLWFmZTQtYTZhYTRlNjJjODhmXkEyXkFqcGdeQXVyNDk3NzU2MTQ@._V1_SX300.jpg',
  },
  {
    Title: 'The Lord of the Rings',
    Year: '1978',
    imdbID: 'tt0077869',
    Type: 'movie',
    Poster:
      'https://m.media-amazon.com/images/M/MV5BOGMyNWJhZmYtNGQxYi00Y2ZjLWJmNjktNTgzZWJjOTg4YjM3L2ltYWdlXkEyXkFqcGdeQXVyNTAyODkwOQ@@._V1_SX300.jpg',
  },
  {
    Title: 'Lord of the Flies',
    Year: '1990',
    imdbID: 'tt0100054',
    Type: 'movie',
    Poster:
      'https://m.media-amazon.com/images/M/MV5BOTI2NTQyODk0M15BMl5BanBnXkFtZTcwNTQ3NDk0NA@@._V1_SX300.jpg',
  },
  {
    Title: 'The Lords of Salem',
    Year: '2012',
    imdbID: 'tt1731697',
    Type: 'movie',
    Poster:
      'https://m.media-amazon.com/images/M/MV5BMjA2NTc5Njc4MV5BMl5BanBnXkFtZTcwNTYzMTcwOQ@@._V1_SX300.jpg',
  },
  {
    Title: 'Greystoke: The Legend of Tarzan, Lord of the Apes',
    Year: '1984',
    imdbID: 'tt0087365',
    Type: 'movie',
    Poster:
      'https://m.media-amazon.com/images/M/MV5BMTM5MzcwOTg4MF5BMl5BanBnXkFtZTgwOTQwMzQxMDE@._V1_SX300.jpg',
  },
  {
    Title: 'Lord of the Flies',
    Year: '1963',
    imdbID: 'tt0057261',
    Type: 'movie',
    Poster:
      'https://m.media-amazon.com/images/M/MV5BOGEwYTlhMTgtODBlNC00ZjgzLTk1ZmEtNmNkMTEwYTZiM2Y0XkEyXkFqcGdeQXVyMzU4Nzk4MDI@._V1_SX300.jpg',
  },
  {
    Title: 'The Avengers',
    Year: '2012',
    imdbID: 'tt0848228',
    Type: 'movie',
    Poster:
      'https://m.media-amazon.com/images/M/MV5BNDYxNjQyMjAtNTdiOS00NGYwLWFmNTAtNThmYjU5ZGI2YTI1XkEyXkFqcGdeQXVyMTMxODk2OTU@._V1_SX300.jpg',
  },
  {
    Title: 'Avengers: Infinity War',
    Year: '2018',
    imdbID: 'tt4154756',
    Type: 'movie',
    Poster:
      'https://m.media-amazon.com/images/M/MV5BMjMxNjY2MDU1OV5BMl5BanBnXkFtZTgwNzY1MTUwNTM@._V1_SX300.jpg',
  },
  {
    Title: 'Avengers: Age of Ultron',
    Year: '2015',
    imdbID: 'tt2395427',
    Type: 'movie',
    Poster:
      'https://m.media-amazon.com/images/M/MV5BMTM4OGJmNWMtOTM4Ni00NTE3LTg3MDItZmQxYjc4N2JhNmUxXkEyXkFqcGdeQXVyNTgzMDMzMTg@._V1_SX300.jpg',
  },
  {
    Title: 'Avengers: Endgame',
    Year: '2019',
    imdbID: 'tt4154796',
    Type: 'movie',
    Poster:
      'https://m.media-amazon.com/images/M/MV5BMTc5MDE2ODcwNV5BMl5BanBnXkFtZTgwMzI2NzQ2NzM@._V1_SX300.jpg',
  },
]


/*
REGOLE
- Tutte le risposte devono essere scritte in JavaScript
- Se sei in difficoltà puoi chiedere aiuto a un Teaching Assistant
- Puoi usare Google / StackOverflow ma solo quanto ritieni di aver bisogno di qualcosa che non è stato spiegato a lezione
- Puoi testare il tuo codice in un file separato, o de-commentando un esercizio alla volta
- Per farlo puoi utilizzare il terminale Bash, quello di VSCode o quello del tuo sistema operativo (se utilizzi macOS o Linux)
*/

// JS Basics

/* ESERCIZIO A
  Crea una variabile chiamata "sum" e assegnaci il risultato della somma tra i valori 10 e 20. */

  const sum = 20 + 10
  console.log("sum", sum)

/* ESERCIZIO B
  Crea una variabile chiamata "random" e assegnaci un numero casuale tra 0 e 20 (deve essere generato dinamicamente a ogni esecuzione). */

  const random = Math.random() *20
  console.log("random", random)


/* ESERCIZIO C
  Crea una variabile chiamata "me" e assegnaci un oggetto contenente le seguenti proprietà: name = il tuo nome, surname = il tuo cognome, age = la tua età.*/

  const me = {
    name: "Alessio",
    surname: "Portacci",
    age: 25
  }
  console.log("me", me)


/* ESERCIZIO D
  Crea del codice per rimuovere programmaticamente la proprietà "age" dall'oggetto precedentemente creato. */

  delete me.age
  console.log("me", me)
 

/* ESERCIZIO E
  Crea del codice per aggiungere programmaticamente all'oggetto precedentemente creato un array chiamato "skills", contenente i linguaggi di programmazione che conosci. */

  me.skills = ["C#", "Python", "Java", "C++", "MSQL", "HTML", "CSS", "Javascript"]
  console.log("me", me)


/* ESERCIZIO F
  Crea un pezzo di codice per aggiungere un nuovo elemento all'array "skills" contenuto nell'oggetto "me". */

  me.skills.push("Jquery")
  console.log("me", me)
 

/* ESERCIZIO G
  Crea un pezzo di codice per rimuovere programmaticamente l'ultimo elemento dall'array "skills" contenuto nell'oggetto "me". */

  me.skills.pop()
  console.log("me", me)
  //Anche perché Jqyery è una libreria, non un linguaggio ahahah


// Funzioni

/* ESERCIZIO 1
  Crea una funzione chiamata "dice": deve generare un numero casuale tra 1 e 6. */

  const dice = function()
  {
    return Math.floor((Math.random() *6) +1 )   //DRY!
  }
  console.log("dice,", dice())


/* ESERCIZIO 2
  Crea una funzione chiamata "whoIsBigger" che riceve due numeri come parametri e ritorna il maggiore dei due. */

  const whoIsBigger = function(n1, n2)
  {
    if(n1 > n2)
      return n1
    return n2
  }
  console.log("whoIsBigger", whoIsBigger(10, 6))


/* ESERCIZIO 3
  Crea una funzione chiamata "splitMe" che riceve una stringa come parametro e ritorna un'array contenente ogni parola della stringa.

  Es.: splitMe("I love coding") => ritorna ["I", "Love", "Coding"] */

  const splitMe = function(text)
  {
    return text.split(" ")    //DRY!
  }
  console.log("splitMe", splitMe("ciao sono un test"))


/* ESERCIZIO 4
  Crea una funzione chiamata "deleteOne" che riceve una stringa e un booleano come parametri.
  Se il valore booleano è true la funzione deve ritornare la stringa senza il primo carattere, altrimenti la deve ritornare senza l'ultimo. */

  const deleteOne = function(text, check)
  {
    if(check)
      return text.slice(1)
    return text.slice(0, -1)
  }
  console.log("deleteOne", deleteOne("CIAONE", true))
  console.log("deleteOne", deleteOne("CIAONE", false))


/* ESERCIZIO 5
  Crea una funzione chiamata "onlyLetters" che riceve una stringa come parametro e la ritorna eliminando tutte le cifre numeriche.

  Es.: onlyLetters("I have 4 dogs") => ritorna "I have dogs" */

  const numbers = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"]
  const onlyLetters = function(text)
  {
    let newText = ""
    text.split("").forEach(letter => { numbers.includes(letter)? newText += "" : newText += letter }); 
    return newText
  }

  //Oppure

  function onlyLetters2(text){
    return text.replaceAll("0", "")
               .replaceAll("1", "")
               .replaceAll("2", "")
               .replaceAll("3", "")
               .replaceAll("4", "")
               .replaceAll("5", "")
               .replaceAll("6", "")
               .replaceAll("7", "")
               .replaceAll("8", "")
               .replaceAll("9", "")
  }

  console.log(onlyLetters("c1aooo"))
  console.log(onlyLetters2("c1aooo"))


/* ESERCIZIO 6
  Crea una funzione chiamata "isThisAnEmail" che riceve una stringa come parametro e ritorna true se la stringa è un valido indirizzo email. */

  const isThisAnEmail = function(email)
  {
    if(email.includes("@") && email.includes("."))
      return true
    return false
  }

  console.log("isThisAnEmail", isThisAnEmail("alessio.portacci.s@gmail.it"))


/* ESERCIZIO 7
  Scrivi una funzione chiamata "whatDayIsIt" che ritorna il giorno della settimana corrente. */

  const giorniList = ["Lunedì", "Martedì", "Mercoledì", "Giovedì", "Venerdì", "Sabato", "Domenica"]
  const whatDayIsIt = function()
  {
    return giorniList[new Date().getDay() - 1]  //DRY! (Più o meno)
  }

  console.log("whatDayIsIt", whatDayIsIt())

/* ESERCIZIO 8
  Scrivi una funzione chiamata "rollTheDices" che riceve un numero come parametro.
  Deve invocare la precedente funzione dice() il numero di volte specificato nel parametro, e deve tornare un oggetto contenente una proprietà "sum":
  il suo valore deve rappresentare il totale di tutti i valori estratti con le invocazioni di dice().
  L'oggetto ritornato deve anche contenere una proprietà "values", contenente un array con tutti i valori estratti dalle invocazioni di dice().

  Example:
  rollTheDices(3) => ritorna {
      sum: 10
      values: [3, 3, 4]
  }
*/

//Ho cercato come calcolare i giorni, 
const rollTheDices = function(diceNumber)
{
  let diceResult = 0
  let totalSum = 0
  const dices = [] 
  for(let d = 0; d < diceNumber; d++)
  {
    diceResult = dice()
    totalSum += diceResult
    dices.push(diceResult)
  }   
  return { sum: totalSum, values: dices}
}
console.log("rollTheDices", rollTheDices(3))


/* ESERCIZIO 9
  Scrivi una funzione chiamata "howManyDays" che riceve una data come parametro e ritorna il numero di giorni trascorsi da tale data.
*/


const howManyDays = function(date)
{
  /*Uso math.abs per ottenere il valore assoluto (non ha senso dire -1 giorni)
    Genero una nuova data e imposto l'ora a 00:00:00:00 perché altrimenti viene contato
    un giorno anche nel caso si parli di due date identiche*/
  const diffTime = Math.abs(new Date().setHours(0, 0, 0, 0) - new Date(date))
  
/*Per i calcoli matematici ho usato questa soluzione trovata su StackOverflow. Spero non sia considerato barare! ^^"
  https://stackoverflow.com/questions/3224834/get-difference-between-2-dates-in-javascript?#answer-3224854
*/  
  let diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24))
  return diffDays
}
console.log("howManyDays", howManyDays("06/5/2023"))


/* ESERCIZIO 10
  Scrivi una funzione chiamata "isTodayMyBirthday" che deve ritornare true se oggi è il tuo compleanno, falso negli altri casi. */

const isTodayMyBirthday = function(date)
{
  date = new Date(date)       //Trasformo la stringa in input in una data
  let today = new Date()      //Mi prendo la data di oggi
  today.setHours(0, 0, 0, 0)  //Imposto la data di oggi a mezzanotte

  if(today.toDateString() == date.toDateString())
    return true
  return false
}
console.log("isTodayMyBirthday", isTodayMyBirthday("06/09/2023"))


// Arrays & Oggetti

// NOTA: l'array "movies" usato in alcuni esercizi è definito alla fine di questo file

/* ESERCIZIO 11
  Scrivi una funzione chiamata "deleteProp" che riceve un oggetto e una stringa come parametri; deve ritornare l'oggetto fornito dopo aver eliminato
  in esso la proprietà chiamata come la stringa passata come secondo parametro. */

  const deleteProp = function(obj, string)
  {
    delete obj[string]
    return obj
  }
  console.log("deleteProp", deleteProp({casa: "mia", pasta: "al pesto"}, "casa"))


/* ESERCIZIO 12
  Scrivi una funzione chiamata "newestMovie" che trova il film più recente nell'array "movies" fornito. */

  const newestMovie = function()
  {
    let recentYear = 0    //Qui mi segno il film più recente
    let movieYear  = 0    //Qui mi sergno mano mano la data dei film (per non convertire sia sul controllo che sull'assegnazione)
    let movieIndex        //Qui mi segno l'index del film più recente
    for(let m = 0; m < movies.length; m ++)
    {
      movieYear = parseInt(movies[m].Year)
      if(movieYear > recentYear)
      {
        recentYear = movieYear
        movieIndex = m
      }       
    }
    return movies[movieIndex]
  }
  console.log("newestMovie", newestMovie())


/* ESERCIZIO 13
  Scrivi una funzione chiamata countMovies che ritorna il numero di film contenuti nell'array "movies" fornito. */

  const countMovies = function()
  {
    return movies.length  //DRY!
  }
  console.log("countMovies", countMovies())

/* ESERCIZIO 14
  Scrivi una funzione chiamata "onlyTheYears" che crea un array con solamente gli anni di uscita dei film contenuti nell'array "movies" fornito. */

  const onlyTheYears = function()
  {
    return movies.map(movie => movie.Year)  //DRY!
  }
  console.log("onlyTheYears", onlyTheYears())


/* ESERCIZIO 15
  Scrivi una funzione chiamata "onlyInLastMillennium" che ritorna solamente i film prodotto nel millennio scorso contenuti nell'array "movies" fornito */

  const onlyInLastMillennium = function()
  {
    const newArray = []
    movies.forEach(function(movie){
      if(movie.Year[0] === "2")
        newArray.push(movie)
    })
    return newArray
  }
  console.log("onlyInLastMillennium", onlyInLastMillennium())


/* ESERCIZIO 16
  Scrivi una funzione chiamata "sumAllTheYears" che ritorna la somma di tutti gli anni in cui sono stati prodotti i film contenuti nell'array "movies" fornito. */

const sumAllTheYears = function()
{
  let sum = 0
  movies.forEach(movie => sum += parseInt(movie.Year))
  return sum
}
console.log("sumAllTheYears", sumAllTheYears())


/* ESERCIZIO 17
  Scrivi una funzione chiamata "searchByTitle" che riceve una stringa come parametro e ritorna i film nell'array "movies" fornito che la contengono nel titolo.*/

  const searchByTitle = function(title)
  {
    let selectedMovie = "404 not found"
    movies.forEach(function(movie)
    {
      if (movie.Title === title)
        selectedMovie = movie
    })
    return selectedMovie
  }
  console.log("searchByTitle", searchByTitle("The Lord of the Rings: The Fellowship of the Ring"))


/* ESERCIZIO 18
  Scrivi una funzione chiamata "searchAndDivide" che riceve una stringa come parametro e ritorna un oggetto contenente due array: "match" e "unmatch".
  "match" deve includere tutti i film dell'array "movies" fornito che contengono la stringa fornita all'interno del proprio titolo, mentre "unmatch" deve includere tutti i rimanenti. */

  const searchAndDivide = function(string)
  {
    const match = []
    const unmatch = []
    movies.forEach(function(movie)
    {
      if (movie.Title.includes(string))
        match.push(movie)
      else
        unmatch.push(movie)
    })
    return {match: match, unmatch: unmatch}
  }
  console.log("searchAndDivide", searchAndDivide("Ultron"))


/* ESERCIZIO 19
  Scrivi una funzione chiamata "removeIndex" che riceve un numero come parametro e ritorna l'array "movies" fornito privo dell'elemento nella posizione ricevuta come parametro. */

  const removeIndex = function(index)
  {      
    let moviesSpliced = [...movies]
    moviesSpliced.splice(index, 1)                     
    return moviesSpliced   
  }

  //OPPURE 

  const removeIndex2 = function(index)
  {
    const moviesLen = movies.length
    const moviesArray = [] 
    if (index > moviesLen)
      return "Out of range"
    else
      for(let i = 0; i < moviesLen; i++)
        if(i !== index)
          moviesArray.push(movies[i])
    return moviesArray
  }

  console.log("RemoveIndex", removeIndex(2))


// DOM (nota: gli elementi che selezionerai non si trovano realmente nella pagina)

//No prob, li aggiungo io 

/* ESERCIZIO 20
  Scrivi una funzione per selezionare l'elemento dotato di id "container" all'interno della pagina. */

  const getContainer = function()
  {
    return document.getElementById("container")   //DRY
  }
  console.log("getContainer", getContainer())


/* ESERCIZIO 21
  Scrivi una funzione per selezionare ogni tag <td> all'interno della pagina. */

  const getTd = function()
  {
    return document.getElementsByTagName("td")    //DRY
  }
  console.log("getTd", getTd())


/* ESERCIZIO 22
  Scrivi una funzione che, tramite un ciclo, stampa in console il testo contenuto in ogni tag <td> all'interno della pagina. */

  const tdContentNotDRY = function()
  {
    const tds = document.getElementsByTagName("td")
    Array.from(tds).forEach(td => console.log(td))  
  }

  const tdContentNotVeryDRY = function()
  {
    Array.from(document.getElementsByTagName("td")).forEach(td => console.log(td))  //Hard to read but DRY
  }

  const tdContent = function()
  {
    document.querySelectorAll("td").forEach(td => console.log(td))  //DRY
  }

  tdContent()


/* ESERCIZIO 23
  Scrivi una funzione per aggiungere un background di colore rosso a ogni link all'interno della pagina.*/

  const redLinksNotDRY = function()
  {
    const as = document.getElementsByTagName("a")
    Array.from(as).forEach(a => a.style.backgroundColor = "red")
  }

  const redLinksNotVeryDRY = function()
  {
    Array.from(document.getElementsByTagName("a")).forEach(a => a.style.backgroundColor = "red") //Hard to read but DRY
  }

  const redLinks = function()
  {
    document.querySelectorAll("a").forEach(a => a.style.backgroundColor = "red") //DRY!
  }
  
  redLinks()

/* ESERCIZIO 24
  Scrivi una funzione per aggiungere un nuovo elemento alla lista non ordinata con id "myList". */

const addLi = function()
{
  const ul = document.getElementById("myList")
  const li = document.createElement("li")
  li.innerText = "?"
  ul.appendChild(li)
}
addLi()


/* ESERCIZIO 25
  Scrivi una funzione per svuotare la lista non ordinata con id "myList".
*/

const removeLis = function()
{
  document.getElementById("myList").innerHTML = ""  //DRY
}
//removeLis()

//Oppure

const removeLis2 = function()
{
  const ul =  document.getElementById("myList")
  while(ul.hasChildNodes())
    ul.removeChild(ul.lastChild)
}
removeLis2()


/* ESERCIZIO 26
  Scrivi una funzione per aggiungere ad ogni tag <tr> la classe CSS "test" */

  const addCSSToTrNotDRY = function()
  {
    const trs = document.getElementsByTagName("tr")
    Array.from(trs).forEach(tr => tr.classList.add("test"))
  }

  const addCSSToTr = function()
  {
    const trs = document.getElementsByTagName("tr")
    Array.from(document.getElementsByTagName("tr")).forEach(tr => tr.classList.add("test"))
  }

  addCSSToTr()

// [EXTRA] JS Avanzato

/* ESERCIZIO 27
  Crea una funzione chiamata "halfTree" che riceve un numero come parametro e costruisce un mezzo albero di "*" (asterischi) dell'altezza fornita.

  Esempio:
  halfTree(3)

  *
  **
  ***

*/

const halfTree = function(height)
{
  let tree = ""
  //Semplice for per le righe che aggiunge gli asterischi
  for(let i = 1; i <= height; i++)
  {
    tree += "*".repeat(i)
    tree += "\n"
  }
  return tree
}

console.log(halfTree(3))

/* ESERCIZIO 28
  Crea una funzione chiamata "tree" che riceve un numero come parametro e costruisce un albero di "*" (asterischi) dell'altezza fornita.

  Esempio:
  tree(3)

    *
   ***
  *****

*/

const tree = function(height)
{
  let tree = ""
  /*Ho bisogno di sapere quanti asterischi deve avere a sinistra l'asterisco
    centrale dell'ultima riga per calcolarmi gli spazi vuoti (Se l'altezza è di 1, deve rimanere 1)*/
  const space = height > 1 ? height -1: 0
  let currentSpace = 0
  for(let i = 0; i < height; i++)
  {
    /* Gli spazi a sinistra dell'attuale riga sono uguali agli spazi dell'ultima MENO
       il numero di asterischi che devo mettere*/ 
    currentSpace = space - i 
    /* Adesso aggiungo gli spazi vuoti ed il numero di asterischi; ovvero il numero 
       di riga * 2 + quello centrale (le righe iniziano da 0, così la prima riga ne avrà uno solo*/ 
    tree += " ".repeat(currentSpace) + "*".repeat((i* 2) +1) + "\n"
  }
  return tree
}
console.log(tree(10))


/* ESERCIZIO 29
  Crea una funzione chiamata "isItPrime" che riceve un numero come parametro e ritorna true se il numero fornito è un numero primo. */

const isItPrime = function(number)
{
  /*Inizio da 2 così non controllo su 1 (che sarà sempre vero) e 
  mi fermo prima di raggiungere il mio numero (che sarà sempre vero) */
  for(let i = 2; i < number; i++)
    if(number % i === 0)
      return false
  return true
}


console.log("isItPrime", isItPrime(13))



/* Questo array viene usato per gli esercizi. Non modificarlo. */
//L'ho spostato in cima 🤭
