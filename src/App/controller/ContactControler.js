const repositories = require("../repositories/ContactRepository");

class contactController {
    async index(req, res) {
        const contacts = await repositories.findall();

        res.json(contacts);
    }

    async show(req, res) {
        const { id } = req.params;

        const contact = await repositories.findbyId(id);

        if(!contact) {
            return res.status(404).json({ error: "Contact not found" });
        }

        return res.json(contact);
    }

    store(req, res) {
        res.send("Hello World!🔥");
    }

    update(req, res) {
        res.send("Hello World!🔥");
    }

    async delete(req, res) {

        const { id } = req.params;

        const contact = await repositories.findbyId(id);
        console.log(contact)

        if(!contact) {
            return res.status(404).json({ error: "Contact not found" });
        }

        await repositories.delete(id);
        return res.sendStatus(204);
    }
}

module.exports = new contactController();
