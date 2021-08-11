import { Module } from '@nestjs/common';
import { module as noteProcModule } from './liu/com/noteProc/module';

@Module({
  imports: [],
  controllers: [...noteProcModule.controllers],
  providers: [...noteProcModule.providers],
})
export class AppModule {}
