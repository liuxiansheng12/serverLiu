import { Injectable } from '@nestjs/common';
import * as fs from 'fs';
import { dirname } from 'src/utiles/getPathRoot';

@Injectable()
export class RemoveFile {
  public removeFile(path: string): void {
    fs.unlinkSync(dirname + path);
  }
}
