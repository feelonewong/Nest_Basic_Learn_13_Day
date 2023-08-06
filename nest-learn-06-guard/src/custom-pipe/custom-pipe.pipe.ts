import {
  ArgumentMetadata,
  BadRequestException,
  Injectable,
  PipeTransform,
} from '@nestjs/common';

@Injectable()
export class CustomPipePipe implements PipeTransform {
  transform(value: any, metadata: ArgumentMetadata) {
    if (!value.title) {
      throw new BadRequestException('标题不能为空');
    }
    if (!value.content) {
      throw new BadRequestException('内容不能为空');
    }
    console.log(value, metadata);
  }
}
