import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { SfcCodegenService } from './sfc-codegen.service';

@Module({
  imports: [],
  controllers: [AppController],
  providers: [AppService, SfcCodegenService],
})
export class AppModule {}
