class GenreController {

    async getGenreById(ctx, next) {
        let nameGenre = ctx.genreRepository.findGenreById(ctx.params.id);
        ctx.render('genres.html', { genres, nameGenre });
    }
}

module.exports = GenreController;