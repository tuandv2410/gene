import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Document, Model, Types } from 'mongoose';
import { Drug, DrugDocument } from 'src/model/drug.model';
import { CreateDrugDto } from './dto/create-drug.dto';
import { FilterDrugDto } from './dto/filter-drug.dto';

@Injectable()
export class DrugService{
    constructor(
        @InjectModel(Drug.name) private drugModel: Model<DrugDocument>,
    ) {}
        
    create(userData: CreateDrugDto) {
        const createdUser = new this.drugModel(userData);
        return createdUser.save();
    }
    
    findById(_id: Types.ObjectId) {
        return this.drugModel.findById(_id).exec();
    }
    
    findAll(filters: FilterDrugDto) {
        return this.drugModel.find({...filters}).exec();
    }
    
    
    delete(_id: Types.ObjectId) {
        return this.drugModel.findByIdAndDelete(_id).exec();
    }
}
