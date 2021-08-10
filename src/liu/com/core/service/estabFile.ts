import { Injectable } from '@nestjs/common';
import * as fs from 'fs';
import { dirname } from 'src/utiles/getPathRoot';

@Injectable()
export class EstabFile {
  public estabFile(path: string): void {
    fs.mkdirSync(dirname + '/c/e', { recursive: true });
  }
}
