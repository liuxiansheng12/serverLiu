import { Module } from '@nestjs/common';
import { GetFilePaths } from './liu/com/core/controller/getFilePaths';
import { UploadFile } from './liu/com/core/controller/uploadFile';
import { EstabFile } from './liu/com/core/service/estabFile';
import { GetFilePathSer } from './liu/com/core/service/getFilePaths';

@Module({
  imports: [],
  controllers: [GetFilePaths, UploadFile],
  providers: [GetFilePathSer, EstabFile],
})
export class AppModule {}
