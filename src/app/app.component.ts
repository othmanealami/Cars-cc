import { Component } from '@angular/core';
import Ivoiture from './models/Ivoiture';
import ICar from './models/Ivoiture'
@Component({
	selector: 'app-root',
	templateUrl: './app.component.html',
	styleUrls: ['./app.component.css']
})

export class AppComponent {


	public marque;
	public immatriculation;
	public nombre;
	public couleur;
  public cars: Ivoiture[] = [];
	public addToList() {
	
      let car : Ivoiture = {
        marque: this.marque,
        immatriculation: this.immatriculation,
        nombre: this.nombre,
        couleur: this.couleur,
      };

			this.cars.push(car);
			this.marque = '';
      this.immatriculation='';
      this.nombre='';
      this.couleur='';
	}

	public deleteTask(index) {
		this.cars.splice(index, 1);
	}
}

