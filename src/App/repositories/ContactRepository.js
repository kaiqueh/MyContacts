const { uuid } = require("uuidv4");

let contact = [
    {
        id: uuid(),
        name: "kaique",
        email: "kaique@ht.com",
        phone: "11999999999",
        category_id: uuid(),
    },
    {
        id: uuid(),
        name: "teste",
        email: "teste@ht.com",
        phone: "11999111999999",
        category_id: uuid(),
    },
];

class concatRepository {
    findall() {
        return new Promise((resolve) => {
            resolve(contact);
        });
    }
    findbyId(id) {
        return new Promise((resolve) =>
            resolve(contact.find((contact) => contact.id === id))
        );
    }
    findByEmail(email) {
        return new Promise((resolve) =>
            resolve(contact.find((contact) => contact.email === email))
        );
    }
    delete(id) {
        return new Promise((resolve) => {
            contact = contact.filter((contact) => contact.id !== id);
            resolve();
        });
    }
    createcontact({ name, email, phone, category_id }) {
        return new Promise((resolve) => {
            const newContact = {
                id: uuid(),
                name,
                email,
                phone,
                category_id,
            };
            contact.push(newContact);
            resolve();
        });
    }
    updatecontact( id,{ name, email, phone, category_id }) {
        return new Promise((resolve) => {
            const newContact = {
                id,
                name,
                email,
                phone,
                category_id,
            };
            contact = contact.map((contact) =>
                contact.id === id ? newContact : contact
            );
            resolve(newContact);
        });
    }
}

module.exports = new concatRepository();
