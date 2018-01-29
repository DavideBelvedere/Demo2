import { Character } from "./character";

export class ListService {
    getCharacterList(): Character[] {
        let items: Character[] = [];
        items.push({ type: 'cattivo', name: 'ursula', age: 69 });
        items.push(new Character('cattivo', 'ursula', 69));
        items.push(new Character('buono', 'superman', 12));
        items.push(new Character('cattivo'));
        return items;
    }
}