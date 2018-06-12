import { Component, OnInit } from '@angular/core';

@Component({
	selector: 'title',
	templateUrl: 'title.component.html'
})
export class TitleComponent implements OnInit{
	public name:string = "Alvaro";
	public edad:number;
	private _value : string;
	public edades:number [];

	constructor(){}
	
	//se ejecuta cuando el componente ha sido inicializado
	ngOnInit(){
			this.name= "Alex";
			this.edad=23;
		}

	getEdadNombre() : string{
		return `${this.name} : ${this.edad}`;
	}
}

