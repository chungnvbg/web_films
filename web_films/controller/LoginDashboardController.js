class LoginDashboardController {

    async getLogin(ctx) {
        if (ctx.authenticator.check()) {
            return ctx.redirect('/dashboard');
        }

        ctx.render('Admin/pages/login.html', true);
    }

    async postLogin(ctx, next) {
        const {userName, password} = ctx.request.body;
        try {
            let user = await ctx.authenticator.attempt(userName, password);
            ctx.authenticator.login(user);
            ctx.redirect('/dashboard');

        } catch(e) {
            return ctx.redirect('/login1');
        }
    }
}

module.exports = LoginDashboardController;