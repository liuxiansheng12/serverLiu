import { GetFilePaths } from './controller/getFilePaths';
import { UploadFile } from './controller/uploadFile';
import { EstabFile } from './service/estabFile';
import { GetFilePathSer } from './service/getFilePaths';
import { RemoveFile } from './service/removeFile';

export const module = {
  controllers: [GetFilePaths, UploadFile],
  providers: [GetFilePathSer, EstabFile, RemoveFile],
};
