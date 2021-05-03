import { Component, OnInit,Input } from '@angular/core';
import Ivoiture from '../models/Ivoiture';

@Component({
  selector: 'app-cars-details',
  templateUrl: './cars-details.component.html',
  styleUrls: ['./cars-details.component.css']
})
export class CarsDetailsComponent implements OnInit {

  constructor() { }
  @Input() x : Ivoiture;
  ngOnInit(): void {
  }

}
