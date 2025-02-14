const repositories = require("../repositories/ContactRepository");

class contactController {
    async index(req, res) {
        const contacts =  await repositories.findall();

        res.json(contacts);
    }

    show(req, res) {
        res.send("Hello World!🔥");
    }

    store(req, res) {
        res.send("Hello World!🔥");
    }

    update(req, res) {
        res.send("Hello World!🔥");
    }
}

module.exports = new contactController();
