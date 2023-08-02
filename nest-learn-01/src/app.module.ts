import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { HdService } from './hd/hd.service';

@Module({
  imports: [],
  controllers: [AppController],
  providers: [AppService, HdService],
})
export class AppModule {}
