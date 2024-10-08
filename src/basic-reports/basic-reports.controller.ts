import { Controller, Get, Param, Res } from '@nestjs/common';
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

  @Get('employment-letter')
  async employmentLetter(@Res() response:Response){
    const pdfDoc = this.basicReportsService.employmentLetter();
    
    response.setHeader('Content-type','application/pdf');
    pdfDoc.info.Title = 'Employment-Letter';
    pdfDoc.pipe(response)
    pdfDoc.end();
  }

  @Get('employment-letter/:id')
  async employmentLetterById(
    @Res() response:Response,
    @Param() id:string
  ){
    const pdfDoc = this.basicReportsService.employmentLetterById(id);
    
    response.setHeader('Content-type','application/pdf');
    pdfDoc.info.Title = 'Employment-Letter';
    pdfDoc.pipe(response)
    pdfDoc.end();
  }
}
