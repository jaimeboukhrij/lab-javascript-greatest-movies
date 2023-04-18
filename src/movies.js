// Iteration 1: All directors? - Get the array of all directors.
// _Bonus_: It seems some of the directors had directed multiple movies so they will pop up multiple times in the array of directors.
// How could you "clean" a bit this array and make it unified (without duplicates)?
function getAllDirectors(moviesArray) {
    const moviesArrayCopi = JSON.parse(JSON.stringify(moviesArray))

    const moviArrayMap = moviesArrayCopi.map(eachFilm => {
        return eachFilm.director
    })
    return moviArrayMap
}

// Iteration 2: Steven Spielberg. The best? - How many drama movies did STEVEN SPIELBERG direct?
function howManyMovies(moviesArray) {
    const moviesDramaSpie = moviesArray.filter(eachFilm => {
        return eachFilm.director == 'Steven Spielberg' && eachFilm.genre.includes("Drama")
    })

    return moviesDramaSpie.length
}


// Iteration 3: All scores average - Get the average of all scores with 2 decimals
function scoresAverage(moviesArray) {
    if (!moviesArray.length && moviesArray == "") {
        return 0
    }
    const moviesArrayFinal = moviesArray.reduce((acc, eachFilm) => {
        if (!eachFilm.score) {

            eachFilm.score = 0
        }
        const total = acc + eachFilm.score;

        return total

    }, 0)

    return + (moviesArrayFinal / moviesArray.length).toFixed(2)
}

// Iteration 4: Drama movies - Get the average of Drama Movies
function dramaMoviesScore(moviesArray) {
    const moviesDrama = moviesArray.filter(eachFilm => {
        return eachFilm.genre.includes("Drama")
    })

    if (moviesDrama.length == 0) {
        return 0
    }
    const avMoviesDrama = moviesDrama.reduce((acc, eachFilm) => {

        const total = acc + eachFilm.score
        return total
    }, 0)

    return + (avMoviesDrama / moviesDrama.length).toFixed(2)
}

// Iteration 5: Ordering by year - Order by year, ascending (in growing order)
function orderByYear(moviesArray) {
    const moviesArrayCopi = JSON.parse(JSON.stringify(moviesArray))


    moviesArrayCopi.sort((x, y) => x.title.localeCompare(y.title));
    moviesArrayCopi.sort((x, y) => x.year - y.year)

    console.log(moviesArrayCopi)

    return moviesArrayCopi



}

// Iteration 6: Alphabetic Order - Order by title and print the first 20 titles
function orderAlphabetically(moviesArray) {

    const moviesArrayCopi = JSON.parse(JSON.stringify(moviesArray))

    moviesArrayCopi.sort((x, y) => x.title.localeCompare(y.title));

    const moviesArrayCopiMap = moviesArrayCopi.map(eachFilm => {
        return eachFilm.title
    })



    if (moviesArrayCopiMap.length > 20) {
        moviesArrayCopiMap.splice(20, moviesArrayCopiMap.length)



    }

    return moviesArrayCopiMap
}

// BONUS - Iteration 7: Time Format - Turn duration of the movies from hours to minutes
function turnHoursToMinutes(moviesArray) {
    const moviesArrayCopi = JSON.parse(JSON.stringify(moviesArray))

    moviArrayMap = moviesArrayCopi.filter(eachFilm => {
        const numbers = ["0123456789"]
        for (i = 0; i < eachFilm.length; i++) {
            if (numbers.includes(eachFilm[i])) {
                return eachFilm[i]
            }
        }

    })

}

// BONUS - Iteration 8: Best yearly score average - Best yearly score average
function bestYearAvg(moviesArray) { }
