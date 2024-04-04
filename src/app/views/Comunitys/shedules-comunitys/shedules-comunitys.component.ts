import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-shedules-comunitys',
  standalone: true,
  imports: [],
  templateUrl: './shedules-comunitys.component.html',
  styleUrl: './shedules-comunitys.component.scss'
})
export class ShedulesComunitysComponent implements OnInit {
  name: string = '';

  constructor(private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.route.params.subscribe(params => {
      this.name = params['name'];
    });
  }
}
