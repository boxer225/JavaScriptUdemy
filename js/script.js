"use strict";

const numberOfFilms = +prompt('Сколько фильмов вы уже посмотрели?', '');


const personalMovieDB = {
    count: numberOfFilms,
    movies: {},
    actors: {},
    genres: [],
    private: false
};

let i =0;

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


console.log(personalMovieDB);