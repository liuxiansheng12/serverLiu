import { Injectable } from '@nestjs/common';
import * as fs from 'fs';
import { dirname } from 'src/utiles/getPathRoot';

@Injectable()
export class GetFilePathSer {
  public getFilePaths(): string {
    const arr = this.getFilePath(dirname);
    return JSON.stringify({
      result: arr,
    });
  }
  private getFilePath(url: string): any {
    const paths: any = [];
    const arr = fs.readdirSync(url);
    if (arr.length === 0) return;
    for (let i = 0; i < arr.length; i++) {
      const obj = {};
      obj['path'] = arr[i];
      if (arr[i].indexOf('.html') == -1 && arr[i].indexOf('.pdf') == -1) {
        obj['childrenPath'] = this.getFilePath(url + '/' + arr[i]);
      }
      paths.push(obj);
    }
    return paths;
  }
}
