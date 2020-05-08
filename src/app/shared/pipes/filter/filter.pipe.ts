import {Pipe, PipeTransform} from '@angular/core';

@Pipe({
  name: 'filter'
})
export class FilterPipe implements PipeTransform {

  transform(value: any, filterBy: string, propName: string) {
    if (!filterBy) {
      return value;
    }
    const filterValue = filterBy.trim().toLowerCase();
    const resultArray = [];
    value.forEach(item => {
      const propertyValue = item[propName].toLowerCase();
      if (propertyValue.startsWith(filterValue)) {
        resultArray.push(item);
      }
    });
    return resultArray;
  }

}
