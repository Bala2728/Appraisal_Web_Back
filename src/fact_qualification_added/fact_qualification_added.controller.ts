import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
  UseInterceptors,
  UploadedFile,
} from '@nestjs/common';
import { FactQualificationAddedService } from './fact_qualification_added.service';
import { CreateFactQualificationAddedDto } from './dto/create-fact_qualification_added.dto';
import { UpdateFactQualificationAddedDto } from './dto/update-fact_qualification_added.dto';
import { FileInterceptor } from '@nestjs/platform-express';
import { diskStorage } from 'multer';
import { writeFile } from 'fs/promises';

@Controller('fact_qualification_added')
export class FactQualificationAddedController {
  constructor(
    private readonly factQualificationAddedService: FactQualificationAddedService,
  ) {}

  @Post('create')
  create(
    @Body() createFactQualificationAddedDto: CreateFactQualificationAddedDto,
  ) {
    return this.factQualificationAddedService.create(
      createFactQualificationAddedDto,
    );
  }

  @Get('findAll')
  findAll() {
    return this.factQualificationAddedService.findAll();
  }

  @Get('findOne')
  findOne(@Body('qualificationAddedId') id: string) {
    return this.factQualificationAddedService.findOne(id);
  }

  @Post('update')
  update(
    @Body() updateFactQualificationAddedDto: UpdateFactQualificationAddedDto,
  ) {
    return this.factQualificationAddedService.update(
      updateFactQualificationAddedDto,
    );
  }

  @Delete('delete')
  remove(@Body('qualificationAddedId') id: string) {
    return this.factQualificationAddedService.remove(id);
  }

  @Post('upload')
  @UseInterceptors(FileInterceptor('image'))
  imageUpload(
    @Body('userId') userId: string,
    @UploadedFile() file: Express.Multer.File,
  ) {
    console.log(file);
    let filePath =
      './uploadCertificate/' + userId + '.' + file.originalname.split('.')[1];
    console.log(filePath);
    writeFile(filePath, file.buffer);

    let fileName = userId + '.' + file.originalname.split('.')[1];

    console.log(fileName);

    return this.factQualificationAddedService.uploadfile(file, userId);
  }
}
