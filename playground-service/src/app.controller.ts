import { Body, Controller, Get, Post } from '@nestjs/common';
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

  @Post('/ali-bailian/html2sfc')
  html2sfc(@Body('prompt') prompt: string) {
    return this.sfcCodegenService.html2sfc(prompt);
  }

  @Post('/ali-bailian/translator')
  translator(@Body('prompt') prompt: string) {
    const data = this.sfcCodegenService.translator(prompt);
    return { data };
  }
}
