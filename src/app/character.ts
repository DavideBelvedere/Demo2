export class Character {
    type: string;
    name: string;
    age: number;
    id: number;
    constructor(id: number, type: string = "", name: string = "", age: number = 0) {
        this.type = type;
        this.name = name;
        this.age = age;
        this.id = id;
    }

}