import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-common-table-detail',
  templateUrl: './common-table-detail.component.html',
  styles: [],
})
export class CommonTableDetailComponent implements OnInit {

  @Input()
  className = '';
  @Input()
  value: string[] = [];
  @Input()
  key: string[] = [];
  @Input()
  showScroll = { x: '800px' };

  constructor() {
  }

  ngOnInit(): void {
  }
}
