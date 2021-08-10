import { Controller, Get, Query } from '@nestjs/common';
import { EstabFile } from '../service/estabFile';
import { GetFilePathSer } from '../service/getFilePaths';

@Controller('/core')
export class GetFilePaths {
  constructor(
    private readonly GetFilePathService: GetFilePathSer,
    private readonly EstabFileSer: EstabFile,
  ) {}
  @Get('/getFilePaths')
  getFilePaths(): string {
    return this.GetFilePathService.getFilePaths();
  }

  @Get('/estabFile')
  estabFile(@Query('path') path: string): string {
    console.log(path);
    this.EstabFileSer.estabFile('/' + path);
    return JSON.stringify({
      result: 'ok',
    });
  }
}
