import { Injectable, OnModuleInit } from '@nestjs/common';
import { PrismaClient } from '@prisma/client';
import { PrinterService } from 'src/printer/printer.service';
import { getHelloWorldReport } from 'src/reports';

@Injectable()
export class BasicReportsService extends PrismaClient implements OnModuleInit {
  async onModuleInit() {
    await this.$connect();
    console.log('Conected to data base')
  }

  constructor(private readonly printerService:PrinterService){
    super();
  }
  
  hello(){

    const docDefinition = getHelloWorldReport({
      name:'Angel Cepeda'
    });


    const doc = this.printerService.createPdf(docDefinition);
    return doc;
  }


}
