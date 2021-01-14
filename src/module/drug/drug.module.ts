import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { Drug, DrugSchema } from 'src/model/drug.model';
import { DrugController } from './drug.controller';
import { DrugService } from './drug.service';

@Module({
  imports: [
    MongooseModule.forFeature([
      {name: Drug.name, schema: DrugSchema}
    ]),
  ],
  controllers: [DrugController],
  providers: [
    DrugService,
  ]
})
export class DrugModule {}
