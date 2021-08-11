import {
  Body,
  Controller,
  Post,
  UploadedFile,
  UseInterceptors,
} from '@nestjs/common';

import { FileInterceptor } from '@nestjs/platform-express';
import { createWriteStream } from 'fs';
import { join } from 'path';
import { dirname } from 'src/utiles/getPathRoot';

@Controller('/noteProc/uploadFile')
export class UploadFile {
  @Post('file')
  // img1，表示文件数据 对应的那个key
  @UseInterceptors(FileInterceptor('file'))
  UploadedFile(@UploadedFile() file, @Body() body) {
    const writeImage = createWriteStream(
      join(dirname + '/' + body.path, `${file.originalname}`),
    );
    writeImage.write(file.buffer);
  }
}
