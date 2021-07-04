"use strict";

const numberOfFilms = +prompt('Сколько фильмов вы уже посмотрели?', '');

const personalMovieDB = {
    count: numberOfFilms,
    movies: {},
    actors: {},
    genres: [],
    private: false
};

 
const firstQuestions = prompt('Один из последних просмотренных фильмов?', ''),
secondQuestions = +prompt('На сколько оцените его?', ''),
c = prompt('Один из последних просмотренных фильмов?', ''),
d = +prompt('На сколько оцените его?', '');

personalMovieDB.movies[firstQuestions] = secondQuestions;
personalMovieDB.movies[c] = d; 

console.log(personalMovieDB);