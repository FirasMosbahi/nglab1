import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'skills'
})
export class SkillsPipe implements PipeTransform {

  transform(value: string[] | undefined, ...args: unknown[]): string | undefined {
    if (value?.length){
      return `${value.join(', ')} and many others ...`;
    } else {
      return undefined;
    }
  }
}
