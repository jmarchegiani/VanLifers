import { Component } from '@angular/core'

@Component({
	selector: 'test-component',
	templateUrl : './testing-component.component.html'
})

export class TestingComponent{

	public title: string;
	public comment: string;
	public time: number;

	constructor(){
		this.title = 'Johny Beltran esta en la casa, ';
		this.comment = 'Blog de la vida y la poesia';
		this.time = 2020
		console.log('Testing component cargado correctamente.')
	}

}