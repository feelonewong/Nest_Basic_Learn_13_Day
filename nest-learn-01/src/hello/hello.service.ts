import { Injectable } from '@nestjs/common'

@Injectable()
export class HelloService {
  hello() {
    return 'hello service'
  }
}
