import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-ding-talk',
  templateUrl: './ding-talk.component.html',
  styles: [],
})
export class DingTalkComponent implements OnInit {
  url: string;

  constructor(private router: Router, private activatedRouter: ActivatedRoute) {
  }

  ngOnInit(): void {
    this.router.navigateByUrl('/');
  }

}
