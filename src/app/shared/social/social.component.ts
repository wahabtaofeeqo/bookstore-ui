import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'w-social',
  templateUrl: './social.component.html',
  styleUrls: ['./social.component.scss']
})
export class SocialComponent implements OnInit {

  @Input() classes: string = '';

  constructor() { }

  ngOnInit(): void {
  }

}
