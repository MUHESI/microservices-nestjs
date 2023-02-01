import { ArgumentMetadata, PipeTransform } from '@nestjs/common';
export declare class UpperAnFusionPipe implements PipeTransform {
    transform(entry: {
        data: string[];
    }, metadata: ArgumentMetadata): string | {
        data: string[];
    };
}
