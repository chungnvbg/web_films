class LoginController {

    async getLogin(ctx) {
        if (ctx.authenticator.check()) {
            return ctx.redirect('/dashboard');
        }

        ctx.render('login.html', true);
    }

    async postLogin(ctx, next) {
        const {userName, password} = ctx.request.body;
        try {
            let user = await ctx.authenticator.attempt(userName, password);
            ctx.authenticator.login(user);
            ctx.render('/dashboard');

        } catch(e) {
            return ctx.render('login.html');
        }
        
    }
}

module.exports = LoginController;