const User = require('./User');

class UserRepository {
    constructor(knex) {
        this.knex = knex;
    }

    async getAll() {
        let rawUsers = await this.knex.select('*').from('users');
        return rawUsers.map(rawUser => this.factoryUser(rawUser));
    }

    async findByUsername(userName) {
        let rawUser = await this.knex.select('*').from('users').where('userName', userName);
        return !!rawUser ? this.factoryUser(rawUser) : null;
    }

    async getById(Id) {
        let rawUser = await this.knex.select('*').from('users').where('Id', Id);

        if(rawUser.length) {
            return this.factoryUser(rawUser[0]);
        } 

        return null;
    }

    factoryUser(rawUserData) {
        return new User(rawUserData.Id, rawUserData.userName, rawUserData.password);
    }
}

module.exports = UserRepository;