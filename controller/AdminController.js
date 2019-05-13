class AdminController {
    async getInfoAdmin(ctx, next) {
         let admins = await ctx.userRepository.getAll();
         ctx.render('cards.html', {admins});
     }
 
 }
 
 module.exports = AdminController;