import { Controller, Get, Query } from '@nestjs/common';
import { EstabFile } from '../service/estabFile';
import { GetFilePathSer } from '../service/getFilePaths';
import { RemoveFile } from '../service/removeFile';

@Controller('/core')
export class GetFilePaths {
  constructor(
    private readonly GetFilePathService: GetFilePathSer,
    private readonly EstabFileSer: EstabFile,
    private readonly RemoveFileSer: RemoveFile,
  ) {}
  @Get('/getFilePaths')
  getFilePaths(): string {
    return this.GetFilePathService.getFilePaths();
  }

  @Get('/estabFile')
  estabFile(@Query('path') path: string): string {
    this.EstabFileSer.estabFile('/' + path);
    return JSON.stringify({
      result: 'ok',
    });
  }

  @Get('/removeFile')
  removeFile(@Query('path') path: string): string {
    this.RemoveFileSer.removeFile('/' + path);
    return JSON.stringify({
      result: 'ok',
    });
  }
}
