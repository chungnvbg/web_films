class HomeController {
    async getHome(ctx, next) {
        let nameGenre = await ctx.genreRepository.getAllGenre();
        ctx.render('homepage.html', {nameGenre});
    }
}

module.exports = HomeController;
