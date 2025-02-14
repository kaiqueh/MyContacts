const { uuid } = require("uuidv4");

const contact = [
    {
        id: uuid(),
        name: "kaique",
        email: "kaique@ht.com",
        phone: "11999999999",
        category_id: uuid(),
    },
];

class concatRepository {
    findall() {
        return new Promise((resolve) => {
            resolve(contact);
        });
    }
}

module.exports = new concatRepository();
