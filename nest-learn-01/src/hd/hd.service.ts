import { Get, Injectable } from '@nestjs/common'

@Injectable()
export class HdService {
  getHd() {
    return 'hd service method'
  }
}
