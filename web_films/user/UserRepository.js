const User = require('./User');

class UserRepository {
    constructor(knex) {
        this.knex = knex;
    }

    async findByUsername(userName) {
        let rawUser = await this.knex.select('*').from('users').where('userName', userName);

        if(rawUser.length) {
            return new User(rawUser[0].Id, rawUser[0].userName, rawUser[0].password);
        } 

        return null;
    }
    async getById(Id) {
        let rawUser = await this.knex.select('*').from('users').where('Id', Id);

        if(rawUser.length) {
            return new User(rawUser[0].Id, rawUser[0].userName, rawUser[0].password);
        } 

        return null;
    }
}

module.exports = UserRepository;