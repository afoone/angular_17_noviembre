import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'patientName'
})
export class PatientNamePipe implements PipeTransform {

  transform(value: string, ...args: string[]): string {
    const names = value.split(' ')

    return names[1].toUpperCase()+", "+names[0];
  }

}
