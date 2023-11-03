import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-button',
  templateUrl: './button.component.html',
  styleUrls: ['./button.component.scss'],
})
export class ButtonComponent implements OnInit {
  @Input('text') text?: string = 'Button';

  constructor() {}

  ngOnInit(): void {
    console.log('button init');
  }
}
