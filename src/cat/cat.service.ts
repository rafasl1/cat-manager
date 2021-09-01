import { Injectable, HttpException } from '@nestjs/common';
import { Cat } from 'src/classes/cat.class';

@Injectable()
export class CatService {
    private catsArray: Array<Cat>;

    public getCats(): Cat[] {
        this.createMy2Cats();
        return this.catsArray;
    }

    public postCat(cat: Cat) {
        return this.catsArray.push(cat);
    }

    public getCatById(id: number): Cat {
        const searchedCat = this.catsArray.find(cat => cat.id === id);
        if(!searchedCat) {
            throw new HttpException(`Cannot find cat with id ${id}`, 404);
        }
        return searchedCat;
    }

    public deleteCat(id: number): Cat[] {
        const searchedCatPosition = this.catsArray.findIndex(cat => cat.id === id);
        if(searchedCatPosition === -1) {
            throw new HttpException(`Cannot find cat with id ${id}`, 404);
        }
        this.catsArray.splice(searchedCatPosition, 1);
        return this.catsArray;
    }

    public putCatById(id: number, propertyName: string, propertyValue: string) {
        const searchedCatPosition = this.catsArray.findIndex(cat => cat.id === id);
        if(searchedCatPosition === -1) {
            throw new HttpException(`Cannot find cat with id ${id}`, 404);
        }
        this.catsArray[searchedCatPosition][propertyName] = propertyValue;
        return 
    }

    private createMy2Cats(): void {
        const floco = new Cat("Floco", "Albino");
        const pe = new Cat("Pê", "Siames");

        this.postCat(floco);
        this.postCat(pe);
    }
}
