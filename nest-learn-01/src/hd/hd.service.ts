import { Get, Inject, Injectable } from '@nestjs/common'

interface IConfigService {
  url: string
}
@Injectable()
export class HdService {
  constructor(
    @Inject('appName') private readonly appName: string,
    @Inject('configService') private readonly configService: IConfigService,
    @Inject('DBService') private readonly dbService: string,
  ) {}

  getHd() {
    return 'hd service method'
  }
  getProvideValue() {
    return `getProvideValue: ${this.appName}`
  }
  getProdServiceConfig() {
    return `get Prod Service Config:` + this.configService.url
  }
  getDbService() {
    return `dbService: ${this.dbService}`
  }
}
