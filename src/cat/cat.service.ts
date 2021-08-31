import { Injectable } from '@nestjs/common';
import { Cat } from 'src/classes/cat.class';

@Injectable()
export class CatService {
    public getCats(): Cat[] {
        const floco = new Cat("Floco", "Albino");
        const pe = new Cat("Pê", "Siames");

        return [floco, pe];
    }
}
