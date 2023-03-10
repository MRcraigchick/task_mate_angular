import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-bin-icon',
  templateUrl: './bin.component.html',
  styleUrls: ['./bin.component.scss'],
})
export class BinComponent {
  @Input() color: string = 'black';
  @Input() scale: number = 0.8;
}
