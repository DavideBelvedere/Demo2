export class Character {
    type: string;
    name: string;
    age: number;
    constructor(type: string="", name: string="", age: number = 0) {
        this.type = type;
        this.name = name;
        this.age = age;
    }
}