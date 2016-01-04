import {Injectable} from 'angular2/core';

@Injectable()
export class ConfigService {

	public config = {};

	setOption(option, value) {
		this.config[option] = value;
	}

	getConfig() {
		return this.config;
	}

}