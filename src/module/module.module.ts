import { Module } from '@nestjs/common';
import { UserModule } from './user/user.module';
import { DrugModule } from './drug/drug.module';

@Module({
  imports: [UserModule, DrugModule]
})
export class ModuleModule {}
