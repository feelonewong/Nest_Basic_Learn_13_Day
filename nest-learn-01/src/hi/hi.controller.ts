import { Controller, Get } from '@nestjs/common'
import { HiService } from './hi.service'

@Controller('hi')
export class HiController {
  constructor(private readonly hiService: HiService) {}
  @Get()
  hello(): string {
    return this.hiService.hi()
  }
}
