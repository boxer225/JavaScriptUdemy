"use strict";


const personalMovieDB = {
    count: 0,
    movies: {},
    actors: {},
    genres: [],
    private: true,
    start: function() {
        this.count = +prompt('Сколько фильмов вы уже посмотрели?', '');
    while (this.count == '' || this.count == null || isNaN(this.count)) {
        this.count = +prompt('Сколько фильмов вы уже посмотрели?', '');
    }
    },
    writeYourGenres: function() {
        for (let i = 0; i < 1; i++) {
            let genres = prompt('Введите ваши любимые жанры через запятую').toLocaleLowerCase();

            if (genres === '' || genres === null) {
                console.log('Вы ввели некорректные данные или не ввели их вовсе');
                i--;
            }
            else {
                personalMovieDB.genres = genres.split(', ');
                personalMovieDB.genres.sort();
            }
        }
        personalMovieDB.genres.forEach((item, i) => {
            console.log(`Любимый жанр ${i+1} - это ${item}`);
        } );
    },

rememberMyFilms: function() {
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
},
detectPersonalLevel: function() {
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
},
toggleVisibleMyDB: function() {
    if (personalMovieDB.private === false) {
        personalMovieDB.private = true;
    }
    else if (personalMovieDB.private === true) {
        personalMovieDB.private = false;
    }
},
showMyDB: function(callback) {
    callback();
    if (personalMovieDB.private === false) {
        console.log(personalMovieDB);
    }
}
};

personalMovieDB.start();

personalMovieDB.writeYourGenres();

personalMovieDB.rememberMyFilms();

personalMovieDB.detectPersonalLevel();

personalMovieDB.showMyDB(personalMovieDB.toggleVisibleMyDB);

