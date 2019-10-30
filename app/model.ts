export class Model {
    user;
    items;

    constructor() {
        this.user = "Eray";
        this.items = [
            new toDoItem("Kahvalti", false),
            new toDoItem("Spor", true),
            new toDoItem("Kitap Okuma", false),
            new toDoItem("Sinema", false),
        ];
    }
}

export class toDoItem {
    description;
    action;

    constructor(description, action) {
        this.description = description;
        this.action = action;
    }
}