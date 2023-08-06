import {
  Body,
  Controller,
  Get,
  Param,
  ParseIntPipe,
  Post,
  UsePipes,
} from '@nestjs/common';
import { PrismaService } from './prisma.service';
import { CustomPipePipe } from './custom-pipe/custom-pipe.pipe';
@Controller()
export class AppController {
  constructor(private prisma: PrismaService) {}

  @Get()
  async getHello() {
    const newArticle = await this.prisma.article.create({
      data: {
        title: '新建文章标题3',
      },
    });
    const serializedArticle = {
      ...newArticle,
      id: newArticle.id.toString(),
    };
    return JSON.parse(JSON.stringify(serializedArticle));
  }
  @Get(':id')
  async getHello2(@Param('id', CustomPipePipe) id: number) {
    const queryArticle = await this.prisma.article.findUnique({
      where: {
        id: id,
      },
    });
    return {
      ...queryArticle,
      id: queryArticle.id.toString(),
    };
  }
  @UsePipes(CustomPipePipe)
  @Post('add')
  add(@Body() dto: Record<string, any>) {
    return dto;
  }
}
