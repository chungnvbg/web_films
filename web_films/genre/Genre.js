class Genre {
    constructor(id, name, description, status) {
        this.id = id;
        this.name = name;
    }

    getId() {
        return this.id;
    }

    getName() {
        return this.name;
    }
}

module.exports = Genre;