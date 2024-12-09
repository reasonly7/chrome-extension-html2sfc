import { Controller, Get, Query } from '@nestjs/common';
import { AppService } from './app.service';
import { SfcCodegenService } from './sfc-codegen.service';

@Controller()
export class AppController {
  constructor(
    private readonly appService: AppService,
    private readonly sfcCodegenService: SfcCodegenService,
  ) {}

  @Get()
  getHello(): string {
    return this.appService.getHello();
  }

  @Get('ali-bailian/html2sfc')
  html2sfc(@Query('prompt') prompt: string) {
    return this.sfcCodegenService.html2sfc(prompt);
  }
}
