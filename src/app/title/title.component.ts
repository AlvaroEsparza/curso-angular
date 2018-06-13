import { Component, OnInit } from '@angular/core';

@Component({
	selector: 'app-title',
	templateUrl: 'title.component.html',
	styleUrls: ['title.component.css']
})
export class TitleComponent implements OnInit{
	public name:string = "Alvaro";
	public edad:number;
	private _value : string;
	public edades:number [];

	public isAvailable : boolean = true;

	constructor(){}

	//se ejecuta cuando el componente ha sido inicializado
	ngOnInit(){
			this.name= "Alex";
			this.edad=23;
			setTimeout(()=> this.isAvailable = false, 3000);
		}


	getEdadNombre() : string{
		return `${this.name} : ${this.edad}`;
	}
}

