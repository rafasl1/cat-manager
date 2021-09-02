import { Body, Controller, Delete, Get, Param, Post, Put, Query } from '@nestjs/common';
import { Cat } from 'src/classes/cat.class';
import { CatDto } from 'src/models/cat.dto';
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

    @Post()
    public postCat(@Body() cat: CatDto): Cat[] {
        return this.catService.postCat(cat);
    }

    @Get(':id')
    public async getCatById(@Param('id') id: number): Promise<Cat> {
        return this.catService.getCatById(id);
    }

    @Delete(':id')
    public async deleteCatById(@Param('id') id: number): Promise<Cat[]> {
        return this.catService.deleteCat(id);
    }

    @Put(':id')
    public async putCatById(@Param('id') id: number, @Query() query): Promise<Cat> {
        const propertyName = query.property_name;
        const propertyValue = query.property_value;
        return this.catService.putCatById(id, propertyName, propertyValue);
    }
}
