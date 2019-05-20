class FilmController {
    async getFilm(ctx) {
        ctx.render('single.html');
    }
}

module.exports = FilmController;