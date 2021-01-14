import { Body, Controller, Get, Post, UseInterceptors } from '@nestjs/common';
import { DrugService } from './drug.service';
import { FilterDrugDto } from './dto/filter-drug.dto';
import { CreateDrugDto } from './dto/create-drug.dto';
import { Drug } from 'src/model/drug.model';

@Controller('drug')
export class DrugController {
    constructor(
        private readonly service: DrugService
    ) {}

    @Get()
    async get(
        @Body() filterDto: FilterDrugDto
    ): Promise<Drug> {
        const res= await this.service.findAll(filterDto)
        console.log(res);
        return res
        
    }

    @Post()
    async create(
        @Body() userData: CreateDrugDto
    ): Promise<Boolean> {
        await this.service.create(userData);
        return true;
    }
}
