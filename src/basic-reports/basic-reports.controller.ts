import { Controller, Get, Res } from '@nestjs/common';
import { BasicReportsService } from './basic-reports.service';
import { Response } from 'express'

@Controller('basic-reports')
export class BasicReportsController {
  constructor(private readonly basicReportsService: BasicReportsService) {}

  @Get()
  async hello(@Res() response:Response){
    const pdfDocument = this.basicReportsService.hello();
    
    response.setHeader('Content-Type','application/pdf'); 
    pdfDocument.info.Title = 'Hola'
    pdfDocument.pipe(response);
    pdfDocument.end();
  }
}
