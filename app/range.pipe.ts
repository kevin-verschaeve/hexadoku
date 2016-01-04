import {Pipe, PipeTransform} from 'angular2/core';

@Pipe({
	name: 'range'
})
export class RangePipe implements PipeTransform {
  transform(input, args: any[]) {
  	var max = args[0] || 0,
  		i = 1;

  	for (i; i < max; i++) {
  		input.push(i);
  	}

  	return input;
  }
}