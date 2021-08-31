import { Controller, Get } from '@nestjs/common';
import { Cat } from 'src/classes/cat.class';
import { CatService } from './cat.service';

@Controller('cat')
export class CatController {
    constructor (
        private catService: CatService
    ) {}

    @Get()
    async getCats(): Promise<Cat[]> {
        return this.catService.getCats();
    }
}
