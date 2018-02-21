import { Character } from "./character";

export class ListService {
    private items: Character[] = [
        new Character(1,'cattivo', 'ursula', 69),
        new Character(2,'buono', 'superman', 12),
        new Character(3,'cattivo')
    ];
    getCharacterList(): Character[] {
        
        return this.items;
    }
    getCharacterById(id:number): Character{
        for(let character of this.items){
            if(character.id==id){
                return character;
            }
        }
        return null;
    }
}