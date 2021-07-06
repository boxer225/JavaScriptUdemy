"use strict";

let numberOfFilms;

function start() {
    numberOfFilms = +prompt('Сколько фильмов вы уже посмотрели?', '');
    while (numberOfFilms == '' || numberOfFilms == null || isNaN(numberOfFilms)) {
        numberOfFilms = +prompt('Сколько фильмов вы уже посмотрели?', '');
    }
}

start();

const personalMovieDB = {
    count: numberOfFilms,
    movies: {},
    actors: {},
    genres: [],
    private: false
};


function writeYourGenres() {
    for (let i = 0; i < 3; i++) {
        personalMovieDB.genres[i] = prompt(`Ваш любимый жанр под номером ${i+1}`, '');
    }
}

writeYourGenres();

function rememberMyFilms () {
    let i = 0;
    
    do {
        const firstQuestions = prompt('Один из последних просмотренных фильмов?', ''),
        secondQuestions = +prompt('На сколько оцените его?', '');
        
        if ((firstQuestions != null) && (secondQuestions != null) &&  
         (firstQuestions != '') && (firstQuestions.length < 50)){
            personalMovieDB.movies[firstQuestions] = secondQuestions;
         }
         else {
             i--;
         }
         i++;
        } while (i < 2);
}

rememberMyFilms();


function detectPersonalLevel() {
    if (personalMovieDB.count < 10) {
        alert('Просмотрено довольно мало фильмов!');
    }
    else if ((personalMovieDB.count >= 10) && (personalMovieDB.count <= 30)) {
        alert('Вы классический зритель!');
    }
    else if (personalMovieDB.count > 30) {
        alert('Вы киноман!');
    }
    else {
        alert ('Произошла ошибка!');
    }
}

detectPersonalLevel();

function showMyDB() {
    if (personalMovieDB.private === false) {
        console.log(personalMovieDB);
    }
}

showMyDB();

