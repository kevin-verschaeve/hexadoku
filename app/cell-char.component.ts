import {Component, Input, OnInit} from 'angular2/core';
import {Chars} from './chars';
import {MapService} from './map.service';

@Component({
	selector: 'cell-char',
	template: `
		<input type="text" [value]="character" (keypress)="checkChar($event)" class="editable" maxlength="1" size="1"/>
	`,
	providers: [MapService],
	styles: [`
		.editable {
			height: 100%;
			width: 100%;
			border: none;
			padding: 0;
			margin: 0;
			text-align: center;
			text-transform: uppercase;
		}
	`]
})
export class CellChar {
	@Input('rowIndex') rowIndex: number;
	@Input('columnIndex') columnIndex: number;

	public character: string;
	public map = [];

	constructor(private _mapService: MapService) {

	}

	ngOnInit() {
		this.setChar();
	}

	setChar() {
		this.character = this.addChar();
		this._mapService.setCell(this.rowIndex, this.columnIndex, this.character);
	}

	addChar() {
		var character = Chars[Math.floor(Math.random() * Chars.length)]

		if (this._mapService.isCharInRow(character, this.rowIndex)) {
			return this.addChar();
		}

		return character
	}

	checkChar(e) {
		if (false === this._isValidChar(e.which)) {
			e.preventDefault();
		}
	}

	_isValidChar(inChar) {
		return Chars.indexOf(String.fromCharCode(inChar)) >= 0;
	}
}