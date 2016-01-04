import {Injectable} from 'angular2/core';

@Injectable()
export class MapService {
	public map = [];

	/**
	 * Return the grid map
	 */
	getMap() {
		return this.map;
	}

	/**
	 * Put a char in a cell of the grid
	 * @param {number} row       the row index where to put the char
	 * @param {number} column    the column index where to put the char
	 * @param {string} character the character to put in the cell
	 */
	setCell(row, column, character) {
		this.checkRow(row);

		this.map[row][column] = character;
	}

	/**
	 * Check if a char is in a row
	 * @param  {string}  character the char to find
	 * @param  {array}  row        the row to search in
	 * @return {Boolean}           wether the char is found or not
	 */
	isCharInRow(character, row) {
		this.checkRow(row);

		if (this.map[row].indexOf(character) >= 0) {
			return true;
		}

		return false;
	}

	/**
	 * Prepare the row if is not already an array
	 * @param  {number} row the index to check
	 */
	checkRow(row) {
		if (typeof this.map[row] === 'undefined') {
			this.map[row] = [];
		}
	}
}