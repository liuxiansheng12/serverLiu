import { Module } from '@nestjs/common';
import { GetFilePaths } from './liu/com/core/controller/getFilePaths';
import { EstabFile } from './liu/com/core/service/estabFile';
import { GetFilePathSer } from './liu/com/core/service/getFilePaths';

@Module({
  imports: [],
  controllers: [GetFilePaths],
  providers: [GetFilePathSer, EstabFile],
})
export class AppModule {}
