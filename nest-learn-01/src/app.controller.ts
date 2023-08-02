import { Controller, Get } from '@nestjs/common'
import { AppService } from './app.service'
import { HdService } from './hd/hd.service'

@Controller()
export class AppController {
  constructor(private readonly appService: AppService, private readonly hdService: HdService) {
    // this.appService = new AppService()
  }

  @Get()
  findOne(): string {
    return this.appService.findOne()
  }

  @Get('/hd')
  callBackHdService() {
    return this.hdService.getHd()
  }
}
