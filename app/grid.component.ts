import {Component, View} from 'angular2/core';
import {RangePipe} from './range.pipe';
import {CellChar} from './cell-char.component';
import {ConfigService} from './config.service';

@Component({
	selector: 'grid',
	templateUrl: 'app/templates/grid.html',
	pipes: [RangePipe],
	directives: [CellChar],
	providers: [ConfigService],
	styles:[`
		table {
			border-collapse: collapse;
		}
		table,
		td {
			border: 1px solid black;
		}
		.cell {
			text-align: center;
			width: 30px;
			height: 30px;
			padding: 0;
		}
		.border-top {
			border-top: 2px solid black;
		}
		.border-left {
			border-left: 2px solid black;
		}
	`]
})
export class Grid {
	public config;

	constructor(private _configService: ConfigService) {
		this.config = this._configService.getConfig();
	}
}
