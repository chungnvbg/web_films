class HomeController {
    async getHome(ctx,next) {
        let genres = await ctx.genreRepository.getAllGenre();
        let films  = await ctx.filmRepository.getAllFilm();
        ctx.render('homepage.html', {genres, films});
    }   
}

module.exports = HomeController;
