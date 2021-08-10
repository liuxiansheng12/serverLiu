import { Injectable } from '@nestjs/common';
import * as fs from 'fs';
import { dirname } from 'src/utiles/getPathRoot';

@Injectable()
export class GetFilePathSer {
  public getFilePaths(): string {
    console.log(dirname);
    const filePaths = fs.readdirSync(dirname);
    return JSON.stringify({
      path: filePaths,
      dirname: dirname,
    });
  }
}
