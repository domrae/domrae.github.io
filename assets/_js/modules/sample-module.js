import $ from 'jquery';

/**
 * @class SampleModule
 * @author Dominic <dominicgangx@gmail.com>
 * [Description here]
 * data-component = 'component-id-here'
 */
export class SampleModule {
	constructor () {
		this.scope = $('.scope-selector-here');
	}

	init() {
		console.log('init');
		if (this.scope.length) {
			console.log('scope exists');
		}
	}
}

export function init() {
	let module = new SampleModule();
	module.init();
}