import { Component, OnInit,Input } from '@angular/core';
import Ivoiture from '../models/Ivoiture';

@Component({
  selector: 'app-cars',
  templateUrl: './cars.component.html',
  styleUrls: ['./cars.component.css']
})
export class CarsComponent implements OnInit {

  constructor() { }
  @Input() deleteTask: (args: any) => void;
  @Input() cars: Ivoiture[] = [];
  ngOnInit(): void {
  }

}
