import { Pipe, PipeTransform } from '@angular/core';
import { Post } from '../models/post.interface';

@Pipe({
  name: 'formatPostDate'
})
export class FormatPostDatePipe implements PipeTransform {

  transform(value: Post | undefined, ...args: unknown[]): Date {
    return new Date(value?.created_at ?? "");
  }

}
