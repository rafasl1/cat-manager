import { Injectable, HttpException } from '@nestjs/common';
import { Cat } from 'src/classes/cat.class';
import { catsMock } from 'src/mocks/cats.mock';

@Injectable()
export class CatService {
    private catsArray: Array<Cat> = catsMock;

    public getCats(): Cat[] {
        return this.catsArray;
    }

    public postCat(cat: Cat): Cat[] {
        this.catsArray.push(cat);
        return this.catsArray;
    }

    public getCatById(id: number): Promise<Cat> {
        const catId = Number(id);
        return new Promise(resolve => {
            const searchedCat = this.catsArray.find(cat => cat.id === catId);
            if(!searchedCat) {
                throw new HttpException(`Cannot find cat with id ${id}`, 404);
            }
            return resolve(searchedCat);
        });
    }

    public deleteCat(id: number): Promise<Cat[]> {
        const catId = Number(id);
        return new Promise(resolve => {
            const searchedCatPosition = this.catsArray.findIndex(cat => cat.id === catId);
            if(searchedCatPosition === -1) {
                throw new HttpException(`Cannot find cat with id ${id}`, 404);
            }
            this.catsArray.splice(searchedCatPosition, 1);
            return resolve(this.catsArray);
        });
    }

    public putCatById(
        id: number, 
        propertyName: string, 
        propertyValue: string
    ): Promise<Cat> {
        const catId = Number(id);
        return new Promise(resolve => {
            const searchedCatPosition = this.catsArray.findIndex(cat => cat.id === catId);
            if(searchedCatPosition === -1) {
                throw new HttpException(`Cannot find cat with id ${id}`, 404);
            }
            this.catsArray[searchedCatPosition][propertyName] = propertyValue;
            return resolve(this.catsArray[searchedCatPosition]);
        });
    }
}
