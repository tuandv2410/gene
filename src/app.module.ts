import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { Drug } from './model/drug.model';
import { DrugDto } from './module/drug/dto/drug.dto';
import { ModuleModule } from './module/module.module';

@Module({
  imports: [
    ModuleModule,
    MongooseModule.forRoot(process.env.DB_URL)
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
