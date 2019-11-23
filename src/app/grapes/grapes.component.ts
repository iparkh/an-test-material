import { Component, OnInit } from '@angular/core';
import { GrapeService } from '../shared/grape.service';

@Component({
  selector: 'app-grapes',
  templateUrl: './grapes.component.html',
  styleUrls: ['./grapes.component.scss']
})
export class GrapesComponent implements OnInit {

  constructor(private service: GrapeService) { }

  ngOnInit() {
  }

}
