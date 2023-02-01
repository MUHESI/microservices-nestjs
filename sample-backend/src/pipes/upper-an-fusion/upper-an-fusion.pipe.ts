import { ArgumentMetadata, Injectable, PipeTransform } from '@nestjs/common';

@Injectable()
export class UpperAnFusionPipe implements PipeTransform {
  transform(entry: { data: string[] }, metadata: ArgumentMetadata) {
    if (metadata.type === 'body') {
      return entry.data.map((Element) => Element.toLocaleUpperCase()).join('-');
    }

    return entry;
  }
}
