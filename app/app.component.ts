import {Component} from 'angular2/core';
import {Grid} from './grid.component';
import {ConfigService} from './config.service';

@Component({
    selector: 'my-app',
    templateUrl: 'app/templates/app.html',
    directives: [Grid],
    providers: [ConfigService]
})

export class AppComponent {
	public size: number;
	public square: number;

	constructor(private _configService: ConfigService) {
		this.size = 9;
		this.square = Math.sqrt(this.size);

		this._configService.setOption('size', this.size);
		this._configService.setOption('square', this.square);
	}
}