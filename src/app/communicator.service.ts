import { Injectable } from "@angular/core";
import { Subject, SubjectSubscriber } from 'rxjs/Subject'
import { Character } from "./character";
@Injectable()
export class CommunicatorService {
    private mySubject = new Subject<Character>();

    public mySubjectO = this.mySubject.asObservable(); //osservabile dagli altri componenti

    changeSubject(value: Character) {
        this.mySubject.next(value);
    }
}