import { Controller, Get } from '@nestjs/common'
import { HelloService } from './hello.service'
import { HiService } from '../hi/hi.service'

@Controller('hello')
export class HelloController {
  constructor(private readonly helloService: HelloService, private readonly hiService: HiService) {}
  @Get()
  hello(): string {
    return this.helloService.hello()
  }
  @Get('/call-hi')
  hi() {
    return this.hiService.hi()
  }
}
