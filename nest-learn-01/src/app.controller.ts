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
  @Get('/provide-value')
  provideValue() {
    return this.hdService.getProvideValue()
  }
  @Get('/run-service')
  runService() {
    return this.hdService.getProdServiceConfig()
  }
  @Get('/db-service')
  DbService() {
    return this.hdService.getDbService()
  }
  @Get()
  hello() {
    return this.appService.findOne()
  }
}
